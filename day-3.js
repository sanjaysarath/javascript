function primeOrNot(x) {
    debugger;
    if (x <= 2) return 'not prime';

    for (let i = 2; i < x; i++) {
        debugger;
        if (x % i == 0) {
            return 'not prime'
        }
    }
    return 'prime num'
}

console.log(primeOrNot(5));