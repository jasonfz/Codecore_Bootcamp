// console.log(process.argv);

const num1 = process.argv[2];
const num2 = process.argv[3];
const num3 = process.argv[4];

const largest = Math.max(num1, num2, num3);

console.log("The largest number is" + " " + largest)

const array1 = [1, 3, 2]; console.log(Math.max(...array1))