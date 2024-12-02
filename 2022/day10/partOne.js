const input = `noop
addx 24
addx -19
noop
noop
noop
addx 5
noop
addx 1
addx 5
addx -1
addx 5
addx 1
addx 14
addx -9
addx -1
addx 5
noop
addx 2
addx -20
addx 24
addx -36
addx -2
noop
addx 3
addx 2
addx 5
addx 21
addx -16
noop
addx 2
addx 15
addx -14
addx 2
addx 5
addx 2
addx -4
addx 5
addx -8
addx 15
addx 2
addx 3
addx -2
addx -38
noop
addx 3
addx 4
noop
addx 7
noop
noop
addx -2
addx 5
addx -16
addx 21
noop
addx -10
addx 11
addx 2
addx 5
addx 4
noop
noop
addx -6
addx 7
noop
addx 3
addx -36
noop
addx 5
noop
addx 20
addx -19
addx 5
addx 4
noop
addx -2
addx 3
noop
addx 4
noop
addx -1
addx 5
addx 3
addx -28
addx 30
noop
addx 6
noop
noop
addx 1
addx -38
addx 40
addx -33
addx 20
addx -19
addx 2
noop
addx 28
addx -23
addx 5
addx 2
addx 2
addx 3
addx -2
addx 5
addx 2
addx -7
addx 12
addx -2
noop
addx 3
addx -38
noop
addx 24
addx -17
noop
addx 5
noop
noop
addx 1
addx -8
addx 13
noop
noop
addx 2
addx 5
addx 2
addx 6
addx -5
addx 4
noop
addx 1
addx 2
noop
addx 3
noop
noop`;

const lines = input.split('\n');

let X = 1;
let cycle = 1;
let totalSignalStrengths = 0;

for (let i = 0; i < lines.length; i++) {
    const [instruction, args] = lines[i].split(' ');

    if (instruction === 'noop') {
        addCycle();
        continue;
    }
    
    if (instruction === "addx"){
        addCycle();
        X += parseInt(args);
        addCycle();
    }
}

console.log(totalSignalStrengths)

function addCycle() {
    cycle++;
    const sum = cycle * X;
    if (cycle === 20) {
        totalSignalStrengths+= sum;
    }
    if (cycle > 20 && (cycle - 19) % 40 === 1) {
        totalSignalStrengths+= sum;
    }
}