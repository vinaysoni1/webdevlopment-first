console.log("Hello,🙌")

//color depend on index number 
// let A = document.getElementsByClassName("box");
// console.log(A);

// A[2].style.backgroundColor = "red";


// //color depend on id name 
// document.getElementById("redbox").style.backgroundColor = "red";
// document.getElementById("bluebox").style.backgroundColor = "blue";


// querySelector

// document.querySelector(".box").style.backgroundColor = "green";
//  console.log(document.querySelectorAll(".box"));
 
 //querySelectorAll
//  document.querySelectorAll(".box").forEach(e =>
//     e.style.backgroundColor = "green"
//  )

//tag name
// let A = document.getElementsByTagName("div");
// console.log(A);

//matches
// let A = document.getElementsByClassName("box");
// console.log(A);



e = document.getElementsByTagName("div")
//HTMLCollection(7) [div.conteiner, div.box, div.box, div#redbox.box, div#bluebox.box, div.box, div.box, redbox: div#redbox.box, bluebox: div#bluebox.box]
e[4].matches("#bluebox")
//true
e[4].matches("#redbox")
//false
e[4].closest(".conatainer")
//null
e[4].closest("html")
//<html lang=​"en">​scroll<head>​…​</head>​<body>​<div class=​"conteiner">​…​</div>​<script src=​"script.js">​</script>​</body>​</html>​
e[4].closest(".container")
//null


document.querySelector(".conteiner").contains(e[2])
//true
document.querySelector(".conteiner").contains(e[3])
//true

document.querySelector(".conteiner").contains(document.querySelector("body"))
//false

document.querySelector("body").contains(document.querySelector(".conteiner"))
//true