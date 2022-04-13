$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
            if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    })
    var typed = new Typed(".typing", {
        strings: ["Graphic designer", "Developer", "Freelancer"],
        typeSpeed: 60 ,
        backSpeed: 60,
        loop: true
    });
    function animation(x) {
        x.classList.toggle("change");
    }
    
    var typed = new Typed(".About-typing", {
        strings: ["Graphic designer", "Developer", "Freelancer"],
        typeSpeed: 60 ,
        backSpeed: 60,
        loop: true
    });
});
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


