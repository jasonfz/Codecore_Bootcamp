
// console.log(process.argv)


let input = process.argv.splice(2, process.argv.length - 1)



let str = input.join(" ")


output=""
let newletter
for (let i = 0; i < str.length; i++) {



    if(str[i] == str[i].toUpperCase()){newletter=str[i].toLowerCase()
}else{newletter=str[i].toUpperCase()}


console.log(newletter)
output += str[i]

}

console.log(output)








// // let str = process.argv[2];
// let input = process.argv.splice(2, process.argv.length - 1)

// // console.log(str)

// let str = input.join(" ")

// let output=[]
// // output=" "
// for (let i = 0; i < str.length; i++) {
// // console.log(str[i])


//     if(str[i] === str[i].toUpperCase()){output.push(str[i].toLowerCase())
// }else(output.push(str[i].toUpperCase()))


// }

// console.log(output.join(""))