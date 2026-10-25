// Flag definitions, in order of severity. Restrictions are quoted from
// https://cucbc.org/handbook/flag
const FLAGS = {
  "green": {
    label: "Green",
    img: "assets/flags/grn.png",
    restriction: "There are no restrictions on which crews may boat.",
  },
  "yellow-green": {
    label: "Yellow/Green",
    img: "assets/flags/ygr.png",
    restriction: "Boating is restricted to University crews and Senior Crews and tub pairs. No novice cox may steer a boat under these conditions.",
  },
  "yellow": {
    label: "Yellow",
    img: "assets/flags/yel.png",
    restriction: "Boating is restricted to University crews, first VIIIs and tub pairs.",
  },
  "red-yellow": {
    label: "Red/Yellow",
    img: "assets/flags/ryl.png",
    restriction: "The river is closed, except to tub pairs between Jesus Lock and Chesterton and University crews with the express permission of their Head Coach.",
  },
  "red": {
    label: "Red",
    img: "assets/flags/red.png",
    restriction: "The river is closed to all crews.",
  },
};

// Condition readouts shown above the flags, as inline SVG line icons.
const wave = (y) => `<path d="M2 ${y}c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>`;
const STATS = {
  wind: {
    label: "Wind",
    icon: '<path d="M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/>',
  },
  temp: {
    label: "Temp",
    icon: '<path d="M14 14.76V4.5a2.5 2.5 0 0 0-5 0v10.26a4.5 4.5 0 1 0 5 0z"/>',
  },
  visibility: {
    label: "Visibility",
    icon: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  },
  stream: {
    label: "Stream",
    icon: wave(16) + '<path d="M4 8h14M15 5l3 3-3 3"/>',
  },
  level: {
    label: "Level",
    icon: wave(15) + wave(20) + '<path d="M12 3v8M9 6l3-3 3 3"/>',
  },
  ice: {
    label: "Ice",
    icon: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17l17.4-10M9 4l3 2 3-2M9 20l3-2 3 2"/>',
  },
};

const $ = (id) => document.getElementById(id);
const screens = ["start", "question", "end"];

let deck = [];
let index = 0;
let score = 0;
let answered = false;

function show(name) {
  for (const s of screens) $(s).hidden = s !== name;
}

function shuffle(items) {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildFlagButtons() {
  const box = $("flags");
  box.innerHTML = "";
  Object.entries(FLAGS).forEach(([key, f], i) => {
    const b = document.createElement("button");
    b.className = "flag";
    b.dataset.flag = key;
    b.title = `${f.label} (${i + 1})`;
    b.innerHTML = `<img src="${f.img}" alt=""><span>${f.label}</span>`;
    b.addEventListener("click", () => answer(key));
    box.appendChild(b);
  });
}

function start() {
  deck = shuffle(window.SCENARIOS);
  index = 0;
  score = 0;
  show("question");
  render();
}

function render() {
  const s = deck[index];
  answered = false;
  $("progress").textContent = `${index + 1} / ${deck.length}`;

  const p = $("scenario");
  if (s.text.trim()) {
    p.textContent = s.text;
  } else {
    p.innerHTML = `<span class="draft">Draft</span>`;
    p.append(s.conditions);
  }

  const stats = $("stats");
  stats.innerHTML = "";
  for (const [key, st] of Object.entries(STATS)) {
    if (!s.stats?.[key]) continue;
    const li = document.createElement("li");
    li.dataset.stat = key;
    li.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${st.icon}</svg><span class="label">${st.label}</span><span class="value"></span>`;
    li.querySelector(".value").textContent = s.stats[key];
    stats.appendChild(li);
  }

  for (const b of $("flags").children) {
    b.disabled = false;
    b.classList.remove("correct", "incorrect", "chosen");
  }
  $("feedback").hidden = true;
}

function answer(key) {
  if (answered) return;
  answered = true;

  const s = deck[index];
  const right = key === s.flag;
  if (right) score++;

  for (const b of $("flags").children) {
    b.disabled = true;
    if (b.dataset.flag === s.flag) b.classList.add("correct");
    if (b.dataset.flag === key) b.classList.add("chosen", right ? "correct" : "incorrect");
  }

  const result = $("result");
  result.textContent = right ? "Correct!" : `Wrong! It was ${FLAGS[s.flag].label}.`;
  result.className = "verdict " + (right ? "right" : "wrong");
  if (s.key) $("stats").querySelector(`[data-stat="${s.key}"]`)?.classList.add("key");
  $("reason").textContent = s.reason;
  $("restriction").textContent = `${FLAGS[s.flag].label}: ${FLAGS[s.flag].restriction}`;
  $("next-btn").textContent = index + 1 < deck.length ? "Next" : "See score";
  $("feedback").hidden = false;
  $("next-btn").focus();
}

function next() {
  index++;
  if (index < deck.length) render();
  else finish();
}

function finish() {
  $("score").textContent = `${score} / ${deck.length}`;
  const v = window.VERDICTS.find((v) => score >= v.min);
  $("final-verdict").textContent = v ? v.text : "";
  show("end");
}

// Keyboard: 1-5 picks a flag, Enter/Space advances.
document.addEventListener("keydown", (e) => {
  if ($("question").hidden) return;
  const n = Number(e.key);
  if (!answered && n >= 1 && n <= 5) {
    answer(Object.keys(FLAGS)[n - 1]);
  }
});

$("count").textContent = window.SCENARIOS.length;
buildFlagButtons();
$("start-btn").addEventListener("click", start);
$("next-btn").addEventListener("click", next);
$("again-btn").addEventListener("click", start);
