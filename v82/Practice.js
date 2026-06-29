async function sleep(){
    return new Promise ((resolve , reject)=>{
        setTimeout (()=>{
            resolve(45)
        },2000)
    })

}
(async function main() {


    /// Using in object
    let obj = {
        a:"Hello",
        b:"World"
    
    }
    let {a,b}= obj
    console.log(a,b)

})()