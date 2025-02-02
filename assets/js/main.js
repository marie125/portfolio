/******************** navigation bar function *************************************/
function mymenufunction()
{
    var menubtn = document.getElementById("mynavMenu")
    if (menubtn.className === "nav-menu") {
        menubtn.className += " responsive"
    }
    else
    {
        menubtn.className = "nav-menu" ;
    }
}
/**************** add shadow on navigation bar while scrooling */
window.onscroll = function(){headerShadow()}; 
 function headerShadow() {
      const navheader = document.getElementById("header");

      if (document.body.scrollTop > 50  ||  document.documentElement.scrollTop > 50)
      {
          navheader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
          navheader.style.height = "70px";
          navheader.style.lineHeight = "70px";
      }
      else
      {
        navheader.style.boxShadow = "none";
        navheader.style.height = "90px";
        navheader.style.lineHeight = "90px";
      }
     
 }
 /***************** typing effect **********/
 var typingEffect = new Typed(".typedtext",{
    strings : ["Etudiante","Etudiante informaticienne", "Developper"],
    loop: true,
    typeSpeed:100,
    backSpeed : 80,
    backDelay: 2000
 })
 /** scrool reveal animations */
 const sr = ScrollReveal (
    {
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    }
 )
 /*********** home */
 sr.reveal('.feautured-text-card',{})
 sr.reveal('.feautured-name',{delay: 100})
 sr.reveal('.feautured-text-info',{delay: 200})
 sr.reveal('.feautured-text-btn',{delay: 200})
 sr.reveal('.social-icons',{delay: 200})
 sr.reveal('.feautured-image',{delay: 300})
 /*********** project box */
  {
    sr.reveal('.project-box',{interval: 200})
  }
  /*************** HEADINGS */
  sr.reveal('.top-header',{})
 /************ ABOUT INFO */
 const srleft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
 })
  srleft.reveal('.about-info',{delay: 100})
  srleft.reveal('.contact-info',{delay: 100})
  /**************** about skills & form box */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
 })
  srleft.reveal('.skills-box',{delay: 100})
  srleft.reveal('.form-control',{delay: 100})
/******************* change active ****/
const sections = document.querySelectorAll('section[id]')

function scrollActive (){ 
    const scroolY = window.scrollY;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scroolY >  sectionTop &&  scroolY<=  sectionTop + sectionHeight  )
        {
            document.querySelectorAll('.nav-menu a[href*=' + sectionId +']').classList.add('active.link')
        } else
        {
            document.querySelectorAll('.nav-menu a[href*=' + sectionId +']').classList.remove('active.link')
        }
    })
}
window.addEventListener('scrool', scrollactive) 


