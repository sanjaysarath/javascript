// factorial number
let b = 1
function factorial(a) {
    for (var i = 1; i <= a; i++) {
        b *= i;
    }
    return b
}

console.log(factorial(5));


