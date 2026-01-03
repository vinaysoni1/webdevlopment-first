class user{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length <4){
            console.log("Name is too short...")
            return;
        }
        this._name = value;
    }
}
let User = new user("vina");
console.log(User.name);
//user = new user(" ")  // print vina and Name is too short...
// user = ""  // print vina

user.name = "vinay soni"
console.log(user.name)