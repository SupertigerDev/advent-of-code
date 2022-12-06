const crypto = require("crypto");

const input = `bgvyzdsv`;

for (let i = 0; i < 9999999; i++) {
    const val = input + i;
    let md5Sum = crypto.createHash('md5').update(val).digest("hex");

    if (md5Sum.startsWith("00000")) {
        console.log(i);
        break;
    }
}