//Exercise number 11 in javascript
// wap to find factorial number is using reduce and for loops
//using reduce 
let A = [1,2,3,4,5,6];

const fact=(a,b)=>{
    return a*b;
}
console.log(A.reduce(fact));

//using for loops
let B=100000;
function factfor(number){
let fact=1;
for(let index=1; index<=number; index++){
    fact= fact*index;
}
console.log(fact);
}
factfor(B)