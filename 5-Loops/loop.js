//while loop : condition controlled
console.log("while loop");
let i = 0;
while(i<6){
 console.log(i);
 i++
}
// generating a table with while loop
let num = 4; let multiple = 1
while(multiple<13){
  console.log(`${num} x ${multiple} = ${num*multiple}`);
  multiple++
}

//for loop : count controlled
console.log("for loop");
for(let i = 0;i<6;i++){ 
  console.log(i);  
}
//iterating through an array
let array1 = [
  "1st","2nd","3rd","4th","5th"
]
for(let i = 0;i<array1.length;i++){
   console.log(array1[i]);
   
}
//sum with for loop
let nums = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
for(let i = 0;i<nums.length;i++){
    sum += nums[i]
}
console.log(sum)
//create an array of even ints from 2-20 by loop
let nums_2x = [];
for(let i=0;i<nums.length;i++){
  nums_2x.push(nums[i]*2)
}
console.log(nums_2x);

