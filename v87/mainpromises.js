import fs from "fs/promises"

let a = await fs.readFile("vinay.txt");

// let b = await fs.writeFile("vinay.txt" , "\n\n\n\n\nvinay is a also good boy" );
// console.log(a.toString(), b);

let b = await fs.appendFile("vinay.txt" , "\n\n\n\n\nvinay is a also good boy" );
console.log(a.toString(), b);