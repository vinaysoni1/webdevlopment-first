console.log("Conditional teutorial");
// if, else if , else , else ladder, ternary operator


// let age = 18;
// let grace = 3;
// age +=grace; // age = age + grace
// console.log(age);
// console.log(grace);
// console.log(age+grace);
// console.log(age-grace);
// console.log(age*grace);
// console.log(age/grace);
// console.log(age**grace);



// if((age+grace)>18){
// if(age==18){
// if(age>=18){
// if(age<=18){

let age = 1;
if(age==18){
    console.log("you can drive");
}
else if(age == 0) {
    console.log("are you kidding me?");
}
else if(age == 1) {
    console.log("are you again kidding me?");
}
else{
    console.log("you cannot drive");
}

// Ternery operator (?)
let a=5, b=10;

let c = (a>b) ? (a-b) : (a+b);
console.log(c);

/* translate to:
if(a>5){
    c = a-b;
    }
    else{
        c = a+b;
    }
        */