//creating animation for "Hello, I am Alan!
const helloGreeting = document.getElementById("helloGreeting");

const greeting = "H,e,l,l,o,.,<br>,I, ,a,m,<br>,A,l,a,n,!";
const greetingArr = greeting.split(",");
let i = 0;

let typing = setInterval(function () {
  let displayText = greetingArr.slice(0, i + 1).join("");
  //ternary operator, let's try to make the leading cursor flash.
  //   let leading = i % 2 == 0 ? "_" : " ";
  helloGreeting.innerHTML = displayText;
  i++;
  if (i >= greetingArr.length) {
    createFloaterDiv();
    clearInterval(typing);
  }
}, 350);

//making the floater appear

function createFloaterDiv(){
    const floaterDiv = document.getElementById("floaterDiv");
    floaterDiv.classList.toggle("invisible");
}

