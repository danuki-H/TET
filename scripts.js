let title = document.getElementById('title');
let bg = document.getElementById('bg');
let ch = document.getElementById('canh-hoa');
let ch2 = document.getElementById('canh-hoa-2');
window.addEventListener('scroll', function(){
    let position = window.scrollY;
    title.style.transform = 'translateY('+(position*0.35)+'px)';
    bg.style.transform = 'translateY('+(position*0.5)+'px)';
    ch.style.transform = 'translateX('+(position*0.9)+'px)'+' translateY('+(position*0.2)+'px)';
    ch2.style.transform = 'translateY('+(-position*0.9)+'px) translateX('+(-position*0.2)+'px) rotateY(180deg)';
})