let a = prompt("Enter a first number");
let b = prompt("Enter a second number");

// add error by user entering string instead of number
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed, you entered a string")
}

 let sum = parseInt(a)+parseInt(b);  // parseInt is used to convert string to integer


 // try catch block
let x =10;
function main(){

    try {
        console.log("The sum a and b is ",sum*x);
        return true;
    } catch (error) {
        console.log("Error");
        return false;
    }
  finally{
        console.log("The try catch block is ended");
  }
    
}
let c = main();
console.log(c);