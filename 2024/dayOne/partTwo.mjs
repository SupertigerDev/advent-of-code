import fs from "fs/promises";

const input = await fs.readFile("./input.txt", "utf-8");
const lines = input.split(/\r\n|\r|\n/);
const list = lines.map((line) => line.split("   "));

const firstList = list.map((l) => l[0]);
const secondList = list.map((l) => l[1]);

const similarityScores = firstList.map((item) => {
  const times = secondList.filter((secondItem) => secondItem === item).length;
  return item * times;
});

const totalScore = similarityScores.reduce((prevValue, curValue) => {
  return prevValue + curValue;
}, 0);

console.log(totalScore);
