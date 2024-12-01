import fs from "fs/promises";

const input = await fs.readFile("./input.txt", "utf-8");
const lines = input.split(/\r\n|\r|\n/);
const list = lines.map((line) => line.split("   "));

const sortFirstList = list.sort((a, b) => a[0] - b[0]).map((l) => l[0]);
const sortSecondList = list.sort((a, b) => a[1] - b[1]).map((l) => l[1]);

const distances = sortFirstList.map((item, index) =>
  Math.abs(item - sortSecondList[index])
);

const totalDistance = distances.reduce((prevValue, curValue) => {
  return prevValue + curValue;
}, 0);

console.log(totalDistance);
