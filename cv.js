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
