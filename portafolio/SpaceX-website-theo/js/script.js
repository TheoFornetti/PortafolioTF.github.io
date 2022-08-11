const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay')
const sideMenu = document.getElementById('mobile-menu')
const counter = document.querySelectorAll('.counter')
let scrollStarted =false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

function navToggle(){
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-dash')
    sideMenu.classList.toggle('show-menu')
}

function scrollPage(){
    const scrollPos = window.scrollY;
    if(scrollPos > 100 && !scrollStarted){
        countUp();
        scrollStarted =true;
    }else if (scrollPos < 100 && scrollStarted){
        reset();
        scrollStarted =false;
    }
}

function countUp(){
    counter.forEach((counter)=>{
        counter.innerText = "0";

        const updateCounter =() =>{
            const target = +counter.getAttribute('data-target')
            
            const c = +counter.innerText;

            const increment =target / 100;

            if(c < target){
                counter.innerText = `${Math.ceil(c + increment)}`
            
                setTimeout(updateCounter, 75)
            }else{
                counter.innerText = target
            }
        }

        updateCounter();
    })

}

function reset(){
    counter.forEach((counter) => counter.innerHTML ='0')
}

