//
window.addEventListener("load", function(){
    let loader = document.querySelector('.loader');
    let items = document.querySelectorAll('.item');
    let thiepChuc = document.querySelector('.thiep-chuc');
    loader.style.display = 'none';
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