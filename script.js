// for typed intro 

var typed = new Typed('#element', {
    strings:["Web Developer", "Coder"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true
});

// for about tab change 

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

// for side menu changing

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
};

function closemenu() {
    sidemeu.style.right = "-200px";
};


// for circle animation 

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
});


// for form submission

const scriptURL = 'https://script.google.com/macros/s/AKfycbxH9mX9iK_wGloSBwZed8MGeD4s4cGkRRepYytXOH68V_HbK2QOL_BYs2NfSeucVdFZ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});

// for active navbar 

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// parallax

// const observer = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.terget.classList.add("show-items");
//         }
//         else{
//             entry.target.classList.remove("show-items");
//         }
//     });
// });

// const scrollScale = document.querySelectorAll(".scroll-scale");
// scrollScale.forEach((el)=>observer.observe(el));

// const scrollBottom = document.querySelectorAll(".scroll-bottom");
// scrollBottom.forEach((el)=>observer.observe(el));

// const scrollTop = document.querySelectorAll(".scroll-top");
// scrollTop.forEach((el)=>observer.observe(el));