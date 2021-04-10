//kept everything semi-simple no modules, factory functions for cards, meh..., webpack, node, etc.

//event listeners for drop down menu
const DropDMenus = document.querySelectorAll(".drop-menu")

DropDMenus.forEach((menu)=>{
    // console.log("creating event drop down");
    menu.parentElement.addEventListener("mouseover",(e)=>{
        menu.classList.toggle("invisible");
    })
    menu.parentElement.addEventListener("mouseout",(e)=>{
        menu.classList.toggle("invisible");
    })
})

//mobile menu functionality
const nav = document.getElementsByTagName("nav")[0];
const navIcon = document.getElementById("navIcon");
const closeNav = document.getElementById("closeNav");

navIcon.addEventListener("click", (e)=>{
  nav.style.height = "100%";
  navIcon.classList.add("invisible");
  closeNav.classList.remove("invisible");
})

closeNav.addEventListener("click", (e)=>{
  nav.style.height = "0%";
  navIcon.classList.remove("invisible");
  closeNav.classList.add("invisible");

})

//there is a problem with the navIcon, since it's set to invisible class at first
//we need a media query that works with javascript.
//reference=https://css-tricks.com/working-with-javascript-media-queries/

//check for mobile size
const mediaQueryMobile = window.matchMedia('(max-width: 768px)');
const mediaQueryNormal = window.matchMedia('(min-width: 768px)');

//handle start of page, if we should show icon
if(mediaQueryMobile.matches){
  navIcon.classList.remove("invisible");
}

//handle changes when user changes screen.
function handleMobileScreen(e){
  if(e.matches){
    navIcon.classList.remove("invisible");
  }
}

function handleNormalScreen(e){
  if(e.matches){
    navIcon.classList.add("invisible");
  }
}

//setting event listeners.
mediaQueryMobile.addEventListener("change", handleMobileScreen);
mediaQueryNormal.addEventListener("change", handleNormalScreen);


//creating animation for "Hello, I am Alan!
const helloGreeting = document.getElementById("helloGreeting");

const greeting = "H,e,l,l,o,.,<br>,I, ,a,m,<br>,A,l,a,n,!";
const greetingArr = greeting.split(",");
let i = 0;

let typing = setInterval(function () {
  let displayText = greetingArr.slice(0, i + 1).join("");
  //ternary operator, let's try to make the leading cursor flash. Meh, didn't look good
  //   let leading = i % 2 == 0 ? "_" : " ";
  helloGreeting.innerHTML = displayText;
  i++;
  if (i >= greetingArr.length) {
    createFloaterDiv();
    floaterClick();
    clearInterval(typing);
  }
}, 250);

//making the floater appear
function createFloaterDiv() {
  const floaterDiv = document.getElementById("floaterDiv");
  floaterDiv.classList.toggle("invisible");
}

//easter egg on floaterDiv, need to press. Maybe you'll find it, maybe not!

function floaterClick() {
  //dissappearing the big floaterDiv
  const floaterDiv = document.getElementById("floaterDiv");
  floaterDiv.addEventListener("click", (e) => {
    e.target.classList.toggle("invisible");
    createFloaters();
  });
}

function createFloaters() {
  //making the floaters appear with a delay for each one

  const floaters = document.querySelectorAll(".floaters");

  //loop for
  floaters.forEach((floaty, index) => {
    // console.log(index);
    setTimeout(function () {
    //   console.log("creating", floaty);
      floaty.classList.toggle("invisible");
    }, 1200 * index);
  });
}


