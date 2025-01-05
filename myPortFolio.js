
const droplink = document.querySelector('.link');
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const goOn = document.querySelector('.continue');
const read = document.querySelector('#read');
const weg = document.querySelectorAll('.web');
const icon = document.querySelectorAll('.ikon');
const MAN = document.querySelector('.ri-menu-fill');
let down = document.querySelectorAll('.ri-arrow-down-s-line');
// let navlink = document.querySelectorAll('nav link a');
const abt = document.querySelector('#about');
const first = document.querySelector('.pic');
const rec = document.querySelector('.rec');
const Hidd = document.querySelectorAll('.hiadde');
const Butt = document.querySelectorAll('.ope');
let hea = document.querySelectorAll('.great');
let para = document.querySelectorAll('.par');
const cancel = document.querySelector('.ri-close-line');
const dark = document.querySelector('.ri-sun-fill');

goOn.style.display= 'none';

// document.addEventListener('DOMContentLoaded', function(){
//   let menuItems = document.querySelectorAll('.link a');
//   menuItems.forEach(function(item){
//         item.addEventListener('click', function(){
//                 droplink.classList.remove('active');
//         })
//   })

// })


// function handleItemClick(){

//         droplink.classList.remove('active');
// }
// const number = document.querySelectorAll('.number');
// let counter1 = 0;
// let counter2 = 0;
// let counter3 = 0;
// let counter4 = 0;
// setInterval(()=>{
//         if(counter1 == 70){
//                 clearInterval();
//         }else{
//                 counter1 += 1;
//         number[0].innerHTML = counter1 +"%"; 
//         }
       
// }, 29);
// setInterval(()=>{
//         if(counter2 == 80){
//                 clearInterval();
//         }else{
//                 counter2 += 1;
//         number[1].innerHTML = counter2 +"%"; 
//         }
       
// }, 25);
// setInterval(()=>{
//         if(counter3 == 60){
//                 clearInterval();
//         }else{
//                 counter3 += 1;
//         number[2].innerHTML = counter3 +"%"; 
//         }
       
// }, 31);
// setInterval(()=>{
//         if(counter4 == 58){
//                 clearInterval();
//         }else{
//                 counter4 += 1;
//         number[3].innerHTML = counter4 +"%"; 
//         }
       
// }, 33);
// Create an IntersectionObserver to detect when the skill sections come into view
// Create an IntersectionObserver to detect when the skill sections come into view
// JavaScript for Scroll-to-Top functionality
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const scrollThreshold = 100; // Scroll threshold to show the button

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > scrollThreshold) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Scroll smoothly to the top when the button is clicked
    scrollToTopBtn.addEventListener("click", function () {
        // Add a temporary class for the hover effect reset
        scrollToTopBtn.classList.add("clicked");

        // Smoothly scroll to the top
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // Remove the class after a delay to reset the hover effect
        setTimeout(() => {
            scrollToTopBtn.classList.remove("clicked");
        }, 1000); // Match the scroll animation duration
    });
});

    // Select all .skill elements to observe
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        // console.log('Observing skill:', skill);
        observer.observe(skill); // Start observing each skill element
    });


    document.addEventListener("DOMContentLoaded", function () {
        const progressBoxes = document.querySelectorAll(".progress-box");
    
        // Function to animate the count and the progress bar
        const animateCount = (element, start, end, duration) => {
            let startTime = Date.now(); // Get the current time
            let barFill = element.closest(".bar").querySelector(".bar-fill");
    
            // Function to update the progress
            const step = () => {
                const currentTime = Date.now();
                const progress = Math.min((currentTime - startTime) / duration, 1); // Progress normalized between 0 and 1
                const value = Math.floor(progress * (end - start) + start); // Interpolating the value
    
                // Update count text and the width of the progress bar
                element.textContent = value;
                barFill.style.width = `${value}%`;
    
                if (progress < 1) {
                    requestAnimationFrame(step); // Continue until the animation is complete
                }
            };
    
            requestAnimationFrame(step); // Start the animation
        };
    
        // Function to check if the element is in the viewport
        const isElementInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top <= window.innerHeight && rect.bottom >= 0; // Element should be in the viewport
        };
    
        // Function to check progress and trigger animation when in view
        const checkProgressInView = () => {
            progressBoxes.forEach((box) => {
                if (isElementInViewport(box) && !box.classList.contains("animated")) {
                    const countText = box.querySelector(".count-text");
                    const percent = parseInt(box.querySelector(".bar-fill").getAttribute("data-percent"), 10);
                    const speed = parseInt(countText.getAttribute("data-speed"), 10); // Animation duration (in ms)
    
                    // Start the count and bar fill animation
                    animateCount(countText, 0, percent, speed);
    
                    // Mark this box as animated to prevent retriggering the animation
                    box.classList.add("animated");
                }
            });
        };
    
        // Scroll event listener to check progress in view
        window.addEventListener("scroll", checkProgressInView);
    
        // Initial check when the page loads to handle elements already in view
        checkProgressInView();
    });
    
    
    window.addEventListener('scroll', reveal);

    function reveal() {
        var revealElements1 = document.querySelectorAll('.reveal');
        var revealElements2 = document.querySelectorAll('.rav');
        
        var windowheight = window.innerHeight;
        var revealpoint = 150;
    
        // For .reveal elements
        revealElements1.forEach(function(element) {
            var revealtop = element.getBoundingClientRect().top;
    
            if (revealtop < windowheight - revealpoint) {
                element.classList.add('active');
                // Remove the event listener once the element is revealed
                element.removeEventListener('scroll', reveal);
            }
        });
    
        // For .rav elements
        revealElements2.forEach(function(element) {
            var revealtop = element.getBoundingClientRect().top;
    
            if (revealtop < windowheight - revealpoint) {
                element.classList.add('slide');
                // Remove the event listener once the element is revealed
                element.removeEventListener('scroll', reveal);
            }
        });
    }
    
