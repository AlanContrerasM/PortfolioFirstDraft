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

//projects

let descriptionsArray = [
  "<h1>ToDo Project</h1><br>Create Projects, and tasks. Special use of dates and time remaining.<br>Use of modules, import, export, webpack, eslint, prettier, node, external npm packages, factory functions and local storage.",
  "<h1>Library Project</h1><br>Create new books, read, not read, and store them on localStorage.<br>Use of classes, and factory functions, modules, local storage, webpack, node.",
  "<h1>Restaurant Project</h1><br>Everything created from javascript, including different pages.<br>Use of classes, webpack, node, heavy DOM manipulation.",
  "<h1>Tic Tac Toe Project</h1><br>Play against a computer, keeping score, choose your hand, and more<br>classes, dom manipulation, events, random, computer, node, etc.",
  "<h1>Calculator Project</h1><br>Not a scientific calculator, basic operations, chain operations, semi-smart, pure js.<br>Dom Manipulation, JS, logic, math, etc.",
  "<h1>Rock Paper Scissors</h1><br>Play against random computer, keep score, and look good.<br>Dom manipulations, javascript, css, html, grid.",
  "<h1>Etch a Sketch Project</h1><br>Draw to your hearts content.<br>js, dom manipulation, events, loops, etc.",
];

let linksArray = [
  "https://alancontrerasm.github.io/ToDo/",
  "https://alancontrerasm.github.io/library-demo-odin/",
  "https://alancontrerasm.github.io/restaurant-odin-demo/",
  "https://alancontrerasm.github.io/ticTacToe-Demo-Odin/",
  "https://alancontrerasm.github.io/calculator-dumb/",
  "https://alancontrerasm.github.io/rock-paper-scissors/",
  "https://alancontrerasm.github.io/etch-a-sketch2/",
];

let projectIndex = 0;
showProject(projectIndex);

//event listener for arrows

const last = document.getElementById("last");
const next = document.getElementById("next");

last.addEventListener("click", (e) => {
  changeProject(-1);
});
next.addEventListener("click", (e) => {
  changeProject(1);
});

//event listeners for cards on about
const cards = document.querySelectorAll(".cardP");
const cardContainer = document.querySelector(".card-containerProject");

cards.forEach((card, index) => {
  card.addEventListener("mouseover", (e) => {
    cardContainer.style.gridTemplateRows = e.target.getAttribute("template");
  });

  card.addEventListener("click", () => {
    projectIndex = index;
    showProject(projectIndex);
  });
});

// Next/previous controls
function changeProject(n) {
  if (projectIndex == 6 && n == 1) {
    projectIndex = 0;

    showProject(projectIndex);
  } else {
    showProject((projectIndex += n));
  }
}

function showProject(n) {
  const projects = document.querySelectorAll(".myProjects");
  const caption = document.getElementById("captionP");
  const link = document.getElementById("visitP");
  projects.forEach((project, index) => {
    if (index == n) {
      project.style.display = "block";
      caption.innerHTML = descriptionsArray[index];
      link.href = linksArray[index];
    } else {
      project.style.display = "none";
    }
  });
}
