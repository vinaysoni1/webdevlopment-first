const toggle = document.getElementById('menu-toggle');
if(toggle){
    toggle.addEventListener('changed' , ()=>{
        document.body.classList.toggle("no-scroll" , toggle.checked);
    })
}