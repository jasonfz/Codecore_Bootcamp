const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];

function printMulti(myArray) {
    for(let element of myArray){
        for(let subelement of element){
            console.log(subelement)
        }
    }
}
printMulti(myArray)

//-------------

// I did mine a bit differently
// function printMulti(myArray){
//     for (let i = 0; i < myArray.length; i++) {
//         for (item in myArray[i]) {
//             let element = myArray[i]
//             console.log(element[item])
        
//         }
//     }

// }

// printMulti([[2,3,4], ["Hello CodeCore", 1, true]])