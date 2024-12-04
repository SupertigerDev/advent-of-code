import fs from "fs/promises";

const input = await fs.readFile("./input.txt", "utf-8");
const lines = input.split(/\r\n|\r|\n/);

const xmasString = "XMAS";
const xmasReverseString = "SAMX";

let xmasCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  for (let y = 0; y < line.length; y++) {
    const lineAtIndex = line.slice(y);

    // left and right
    if (isXmas(lineAtIndex)) {
      xmasCount++;
    }

    // vertical
    if (lineAtIndex.startsWith("X") || lineAtIndex.startsWith("S")) {
      const first = lines[i + 1]?.[y];
      const second = lines[i + 2]?.[y];
      const third = lines[i + 3]?.[y];
      if (third) {
        const total = `${line.slice(y, y + 1)}${first}${second}${third}`;
        if (isXmas(total)) {
          xmasCount++;
        }
      }
    }

    // diag bottom left
    if (lineAtIndex.startsWith("X") || lineAtIndex.startsWith("S")) {
      const first = lines[i + 1]?.[y - 1];
      const second = lines[i + 2]?.[y - 2];
      const third = lines[i + 3]?.[y - 3];
      if (third) {
        const total = `${line.slice(y, y + 1)}${first}${second}${third}`;
        if (isXmas(total)) {
          xmasCount++;
        }
      }
    }

    // diag bottom right
    if (lineAtIndex.startsWith("X") || lineAtIndex.startsWith("S")) {
      const first = lines[i + 1]?.[y + 1];
      const second = lines[i + 2]?.[y + 2];
      const third = lines[i + 3]?.[y + 3];

      if (third) {
        const total = `${line.slice(y, y + 1)}${first}${second}${third}`;
        if (isXmas(total)) {
          xmasCount++;
        }
      }
    }
  }
}

console.log(xmasCount);
function isXmas(str) {
  return str.startsWith(xmasString) || str.startsWith(xmasReverseString);
}
