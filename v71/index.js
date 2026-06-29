console.log("Hello world");



// document.querySelector(".container").innerHTML
//  //'\n        <div class="box">Hey i am box</div>\n    '
// document.querySelector(".box").innerHTML
// //'Hey i am box'

// document.querySelector(".container").innerText
// //'Hey i am box\nHey i am box'

// document.querySelector(".box").innerText
// //'Hey i am box'
// document.querySelector(".box").innerHTML
// //'Hey i am box'
// document.querySelector(".container").innerHTML
// //'\n        <div class="box">Hey i am box</div>\n        <div class="box">Hey i am box</div>\n    '


// document.querySelector(".container").outer
// //undefined
// document.querySelector(".container").outerHTML
// //'<div class="container">\n        <div class="box">Hey i am box</div>\n        <div class="box">Hey i am box</div>\n    </div>'
// document.querySelector(".container").tagName
// //'DIV'

// document.querySelector(".container").nodeName
// //'DIV'
// document.querySelector(".container").textContent
// // '\n        Hey i am box\n        Hey i am box\n    '

// document.querySelector(".container").hidden
// //false
// document.querySelector(".container").hidden=true
// //true

// document.querySelector(".box").innerHTML="hello guys"
// //'hello guys'
// document.querySelector(".container").innerHTML="hello guys"
// //'hello guys'

// // attributes

// document.querySelector(".container").hasAttribute("style")
// //false
// document.querySelector(".box").hasAttribute("style")
// //true
// document.querySelector(".box").getAttribute("style")

// //'display: flex;'
// document.querySelector(".box").setAttribute("style" , "display:inline")

// //undefined

// document.querySelector(".box").removeAttribute("style")
// //undefined

// document.designMode = "on"  // any website can be edited
// //'on

// document.querySelector(".box").dataset
// //DOMStringMap {createdby: 'vinaybhai'}

// let div = document.createElement("div");
// div.innerHTML ="i have been inserted <b> by vinaybhai</b>";
// div.setAttribute("class" , "creted");
// // document.querySelector(".container").append(div);
// // document.querySelector(".container").after(div);
// document.querySelector(".container").before(div);
// // document.querySelector(".container").replaceWith(div);
// // document.querySelector(".container").prepend(div);

//insert Adjacant HTML/Teat /Element
// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("beforebegin" , "<div> <b> before begin  </b></div>");
// cont.insertAdjacentHTML("afterbegin" , "<div> after begin </div>");
// cont.insertAdjacentHTML("beforeend" , "<div> before end </div>");
// cont.insertAdjacentHTML("afterend" , "<div> after end </div>");

// let cont = document.querySelector(".container");
// cont.insertAdjacentText("beforebegin" , "  before begin  ");
// cont.insertAdjacentText("afterbegin" , " after begin ");
// cont.insertAdjacentText("beforeend" , " before end ");
// cont.insertAdjacentText("afterend" , " after end ");

// let cont = document.querySelector(".container");
// cont.insertAdjacentElement("beforebegin" , document.createElement("hr"));
// cont.insertAdjacentElement("afterbegin" , document.createElement("hr"));
// cont.insertAdjacentElement("beforeend" , document.createElement("hr"));
// cont.insertAdjacentElement("afterend" , document.createElement("hr"));

//remove element
// let box = document.querySelector(".box");
// box.remove();


// document.querySelector(".container").classList
// //DOMTokenList(4) ['container', 'red', 'bg', 'green', value: 'container red bg green']
// document.querySelector(".container").className
// //'container red bg green'
// document.querySelector(".container").classList.add("vinay")
// //undefined
// document.querySelector(".container").classList.remove("vinay")
// //undefined
// document.querySelector(".container").classList.add("vinay")
// //undefined
// document.querySelector(".container").classList.add("vinay")
// undefined
// document.querySelector(".container").classList.add("vinay")
// //undefined
// document.querySelector(".container").classList.add("vinay")
// //undefined


// document.querySelector(".container").classList.toggle("red")
// //false   toggle off
// document.querySelector(".container").classList.toggle("red")
// // true  toggle on