const colors = require("colors/safe");

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return false;
  }
  if (typeof number != "number") {
    console.log("it's not a number");
  }

  return true;
};

let count = 1;
let red = 0;

const from = process.argv[2];
const to = process.argv[3];

for (let number = from; number <= to; number++) {
  colorer = colors.green;

  if (isPrime(number)) {
    red += 1;
    if (count % 2 === 0) {
      colorer = colors.yellow;
      count += 1;
    } else if (count % 3 === 0) {
      colorer = colors.red;
      count = 1;
    } else {
      count += 1;
    }

    console.log(colorer(number));
  }
}

if (red === 0) {
  colorer = colors.red;
  console.log(colorer("away"));
}
