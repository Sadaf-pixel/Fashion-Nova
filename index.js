// JavaScript code

// Add a click event listener to the navigation menu
// document.querySelector('nav').addEventListener('click', function(event) {
// 	if (event.target.tagName === 'A') {
// 		event.preventDefault();
// 		alert('You clicked on a navigation link!');
// 	}
// });
// var navLinks = document.getElementById("navLinks");
// function showMenu(){
// 	navLinks.style.right = "0";
// }
// function hideMenu(){
// 	navLinks.style.right = "-200px";
// }

// 		var x = document.getElementById("signIn");
//         var y = document.getElementById("signUp");
//         var z = document.getElementById("btn");

//         function signUp(){
//             x.style.left="-400px";
//             y.style.left="50px";
//             z.style.left="110px";
//         }

//         function signIn(){
//             x.style.left="50px";
//             y.style.left="450px";
//             z.style.left="0";
//         }
const navLinks = document.querySelector('#navLinks');
let top = navLinks.offsetTop;
function stickynavLinks() {
  if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavLinks);