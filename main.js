const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () =>{
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    }  else  {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

    window.onscroll = function() {myFunction()};

    function myFunction() {
      if (document.documentElement.scrollTop > 100) {
        menuBtn.classList.remove('open');
        menuOpen = false;
      } 
    }
});

window.addEventListener('scroll', reveal);
    function reveal(){
  
        var revealleft = document.querySelectorAll('.revealleft');
        var revealright = document.querySelectorAll('.revealright');
        var windowheight = window.innerHeight;
        var revealtop = revealleft[0].getBoundingClientRect().top;
        var revealpoint = 150;
  
        if(revealtop < windowheight - revealpoint){
            revealleft[0].classList.add('active');
            revealright[0].classList.add('active');
        }
        else{
            revealleft[0].classList.remove('active');
            revealright[0].classList.remove('active');
        }
    };

var date = new Date();
var year = date.getFullYear();
document.getElementById('year').textContent = year;