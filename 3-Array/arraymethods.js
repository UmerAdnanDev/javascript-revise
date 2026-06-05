// Sample data
const users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true },
    { id: 4, name: 'Diana', age: 28, active: true }
];

// map() - transform each element
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie', 'Diana']

// filter() - keep elements that pass test
const activeUsers = users.filter(user => user.active === true);
console.log(activeUsers); // Alice, Charlie, Diana only

// find() - get first match
const user = users.find(user => user.id === 3);
console.log(user); // { id: 3, name: 'Charlie', age: 35, active: true }

// forEach() - loop through array
users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old`);
});

// push/pop - add/remove from end
const fruits = ['apple', 'banana'];
fruits.push('orange');  // adds to end
console.log(fruits); // ['apple', 'banana', 'orange']
fruits.pop();  // removes from end
console.log(fruits); // ['apple', 'banana']