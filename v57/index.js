// console.log("javascript loops");

// // the loops are divived into 5 types
// // 1. for loops
// // 2. for in loops
// // 3. for of loops
// // 4. while loops
// // 5. do while loops

// //For loops 
// let a= 1;
// for(let i=0; i<100; i++){
//     console.log("value of a is: ", a+i);
// }

// // For in loops
// let obj = {
//     Name: "vinay soni",
//     role: "developer",
//     city: "jabalpur"
// }
// for (const key in obj){
//     // console.log("value of ", key, "is", obj1[key]);
//     console.log(key, obj[key]);
// }

// // For of loops
// for (const val of "vinay soni"){
//     console.log("value is: ", val);
// }

// // while loops
// let j=0;
// while(j<10){
//     console.log("value of j is: ", j);
//     j++;
// }

// // do while loops
// let k=10;
// do{
//     console.log("value of k is: ", k);
//     k++;
// }while(k<5);   

// print a table using for loops
// let x=5;
// for(let i=1; i<=10; i++){
//    console.log("Table of 5 is: ",x*i);
// }

let arr=[10,20,30,40,50];
for(let i=0; i<arr.length; i++)
    console.log("Array element is: ", arr[i]);