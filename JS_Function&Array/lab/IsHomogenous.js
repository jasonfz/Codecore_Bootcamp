// console.log(typeof [2])
// console.log(typeof {colour: 'blue'})
// console.log(typeof [2] !== typeof {colour: 'blue'})
// console.log(Array.isArray([2])!==Array.isArray({colour: 'blue'}))

function isHomogenous(arr) {
    for(let element of arr){
        if (typeof element !== typeof arr[0]){
            console.log("false")
            return
        } else if(Array.isArray(element)!== Array.isArray(arr[0])){
            console.log("false")
            return
            }
    }
console.log("true")
}
isHomogenous([1, 2, 3]) // true
isHomogenous(['a', 'b', 'c']) // true
isHomogenous([[2], 'Xavier']) // false
isHomogenous([[2], {colour: 'blue'}]) // false
isHomogenous([1, '2', 3]) // false

// let previousType; // type of the last iteration
//   let currentType; // type of the current iteration

//   // first iteration set the previousType
//   if (Array.isArray(arr[0])) {
//     previousType = 'array';
//   } else {
//     previousType = typeof arr[0];
//   }

//   // on every iteration check that previousType is the same as currentType
//   for (let element of arr) {
//     if (Array.isArray(element)) {
//       currentType = 'array';
//     } else {
//       currentType = typeof element;
//     }

//     if (previousType !==