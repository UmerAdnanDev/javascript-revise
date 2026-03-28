// Traditional function
function add1(a, b) {
    return a + b;
}
console.log(add1(2,4))
// Arrow function equivalent
const add2 = (a, b) => {
    return a + b;
};
console.log(add2(9,7))
// Implicit return (no curly braces needed for single expression)
const add3 = (a, b) => a + b;
console.log(add3(8,4))