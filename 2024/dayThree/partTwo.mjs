import fs from "fs/promises";
import { report } from "process";

const input = await fs.readFile("./input.txt", "utf-8");

const mulRegex = /^mul\((\d+),(\d+)\)/g;
const doRegex = /^do\(\)/g;
const dontRegex = /^don't\(\)/g;

let index = 0;
let total = 0;

let enabled = true;

while (true) {
  const inputAtIndex = input.slice(index++);

  const matchDont = inputAtIndex.match(dontRegex);
  if (matchDont) {
    index += matchDont[0].length - 1;
    enabled = false;
    continue;
  }
  const matchDo = inputAtIndex.match(doRegex);
  if (matchDo) {
    index += matchDo[0].length - 1;
    enabled = true;
    continue;
  }

  const matchMul = [...inputAtIndex.matchAll(mulRegex)][0];
  if (matchMul) {
    const aInt = parseInt(matchMul[1]);
    const bInt = parseInt(matchMul[2]);
    index += matchMul[0].length - 1;
    if (!enabled) continue;
    total += aInt * bInt;
    continue;
  }

  if (index >= input.length) break;
}

console.log(total);
