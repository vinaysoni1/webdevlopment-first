//  async function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve(455);
//     }, 5000)
//     });
// }

async function getdata(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(data);
    // console.log(x);
    return data;
}

async function main(){
console.log("Loading Modules");  
let Data = await getdata()
console.log(Data);  

console.log("Do Something else");

console.log("Load Data");

// let Data = await getdata()
// console.log(Data);
console.log("Process Data");
console.log("Task 2");
}
main();

// Data.then((value) =>{
// console.log(Data);
// console.log("Process Data");
// console.log("Task 2");
// });
