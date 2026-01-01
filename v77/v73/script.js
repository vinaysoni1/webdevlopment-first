function cretecard(tittle, cName, views, monthOld, duration, thumnail){
    let viewstr;
    if(views<1000){
        viewstr = views   +"views";
    }
    else if(views>1000000){
        viewstr = views/1000 + "M views";
    } else{
        viewstr = views/1000 + "k views";
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumnail}" width="230px" height="130px">
                 <div class="capsule">${duration}</div>

            </div>
            <div class="text">
                <h1>${tittle}</h1>
                <p>${cName} . ${viewstr} . ${monthOld} months ago</p>

            </div>
        </div>`
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}
cretecard("Event, Events Bubbling, SetInterval&SetTimeout  | Sigma Web Development Course - Tutorial #74", "CodewithHarry", 279, 10, "27:51", "hqdefault.avif");
cretecard("Event, Events Bubbling, SetInterval&SetTimeout  | Sigma Web Development Course - Tutorial #75", "CodewithHarry", 50000, 5, "27:51", "hqdefault.avif");
cretecard("Event, Events Bubbling, SetInterval&SetTimeout  | Sigma Web Development Course - Tutorial #76", "CodewithHarry", 1009, 3, "27:51", "hqdefault.avif");
cretecard("Event, Events Bubbling, SetInterval&SetTimeout  | Sigma Web Development Course - Tutorial #77", "CodewithHarry", 100000000, 12, "27:51", "hqdefault.avif");
cretecard("Event, Events Bubbling, SetInterval&SetTimeout  | Sigma Web Development Course - Tutorial #78", "CodewithHarry", 200, 6, "27:51", "hqdefault.avif");