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
  $("conditions").innerHTML = "<strong>The actual conditions:</strong> ";
  $("conditions").append(s.conditions);
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
