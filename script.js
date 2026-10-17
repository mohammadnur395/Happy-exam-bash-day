/*
  DAY NUMBER SETTINGS — edit these values and commit to GitHub.
  START_DAY: number shown on START_DATE.
  Example: START_DAY: 4, START_DATE: "2026-10-15"
  will show Day 4 on Oct 15, Day 5 on Oct 16, etc.
  To keep the number fixed, set AUTO_COUNT to false.
*/
const CONFIG = {
  START_DAY: 5,
  START_DATE: "2026-10-18",
  AUTO_COUNT: true
};

function localDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}
function todayAtMidnight() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
function calculateDay() {
  if (!CONFIG.AUTO_COUNT) return CONFIG.START_DAY;
  const difference = Math.floor((todayAtMidnight() - localDate(CONFIG.START_DATE)) / 86400000);
  return Math.max(1, CONFIG.START_DAY + difference);
}
document.getElementById("day-number").textContent = String(calculateDay());
