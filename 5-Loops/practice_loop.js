console.log("Practice Loops");
//Swapp array using forloop
let array1 = [1,2,3,4,5,6]
console.log(array1.length)     
let random = Math.floor(Math.random()*(array1.length))+1 // 1 ~ 6
console.log(random)
    //  if(0 in array1){ checks indexes not values
    //    console.log(true); 
    //  }
    //  console.log(random);
    //Random Sorting
for(let i = 0;i<array1.length;i++){
        let random = Math.floor(Math.random()*(array1.length))
        let swap_with = array1[random];
        array1[random] = array1[i]
        array1[i] = swap_with
}
console.log(array1) //randomly sorts the array
for(let i = 0;i<array1.length;i++){
    for(let j = 0;j<array1.length;j++){
      if(array1[i]>array1[j]){
             let swap_with = array1[i]
             array1[i] = array1[j]
             array1[j] = swap_with
      }
    }  
}
console.log(array1)//sorted in descending order
for(let i = 0;i<array1.length;i++){
      for(let j = 0;j<array1.length;j++){
        if(array1[i]<array1[j]){
             let swap_with = array1[i]
             array1[i] = array1[j]
             array1[j] = swap_with
        }
      }  
}
console.log(array1)//sorted in ascending order
