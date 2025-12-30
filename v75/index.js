let botten = document.getElementById("btn");
botten.addEventListener("dblclick" ,()=>{
    // alert("you clicked the button");
    document.querySelector(".box").innerHTML= "<b>You are clicked </b> Enjoy you are clicked";
})

botten.addEventListener("contextmenu" ,()=>{
    alert("you clicked the right  button mouse");
   
})

document.addEventListener("keydown" ,(e)=>{
    // console.log(e);
    console.log(e.key , e.keycode);
   
})