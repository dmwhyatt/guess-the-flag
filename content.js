// =====================================================================
//  EDIT THIS FILE. It holds everything the game says.
//
//  For each scenario, write your comic text in `text`. While `text` is
//  empty the game shows the `conditions` line instead (marked DRAFT),
//  so you can play-test before writing anything.
//
//  Don't change `flag` unless you also change the conditions; the
//  valid values are: "green", "yellow-green", "yellow", "red-yellow", "red".
//
//  `basis` says where the answer comes from:
//    "handbook"  - an explicit criterion in the CUCBC Flag Guidelines
//    "inferred"  - the handbook gives no threshold for this flag, so the
//                  conditions are a plausible in-between case. Adjust freely.
//
//  Source: https://cucbc.org/handbook/flag
// =====================================================================

window.SCENARIOS = [
  // ---------------- GREEN (3) ----------------
  {
    flag: "green",
    basis: "inferred",
    conditions:
      "Light breeze (5-10 mph), normal river level, gentle stream, clear visibility, around 12°C.",
    reason:
      "Nothing in the guidelines is close to being triggered, so there are no restrictions.",
    text: "",
  },
  {
    flag: "green",
    basis: "handbook",
    conditions:
      "Cold morning (3°C) with a 15 mph wind. Bracing, but above freezing and well under 35 mph.",
    reason:
      "The cold-weather rule only bites at 0°C or below with 25 mph wind; the wind rule needs 35 mph.",
    text: "",
  },
  {
    flag: "green",
    basis: "handbook",
    conditions:
      "Atmospheric morning mist, but a boat 300 m away is clearly visible. Calm, normal stream.",
    reason:
      "Fog only counts when you can't see another boat at 150 m. Spooky is not a flag colour.",
    text: "",
  },

  // ---------------- YELLOW/GREEN (2) ----------------
  {
    flag: "yellow-green",
    basis: "inferred",
    conditions:
      "Steady 20-25 mph wind with occasional gusts, 8°C. Lumpy on the reaches, under the 35 mph Yellow threshold.",
    reason:
      "Too lively for novice coxes, not strong enough for Yellow: senior and University crews only.",
    text: "",
  },
  {
    flag: "yellow-green",
    basis: "inferred",
    conditions:
      "River up about 0.5 m after rain, stream running at 3-4 mph. Light wind, good visibility.",
    reason:
      "A noticeable stream, but under the 5 mph Yellow guideline: no novice coxes.",
    text: "",
  },

  // ---------------- YELLOW (3) ----------------
  {
    flag: "yellow",
    basis: "handbook",
    conditions:
      "At 22:00 the Met Office forecast for tomorrow morning shows winds of 35 mph or more.",
    reason:
      "A forecast wind of 35 mph or more means a Yellow flag is set at 22:00 for the next morning.",
    text: "",
  },
  {
    flag: "yellow",
    basis: "handbook",
    conditions:
      "Forecast -2°C with a 25 mph wind. Hypothermia risk for any crew sitting still for 10 minutes.",
    reason:
      "0°C or below with a 25 mph wind triggers a Yellow flag.",
    text: "",
  },
  {
    flag: "yellow",
    basis: "handbook",
    conditions:
      "Thick fog: from the bank you can't make out another boat 150 m away. Otherwise calm.",
    reason:
      "Fog that hides a boat at 150 m means Yellow, and every crew out must carry white bow and stern lights, even in daylight.",
    text: "",
  },

  // ---------------- RED/YELLOW (1) ----------------
  {
    flag: "red-yellow",
    basis: "inferred",
    conditions:
      "Gale-force gusts of 45+ mph and the stream well over 5 mph, but the level is up less than 1.5 m and there is no ice.",
    reason:
      "Well past Yellow but not technically unrowable: closed except tub pairs (Jesus Lock to Chesterton) and University crews with their Head Coach's permission.",
    text: "",
  },

  // ---------------- RED (1) ----------------
  {
    flag: "red",
    basis: "handbook",
    conditions:
      "Hard frost overnight: ice more than 1 mm thick reaching more than 2 m out from the bank.",
    reason:
      "Ice over 1 mm thick more than 2 m from the bank makes the river unrowable. Red: closed to everyone.",
    text: "",
  },
];

// End-of-game verdicts. The first entry whose `min` is less than or
// equal to the player's score is shown, so keep them in descending order.
// These are placeholders. Rewrite them!
window.VERDICTS = [
  { min: 10, text: "Perfect. The Executive Committee would like a word about your availability at 06:00." },
  { min: 8, text: "Solid. You may cox a first VIII without anyone filing a complaint." },
  { min: 6, text: "Respectable. A good bank party member, so long as you stay on the bank." },
  { min: 4, text: "Worrying. Please don't set the flag for anyone." },
  { min: 1, text: "Your blade is being confiscated for your own safety." },
  { min: 0, text: "Zero. Random guessing averages two, so that took real talent." },
];
