// var menu = document.getElementsByClassName('menu_item');
// function myClick(){
// 	alert("HELLO!");  	
// 	this.style.background='blue';
// }
// for(var i=0; i<menu.length; i++) { 
//   // menu[i].style.background='pink';
//   // console.log(menu[i]);
//   menu[i].addEventListener("click", myClick, false);
// }
var menu=document.getElementById("menu_collapsed");menu.addEventListener("click",function(){var e=document.getElementsByClassName("wrappers");for(var t=0;t<e.length;t++)e[t].classList.toggle("is_clicked")},!1);var poke=document.getElementById("poke");poke.addEventListener("click",function(){this.classList.toggle("is_clicked")},!1);var user_drop=document.getElementById("user_header");user_drop.addEventListener("click",function(){var e=document.getElementById("users_wrapper");e.classList.toggle("is_clicked")},!1);var about_drop=document.getElementById("about_header");about_drop.addEventListener("click",function(){var e=document.getElementById("about_wrapper");e.classList.toggle("is_clicked")},!1);