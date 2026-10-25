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
    text:
      "A pleasant autumnal sun shines over the Cam on a calm, peaceful day.",
  },
  {
    flag: "green",
    basis: "handbook",
    conditions:
      "Cold morning (3°C) with a 15 mph wind. Bracing, but above freezing and well under 35 mph.",
    reason:
      "The cold-weather rule only bites at 0°C or below with 25 mph wind; the wind rule needs 35 mph.",
    text:
      "You can just about feel your hands and toes as you cycle to the boathouse. The wind blows right through you, and you shiver all the way there.",
  },
  {
    flag: "green",
    basis: "handbook",
    conditions:
      "Atmospheric morning mist, but a boat 300 m away is clearly visible. Calm, normal stream.",
    reason:
      "Fog only counts when you can't see another boat at 150 m. Spooky is not a flag colour.",
    text:
      "Last night's frost is slowly evaporating off, for another scenic morning on the river. Despite the mist, you have good visibility even in the faint morning light.",
  },

  // ---------------- YELLOW/GREEN (2) ----------------
  {
    flag: "yellow-green",
    basis: "inferred",
    conditions:
      "Steady 20-25 mph wind with occasional gusts, 8°C. Lumpy on the reaches, under the 35 mph Yellow threshold.",
    reason:
      "Too lively for novice coxes, not strong enough for Yellow: senior and University crews only.",
    text:
      "Waves are forming on the reach, and a mild headwind is blowing from every conceivable direction. Your captain will insist on doing pieces regardless.",
  },
  {
    flag: "yellow-green",
    basis: "inferred",
    conditions:
      "River up about 0.5 m after rain, stream running at 3-4 mph. Light wind, good visibility.",
    reason:
      "A noticeable stream, but under the 5 mph Yellow guideline: no novice coxes.",
    text:
      "The stream is picking up a bit, and you can't help but imagine playing Poohsticks from Cutter Ferry bridge. The paddle to the lock feels effortless, the paddle home feels abysmally slow.",
  },

  // ---------------- YELLOW (3) ----------------
  {
    flag: "yellow",
    basis: "handbook",
    conditions:
      "At 22:00 the Met Office forecast for tomorrow morning shows winds of 35 mph or more.",
    reason:
      "A forecast wind of 35 mph or more means a Yellow flag is set at 22:00 for the next morning.",
    text:
      "You're sitting in Spoons looking at the weather forecast, with winds scheduled to pick up. You're going to order another pint, because you're pretty sure the outing is getting cancelled. It's not.",
  },
  {
    flag: "yellow",
    basis: "handbook",
    conditions:
      "Forecast -2°C with a 25 mph wind. Hypothermia risk for any crew sitting still for 10 minutes.",
    reason:
      "0°C or below with a 25 mph wind triggers a Yellow flag.",
    text:
      "It's the day of Fairbairns, and you're marshalling for a leisurely four hours. Your coach told you to wear lots of layers, and you probably should've listened to them.",
  },
  {
    flag: "yellow",
    basis: "handbook",
    conditions:
      "Thick fog: from the bank you can't make out another boat 150 m away. Otherwise calm.",
    reason:
      "Fog that hides a boat at 150 m means Yellow, and every crew out must carry white bow and stern lights, even in daylight.",
    text:
      "Maybe you normally wear glasses. Today, that doesn't matter, you've no chance of seeing anyone or anything with or without them. Sight of the bank is but a distant memory.",
  },

  // ---------------- RED/YELLOW (1) ----------------
  {
    flag: "red-yellow",
    basis: "inferred",
    conditions:
      "Gale-force gusts of 45+ mph and the stream well over 5 mph, but the level is up less than 1.5 m and there is no ice.",
    reason:
      "Well past Yellow but not technically unrowable: closed except tub pairs (Jesus Lock to Chesterton) and University crews with their Head Coach's permission.",
    text:
      "As the wind howls and the trees shake, you stare at the spreadsheet with an earnest desperation, praying that your captain will finally listen to common sense.",
  },

  // ---------------- RED (1) ----------------
  {
    flag: "red",
    basis: "handbook",
    conditions:
      "Hard frost overnight: ice more than 1 mm thick reaching more than 2 m out from the bank.",
    reason:
      "Ice over 1 mm thick more than 2 m from the bank makes the river unrowable. Red: closed to everyone.",
    text:
      "Your windows are covered in ice. The locks on the boatbay doors are frozen. Your LBC fell off their bike ten minutes ago but is limping over anyway.",
  },
];

// End-of-game verdicts. The first entry whose `min` is less than or
// equal to the player's score is shown, so keep them in descending order.
window.VERDICTS = [
  { min: 10, text: "Perfect. I hear the CUCBC elections are coming up?" },
  { min: 8, text: "Good. Be honest, have you served as a captain?" },
  { min: 6, text: "Not bad. At least someone is paying attention around here." },
  { min: 4, text: "Uh oh. Maybe you'd be better suited to an indoor sport." },
  { min: 2, text: "What. Please don't get back into the boat any time soon." },
  { min: 0, text: "Terrible. You realise that you would've done better by guessing randomly, right?" },
];
