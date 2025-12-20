console.log("javascript function");

function nice(name){
    console.log("Hey " + name + " is good");
    console.log("Hey " + name+ " is also good");
    console.log("Hey " + name+ "your t-shirt is good");
    console.log("Hey " + name+ " your shoes are good");
    console.log("Hey " + name+ "your course  is also good");
 
}
nice("vinay");
nice("deepak");

function sum(a, b , c=100){
    // console.log(a+b);
    return a+b+c;
}
result1 = sum(10, 20);
result2 = sum(10, 30);
result3 = sum(10, 40);
result4  = sum(10,50);
console.log("sum of these number is : " +result1);
console.log("sum of these number is : " +result2);
console.log("sum of these number is : " +result3);
console.log("sum of these number is : " +result4);



function subtraction(x,y){
    return x-y;
}
A=subtraction(100,50);
B=subtraction(200,50);
C=subtraction(300,50);
D=subtraction(400,50);

console.log("subtraction of these number is : " +A);
console.log("subtraction of these number is : " +B);
console.log("subtraction of these number is : " +C);
console.log("subtraction of these number is : " +D);

function multiply(m,n){
    return m*n;
}       
P=multiply(10,5);
Q=multiply(20,5);
R=multiply(30,5);
S=multiply(40,5);
console.log("multiplication of these number is : " +P); 
console.log("multiplication of these number is : " +Q);
console.log("multiplication of these number is : " +R);
console.log("multiplication of these number is : " +S);


const f1 = (x) => {
    console.log(x*x);
}
f1(2);
f1(3);
f1(4);
f1(5);
f1(6);
