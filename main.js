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
}, 350);

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

  floaters.forEach((floaty, index) => {
    console.log(index);
    setTimeout(function () {
      console.log("creating", floaty);
      floaty.classList.toggle("invisible");
    }, 1500 * index);
  });
}
