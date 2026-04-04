const { error } = require("console");
const fs =require("fs");
console.log(fs);


console.log("Starting");
// fs.writeFileSync("vinay.txt" , "vinay is a good boy");


// callback function
fs.writeFile("vinay.txt" , "Vinay is a good boy" ,() =>{
    console.log("Done");

    fs.readFile("vinay.txt", (error,data) => {
        console.log(error ,String(data));
    })
});
fs.appendFile("vinay.txt" , " and He is a good student" , (error, data) =>{
        console.log(data);
    });
console.log("File written successfully");