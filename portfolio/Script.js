const toggle = document.getElementById('menu-toggle');
if(toggle){
    toggle.addEventListener('changed' , ()=>{
        document.body.classList.toggle("no-scroll" , toggle.checked);
    })
}

const word = ["WebDevLoper", "JavaDevLoper", "ProblemSolver", "an Aspiring Software Engineer"];

const typingText = document.getElementById("typing-span");

let wordIndex= 0;
let charIndex= 0;
let isDeleting = false;
let isTypingDelay=100;
let erasigndelay =100;
let nextWorddelay=1000;


const type = () =>{
    const currentWord = word[wordIndex];

    if(!isDeleting){
        typingText.textContent=currentWord.substring(0,charIndex+1);
        charIndex++;


        if(charIndex==currentWord.length){
            isDeleting=true;
            setTimeout(type,nextWorddelay);
        }else{
            setTimeout(type,isTypingDelay);
        }
    }
    else{
        typingText.textContent=currentWord.substring(0,charIndex-1)
        charIndex--;
        if(charIndex===0){
            isDeleting=false;
            wordIndex = (wordIndex+1)% word.length;
            setTimeout(type,500);

        }
        else{
            setTimeout(type,erasigndelay);
        }
    }
};
document.addEventListener("DOMContentLoaded", ()=>{
    if(word.length) type();
});