import fs from "fs/promises";
import { report } from "process";

const input = await fs.readFile("./input.txt", "utf-8");

const regex = /mul\((\d+),(\d+)\)/gm;

const result = [...input.matchAll(regex)].reduce((prev, curr) => {
  const [raw, a, b] = curr;
  const aInt = parseInt(a);
  const bInt = parseInt(b);

  return prev + aInt * bInt;
}, 0);

console.log(result);
