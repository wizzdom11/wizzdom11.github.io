
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
goOn.style.display= 'none';

toggle.addEventListener('click', (e)=>{
    droplink.classList.toggle('active');
    MAN.classList.toggle('active');
    toggle.classList.toggle('ri-close-line');
})

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


