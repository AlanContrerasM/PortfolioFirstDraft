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

