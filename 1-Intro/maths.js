console.log(2+2); //add
console.log(2-2); // subtract  
console.log(2*2); // multiply
console.log(2/2); // divide
console.log(2%2); // modulus gives remainder
console.log(2**2); // power
let i = 4;
i++ //increment
console.log(i);
i-- //decrement
console.log(i)  
console.log(1 + undefined) //-> NaN (Not A Number)

//Order of Precedence: () -> * / -> + - from left to right
// Math Practice 
console.log("\n")
let product_cost = 12.99;
let qty = 3;
let tax = 10; // % 
let price = product_cost*qty+10/100; // * / happen at the same time from left to right
console.log(`Final Price: ${price}`)
console.log();
//decimal number are floating point number 
console.log(`0.1 + 0.2 = ${0.1+0.2}`)
console.log(`0.1 + 0.2 == 0.3 :${0.1+0.2 == 0.3}`)
//for accuracy we can add as whole numbers and then divide
//for example
console.log((199+789)/100)
//or can round the value
console.log(Math.round(0.94))
// number with other data types
console.log(`4+'hi' : ${4+'hi'}`)
console.log(`'hi'*2 : ${"hi"*2}`)
console.log(`4 + true : ${4+true}`)  // true = 1 -> 5
console.log(`3 + false : ${3+false}`) // false = 0 -> 3
console.log(`4 *'hi' : ${4*'hi'}`)
console.log(`4 - 'hi' : ${4 -'hi'}`)
console.log(`4 / 'hi' : ${4 /'hi'}`)








