// let obj = {
//     a:10,
//     b:"vinay soni"
// }
// console.log(obj)

// let Animal = {
//     eats :true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = Animal; // sets rabbit.[[Prototype]] to Animal

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created...")
    }
    eats(){
        console.log("Kha rha hun...")
    }
    jumps(){
        console.log("Kood rha hun...")
    }
}
    class Lion extends Animal{
        constructor(name){
            super(name);
            console.log("Object is created and he is Lion...");
        }
        eats(){
             super.eats(); // calling parent class method
        console.log("Kha rha hun or roar rha hun...") // method overriding
    }
    }

let A = new Animal("vinay");
console.log(A)
// A.eats();
// A.jumps();

let L = new Lion("SHER KHAN");
console.log(L)
// L.eats();
// L.jumps();


// instanceof operator use to check whether an object is an instance of a particular class or not
console.log(L instanceof Lion); // true
console.log(L instanceof Animal); // true
console.log(A instanceof Lion); // false
console.log(A instanceof Animal); // true       