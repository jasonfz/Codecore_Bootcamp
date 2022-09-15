// const a =  parseInt(process.argv[2])
// const b =  parseInt(process.argv[3])
// const c =  parseInt(process.argv[4])




// const perimeter = a + b + c
// console.log(perimeter)
// const s = perimeter /2
// const area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
// console.log(area)


const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const c = parseInt(process.argv[4]);

if (a + b > c && a + c > b && b + c > a) {

    console.log(`Perimeter is ${a + b + c}`);
    // calculate the semi-perimeter
    const s = (a + b + c) / 2;

    //calculate the area
    const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

    console.log(
        `The area of the triangle is ${area}`
    );

} else {
    console.log("impossible triangle");
}