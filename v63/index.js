console.log("Array tutorial");

let arr = [10,20,30,40,50];
// console.log(arr, typeof arr); //printing entire array
// arr[0] = 100;        //changing value at index 0
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);


// console.log(arr);
// console.log(arr[0]);

// //Array len
// console.log("Array length is ", arr.length);

//methods of array
//string methods
console.log(arr.toString()); //converts array to string

//joins method
console.log(arr.join(" * ")); //joins array elements with specified separator


//pop method
let b = [1,2,3,4,5];
b.pop(); //removes last element
console.log("After pop ", b);

//push method
b.push(100); //adds element at the end
b.push("harray"); //adds element at the end
console.log("before push ", b);

//shift method
b.shift(); //removes first element
console.log("after shift ", b);

//unshift method
b.unshift(500); //adds element at the beginning
console.log("after unshift ", b);

//delete method
delete b[1]; //deletes element at index 1
console.log("after delete ", b);
console.log("length after delete ", b.length); //length remains same
console.log(b[1]); //undefined

//concat method
let x= [1,2,3,4];
let y= [5,6,7,8];
let z =[9,10,11,12];
let newArr = x.concat(y,z); //concatenates arrays
console.log("after concat ", newArr);

//sort method
let p = [100,900,300,400,500];
p.sort(); //sorts array in ascending order
console.log("after sort p ", p);

//splice method
let A = [1,2,3,4,5,6,7,8,9];
A.splice(2,3,1,2); //removes 3 elements from index 2  and adds 1,2 at index 2
console.log("after splice ", A);


//slice method
let C = [10,20,30,40,50,60,70,80,90];
let newC = C.slice(2,5); //creates new array from index 2 to 4
console.log("after slice ", newC);

//reverse method
let D = [1,2,3,4,5];
D.reverse(); //reverses the array
console.log("after reverse ", D);

//loops method 
// let E = [100,200,300,400,500];
// for(let i=0; i<E.length; i++){
//     console.log("Element at index ", i, " is ", E[i]);
// }


// E.forEach((value, index, arr) => {
//     console.log(value, index, arr)
// });

// forin loop
let obj = {
    name: "Harray",
    age: 22,
    city: "New York"            
}
for(let key in obj){
    console.log( key, obj[key]);
}
// forof loop
let F = [10,20,30,40,50];
for(let value of F){
    console.log("Value is ", value);
}

//map method
let G = [1,2,3,4,5];
// let newG=[];
// for(let i=0; i<G.length; i++){
// const element = G[i];
// newG.push(element**2);
// }
// console.log("newG before map ", newG);

let newG = G.map((value) => value**2);     //creates new array with squares of elements using map
console.log("newG after map ", newG);

// filter method
let H = [10,15,20,25,30,35,40];
const greaterthantwinty = (e)=>{
    if(e>20){
        return true;
    }else
    return false;
}
console.log(H.filter(greaterthantwinty));

//Reduce method
let M= [1,2,3,4,5,6];
const fact=(a,b)=>{
    return a*b;
}
console.log(M.reduce(fact));

//array.from
let N = "vinay soni"
console.log(Array.from(N))
