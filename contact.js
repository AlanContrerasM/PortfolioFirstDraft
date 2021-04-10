//event listeners for drop down menu
const DropDMenus = document.querySelectorAll(".drop-menu");

DropDMenus.forEach((menu) => {
  // console.log("creating event drop down");
  menu.parentElement.addEventListener("mouseover", (e) => {
    menu.classList.toggle("invisible");
  });
  menu.parentElement.addEventListener("mouseout", (e) => {
    menu.classList.toggle("invisible");
  });
});


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


//form stuff
let form = document.getElementsByTagName("form")[0];
let inputs = document.querySelectorAll(".contactFormEl");
// const nameForm = document.getElementById("nameForm")
// const company = document.getElementById("company")
// const companyType = document.getElementById("companyType")
// const position = document.getElementById("position")
// const salary = document.getElementById("salary");
// const phone = document.getElementById("phone")
// const email = document.getElementById("email")
// const dateForm = document.getElementById("dateForm")
// const comments = document.getElementById("comments")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isCorrect = e.target.checkValidity();
  e.target.reportValidity();
  if (isCorrect) {
    submitForm();
  }
});

function submitForm(){

    const mainSection = document.getElementsByTagName("main")[0];
    // let values = {};
    //creating the div that will act as a blocker
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alertContainer");
    alertDiv.classList.add("center");

    //creating the actual container div
    const alertInfoContainer = document.createElement("div");
    alertInfoContainer.setAttribute("id", "alertInfo");

    //first message
    let contactMessage = document.createElement("div");
    contactMessage.innerHTML = `<strong>Job Offer sent:</strong>`;
    alertInfoContainer.appendChild(contactMessage);

    //creating close button
    let closeButton = document.createElement("div");
    closeButton.innerText = "X";
    closeButton.setAttribute("id", "closeButton");
    closeButton.addEventListener("click",()=>{
        mainSection.removeChild(alertDiv);
    })
    alertInfoContainer.appendChild(closeButton);



    
    //get all inputs and display it.
    for(let value of inputs){
        // values[value.name] = value.value;

        let newDiv = document.createElement("div");

        newDiv.innerHTML = `<strong>${value.name}</strong>: ${value.value}`;
        alertInfoContainer.appendChild(newDiv);

        
    }

    alertDiv.appendChild(alertInfoContainer);
    mainSection.appendChild(alertDiv);
    // console.table(values)
}


//range slider
const salary = document.getElementById("salary");
const salarySpan = document.getElementById("salarySpan");

salary.addEventListener("change", (e) => {
  salarySpan.innerText = `$${e.target.value}K`;
  if (e.target.value == 150) {
    salarySpan.innerText += "+";
  }
});
