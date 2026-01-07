async function sleep(){
    return new Promise ((resolve , reject)=>{
        setTimeout (()=>{
            resolve(45)
        },1000)
    })

}


// let a = await sleep();    // this is not run
// let b = await sleep();    //this is not run

//IIFE function  means Immediately Invoked Function Expression
// (async function main() {
//     let a = await sleep(); 
//     console.log(a)
//      let b = await sleep(); 
//     console.log(b)

// })() // This always run 

//Destructring 
(async function main() {

    // Using in arrays
    // let [x,y, ...other]=[4,5,6,7,8,9,1,2,3]
    // console.log(x,y,other)


    /// Using in object
    let obj = {
        a:1,
        b:2,
        c:3
    }
    let {a,b}= obj
    console.log(a,b)

})()


// Using Spread Operator
function sum(a,b,c){
    return a+b+c;
}
(async function main() {
   
     console.log(a1);  // Hoisting concept


    //Using Arrays
    let arr = [12,14,50]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))

// USing object
     let obj = {
        a:1,
        b:2,
        c:3
    }
    let {a,b}= obj
    console.log(sum(obj))

    //Hoisting concept
// var a1=5;  //This var function is not provide in error in output but
//    let use to output error 
})()

// Hoisting is not work in variable of let and const