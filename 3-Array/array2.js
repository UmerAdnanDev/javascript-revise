let ar1 = [3,4,5]
let ar2 = ar1 // both share same reference where array is stored
//meaning changing one will change the other
let ar3 = ar1.slice() // to copy the ar1's values
ar1.splice(1,1)
console.log(`Array1: ${ar1}`);
console.log(`Array2: ${ar2}`);
console.log(`Array3: ${ar3}`);
let [a,b,c] = ar3
console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
let [d,e] = ar1
console.log(`d: ${d}`);
console.log(`e: ${e}`);
// break
for(let i=0;i<10;i++){
   if(i == 6) break; //will stop at 6
   else console.log(i)
}
// continue
for(let i=0;i<10;i++){
   if(i == 6) continue; //will skip 6
   else console.log(i)
}