MAN.addEventListener('click', (e)=>{
        droplink.classList.toggle('open');
        console.log('good');
    })
    cancel.addEventListener('click', (e)=>{
        droplink.classList.toggle('open');
    })
    dark.addEventListener('click', (e)=> {
        document.body.classList.toggle('dark-theme');
        if (dark.classList.contains('ri-sun-fill')){
                dark.classList.replace('ri-sun-fill', 'ri-moon-clear-line');
        }else{
                dark.classList.replace('ri-moon-clear-line', 'ri-sun-fill')
        }
        
        // if(document.body.classList.contains('dark-theme'))
        // {
        // }else{
        //         dark='.ri-toggle-line';
        // }
    });
//     MAN.classList.toggle('active');
//     toggle.classList.toggle('ri-close-line');
//     droplink.style.display =(droplink.style.display==='block') ? 'none': 'block' ; 

function handleItemClick(){
        droplink.classList.remove('active')
}


if (MAN.classList ==='ri-menu-fill'){
        MAN.classList='ri-close-line'
        
}  else{
        MAN.classList='ri-menu-fill' 
};

document.addEventListener('scroll', (e) =>{
    const scrolValue = window.scrollY;
    if (scrolValue < 170){
        nav.style.position = 'sticky'
        nav.classList.remove('smooth');
    }else{nav.style.position = 'fixed';
        nav.classList.add('smooth');          


}
// document.addEventListener('sroll', (e)=> {
//         let offset = sec.offsetTop;
//         let height = sec.offfsetHeight;
//         let id = sec.getAttributr('id');
//         if (scrolValue >= offset && srollValue < offset + height){
//                 navlink.forEach(links =>{
//                         links.classList.remove('active');
//                         document.querySelector('nav link a [href*=' + id +']').classList.add
//                         ('active')
//                 });

//         };
// })
})
read.addEventListener('click', (e)=>{
        down[0].classList.toggle('ri-arrow-up-s-line');
    goOn.style.color ='black';
     if(goOn.style.display == 'none'){
             goOn.style.display ='block';
             
        }else{
                goOn.style.display = 'none';
        }
})


Butt[0].addEventListener('click', (e)=>{
        Hidd[0].style.color='black';
        if(Hidd[0].style.display=='none'){
                Hidd[0].style.display='block'
        }
        else{Hidd[0].style.display='none'};
       
})


Butt[1].addEventListener('click', (e)=>{
        Hidd[1].style.color='black';
        if(Hidd[1].style.display=='none'){
                Hidd[1].style.display='block'
        }
        else{Hidd[1].style.display='none'};
})


Butt[2].addEventListener('click', (e)=>{
        Hidd[2].style.color='black';
        if(Hidd[2].style.display=='none'){
                Hidd[2].style.display='block'
        }
        else{Hidd[2].style.display='none'};
})


weg[0].addEventListener('mouseover', (e)=>{
        icon[0].style.color ="#0082e6";
})

weg[1].addEventListener('mouseover', (e)=>{
        icon[1].style.color ="#0082e6";
})

weg[2].addEventListener('mouseover', (e)=>{
        icon[2].style.color ="#0082e6";
})

weg[0].addEventListener('mouseout', (e)=>{
        icon[0].style.color ="black";
})

weg[1].addEventListener('mouseout', (e)=>{
        icon[1].style.color ="black";
})

weg[2].addEventListener('mouseout', (e)=>{
        icon[2].style.color ="black";
})

hea[0].addEventListener('click', (e)=>{
        console.log("i love you mum");
 down[0].classList.toggle('ri-arrow-up-s-line');
 para[0].classList.toggle('active');
   })

hea[1].addEventListener('click', (e)=>{
 down[1].classList.toggle('ri-arrow-up-s-line');
para[1].classList.toggle('active');
 })
       
 hea[2].addEventListener('click', (e)=>{
 down[2].classList.toggle('ri-arrow-up-s-line');
para[2].classList.toggle('active');
 })

hea[3].addEventListener('click', (e)=>{
 down[3].classList.toggle('ri-arrow-up-s-line');
para[3].classList.toggle('active');
})
       
hea[4].addEventListener('click', (e)=>{
 down[4].classList.toggle('ri-arrow-up-s-line');
 para[4].classList.toggle('active');
 })

 hea[5].addEventListener('click', (e)=>{
 down[5].classList.toggle('ri-arrow-up-s-line');
para[5].classList.toggle('active');
  })


