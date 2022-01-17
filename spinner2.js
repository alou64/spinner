const spins = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let time = 100;

for (let spin of spins) {
  setTimeout(() => process.stdout.write(`\r${spin}   `), time)
  time += 200
};

setTimeout(() => process.stdout.write('\n'), time);
