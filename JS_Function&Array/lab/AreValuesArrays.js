function areValuesArrays(arr) {
    for(let element of arr) {
        if(Array.isArray(element) === false) {
            console.log("false");
            return
        }
        
    }

   console.log("true")
    
}
areValuesArrays([[1], [2], [4, 5]]); // returns true

areValuesArrays([1, [2], [6, 7, 8]]); // returns false

areValuesArrays([[1], 2, [6, 7, 8]]); // returns false

areValuesArrays(['true', 'false']); // returns false