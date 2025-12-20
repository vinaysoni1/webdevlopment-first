//crete a faulty calculator using js
console.log("Exercise No- 09");

let random = Math.random();
console.log(random);
let a = prompt("Enter first number: ");
let c = prompt("Enter operator: ");
let b = prompt("Enter second number: ");

let obj= {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if(random>0.1){
    //correct calculation
    console.log('the result is ${a} ${c} ${b}');

}
else{
    // wrong calculation
    c = obj[c];
    console.log('the result is ${a} ${c} ${b}');
    

}