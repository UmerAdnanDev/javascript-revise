//using node js runtime environment to run js program on console
// i.e node 3-Array/array.js 
//i.e npx nodemon 3-Array/array.js for reloads 
let array1 = [1,2,3,4,5,6,7];
console.log(typeof array1) //object
console.log(Array.isArray(array1))//true
let array2 = [1,true,{id:1},[1,2,3]]
console.log(array2)
array1.push("a")
console.log(array1)
array1.splice(1,1) //index,num of items
console.log(array1);



            