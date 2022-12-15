/**
 * Volume
 * <i class="fa-solid fa-volume-xmark"></i>
 * <i class="fa-solid fa-volume-low"></i>
 */
let mutedAudio = document.querySelector('#Muted'),
    iconVolume = document.querySelector('#icon-volume');
let audioTET = document.getElementById('audio-tet');
let isMuted = 0;

mutedAudio.style.display = 'none';
mutedAudio.addEventListener('click', () => {
    isMuted++;
    iconVolume.classList.toggle('fa-volume-low');
    iconVolume.classList.toggle('fa-volume-xmark');
    if(isMuted % 2 != 0){
        audioTET.muted = true;
    }else{
        audioTET.muted = false;
    }
})
/**
 * Play Audio
 */
let playAudio = document.querySelector('#PlayAudio');
playAudio.addEventListener('click', function(){
    playAudio.style.display = 'none';
    mutedAudio.style.display = 'flex';
    audioTET.play();
})
/**
 * Window onload
 */
window.addEventListener("load", function(){
    let pre_Loader = document.getElementById('pre-loader');
    let items = document.querySelectorAll('.item');
    let thiepChuc = document.querySelector('.thiep-chuc');
    pre_Loader.style.display = 'none';
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
 * Flower fall
 */
let divHoa = document.querySelector('.hoa-roi');
window.addEventListener('load', function(){
    divHoa.classList.add('active');
    for(var i = 0; i <= 40; i++){
        let leftHoa = Math.floor(Math.random() * divHoa.clientWidth);
        let topHoa = Math.floor(Math.random() * divHoa.clientHeight - 50);
        let widthHoa = Math.floor(Math.random() * 30);
        let timeHoa = Math.floor(Math.random() * 5 + 1);
        let blurHoa = Math.floor(Math.random() * 5);
        let flower = this.document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = leftHoa + 'px';
        flower.style.top = topHoa + 'px';
        flower.style.width = widthHoa + 'px';
        flower.style.height = widthHoa + 'px';
        flower.style.animationDuration = timeHoa + 's';
        flower.style.filter = 'blur(' + blurHoa + 'px)';
        divHoa.appendChild(flower);
    }

})