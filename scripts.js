let bg = document.getElementById('bg')
let may1 = document.getElementById('may-1')
let may2 = document.getElementById('may-2')
let ca = document.getElementById('ca')
let nui = document.getElementById('nui')
let bgThiep = document.getElementById('bg-thiep')
let title = document.getElementById('title')
let lan = document.getElementById('lan')
let ch1 = document.getElementById('canh-hoa-1')
let ch2 = document.getElementById('canh-hoa-2')

window.addEventListener('scroll', function(){
    let position = window.scrollY;
    bg.style.transform = 'translateY(' + position*0.3 + 'px)';
    ca.style.transform = 'translateY(' + position*0.5 + 'px)';
    may1.style.transform = 'translateY(' + position*0.8 + 'px) translateX(' +(-position*0.6) + 'px) scale(' + (position+500)/500 + ')';
    may2.style.transform = 'translateY(' + position*0.7 + 'px) translateX(' +(position*0.5) + 'px) scale(' + (position+400)/500 + ')';
    nui.style.transform = 'translateY(' + (-position*0.2) + 'px)';

})