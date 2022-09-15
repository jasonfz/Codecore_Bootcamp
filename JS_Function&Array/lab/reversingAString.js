let output=''
function reverse(str) {
    
    for (let i = str.length-1; i >= 0; i=i-1){
        output = output + str[i]
    }
return output
}
console.log(reverse("hello"))