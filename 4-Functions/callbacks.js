// Simple callback - function passed to another function
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();  // execute the callback
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('John', sayGoodbye);
// Output: Hello John
//         Goodbye!

// Callback with data
function calculate(a, b, operation) {
    const result = operation(a, b);
    console.log(`Result: ${result}`);
    return result;
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

calculate(5, 3, add);      // Result: 8
calculate(5, 3, multiply); // Result: 15

// Anonymous callback (most common in Node)
setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);
