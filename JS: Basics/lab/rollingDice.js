// const dice = parseInt(process.argv[2]);
// const face = parseInt(process.argv[3]);

const quantity = parseInt(process.argv[2]);
const face = parseInt(process.argv[3]);
let total = 0
for (let i = 0; i < quantity; i++) {
    let roll = Math.floor(Math.random() * face) + 1
    total += roll;
    console.log(`Rolled: ${roll}`);
}
console.log("----------------------");
console.log(`Average Roll: ${total / quantity}`);
console.log(`Total: ${total}`);

// ///-------------
// const quantity = parseInt(process.argv[2]);
// const diceFace = parseInt(process.argv[3]);

// let count = 0;
// let total = 0;

// while (count < quantity) {
//   let roll = Math.floor(Math.random() * diceFace) + 1;
//   console.log(`Rolled: ${roll}`);
//   total += roll;
//   count++;
// }

// console.log(`Average Roll: ${total / quantity}`);
// console.log(`Total: ${total}`);