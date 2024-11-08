function getFibonacciNumber(index) {
    if (index === 0) return 0;
    if (index === 1) return 1;
    let num = 0;
    let numA = 0;
    let numB = 1;
    for (let i = 2; i <= index; i += 1) {
      num = numA + numB;
      numA = numB;
      numB = num;
    }
    return num;
}
let value = 10;
console.log("pos:", value, " = ", getFibonacciNumber(value));