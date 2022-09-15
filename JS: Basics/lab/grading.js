const grade = parseInt(process.argv[2]);

if (grade > 100 || grade <0) {
    console.log("not a valid grade")
}else if(grade >= 86) {
    console.log("A")
}else if(grade >= 73 && grade<= 85 ) {
    console.log("b")
}else if(grade >= 67 && grade<= 72 ) {
    console.log("c+")
}else if(grade >= 60 && grade<= 66 ) {
    console.log("c")
}else if(grade >= 50 && grade<= 59 ) {
    console.log("c-")
}else if(grade < 50 ) {
    console.log("F")
}
    