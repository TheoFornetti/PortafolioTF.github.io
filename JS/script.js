console.log('si')

const menuSwitch = document.querySelector(".off");
const menuButton = document.querySelector('.menu-responsive')

menuButton.addEventListener("click", offtoggle);

function offtoggle(){
    menuSwitch.classList.toggle('off')
    console.log("alo")
}