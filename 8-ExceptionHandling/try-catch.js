// Basic try/catch
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero!');
        }
        else if(typeof a === 'string' || typeof b === 'string'){
            throw new Error('Cannot divide by String!');
        }
        const result = a / b;
        console.log(`Result: ${result}`);
        return result;
    } catch (error) {
        console.log('Error caught:', error.message);
        return null;
    }
}

divide(10, 2);  // Result: 5
divide(10, 0);  // Error caught: Cannot divide by zero!
divide("a","2") // Error caught: Cannot divide by String!

// Multiple error types
function parseJSON(str) {
    try {
        const data = JSON.parse(str);
        console.log('Parsed successfully:', data);
        return data;
    } catch (error) {
        console.log('Invalid JSON:', error.message);
        return null;
    }
}

parseJSON('{"name":"John"}');  // Parsed successfully: { name: 'John' }
parseJSON('invalid json');      // Invalid JSON: Unexpected token i