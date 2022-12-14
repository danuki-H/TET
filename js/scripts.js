//
window.addEventListener("load", function(){
    let preload = document.getElementById('preload');
    let items = document.querySelectorAll('.item');
    let thiepChuc = document.querySelector('.thiep-chuc');
    preload.style.display = 'none';
    items.forEach(item => {
        item.classList.add('active');
    });
    document.getElementById('read-more').addEventListener('click', function(){
        thiepChuc.classList.add('active');
        thiepChuc.classList.remove('exit');
    })
    document.getElementById('thoat').addEventListener('click', function(){
        thiepChuc.classList.add('exit');
        thiepChuc.classList.remove('active');
    })
})

/**
 * Volume
 * <i class="fa-solid fa-volume-xmark"></i>
 * <i class="fa-solid fa-volume-low"></i>
 */
let iconVolume = document.querySelector('#icon-volume');
let audioTET = document.getElementById('audio-tet');
audioTET.loop = true;
let isMuted = 0;
document.querySelector('#Muted').addEventListener('click', () => {
    isMuted++;
    iconVolume.classList.toggle('fa-volume-low');
    iconVolume.classList.toggle('fa-volume-xmark');
    if(isMuted % 2 != 0){
        audioTET.muted = true;
    }else{
        audioTET.muted = false;
    }

})