console.log("hello world");

// document.body.firstChild
// document.body.firstElementChild
// document.body.firstElementChild.childNodes
// document.body.firstElementChild.children


// document.body.firstElementChild.children[3].nextSibling
// // #text
// document.body.firstElementChild.children[3].previousElementSibling
// // <div class=​"box">​box3​</div>​
// document.body.firstElementChild.children[3].nextElementSibling
// // <div class=​"box">​box5​</div>​
// document.body.firstElementChild.children[3].previousSibling


// document.body
// // <body>​<div class=​"container">​…​</div>​<table>​<tbody>​<tr>​…​</tr>​<tr>​…​</tr>​</tbody>​</table>​<script src=​"index.js">​</script>​</body>​
// document.body.children
// //HTMLCollection(3) [div.container, table, script]
// document.body.children[1]
// // <table>​…​</table>​
// document.body.children[1].rows
// // HTMLCollection(2) [tr, tr]
// document.body.children[1].children
