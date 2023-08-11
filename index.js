//
let menubar = document.getElementById('menubar')

menubar.addEventListener('click',function(e)
{
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

//typing effect 

let typed = new Typed('.typeeffect',{
    strings:['Front-End Developer!','Web Developer!','Software Developer!'],
    typedpeed:100,
    backspeed:100,
    backDelay:2000,
    loop:true,
})

//
let navlinks = document.querySelectorAll()