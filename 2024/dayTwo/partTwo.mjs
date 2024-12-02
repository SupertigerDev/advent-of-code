import fs from "fs/promises";
import { report } from "process";

const input = await fs.readFile("./input.txt", "utf-8");
const lines = input.split(/\r\n|\r|\n/);

const reports = lines.map((line) => line.split(" "));

const safeReports = reports.filter((levels) => {
  for (let i = 0; i < levels.length; i++) {
    const updatedLevels = [...levels];
    updatedLevels.splice(i, 1);
    if (checkLevel(updatedLevels)) {
      return true;
    }
  }
});

function checkLevel(levels) {
  let state;

  for (let i = 0; i < levels.length; i++) {
    const level = parseInt(levels[i]);
    const nextLevel = parseInt(levels[i + 1]);
    if (isNaN(nextLevel)) continue;
    const newState = nextLevel > level ? "increase" : "decrease";
    if (!state) {
      state = newState;
    }
    if (newState !== state) {
      return false;
    }
    const difference = Math.abs(nextLevel - level);
    if (!difference || difference > 3) {
      return false;
    }
  }
  return true;
}

console.log(safeReports.length, "Safe Reports.");
