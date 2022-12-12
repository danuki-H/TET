//
window.addEventListener("load", function(){
    let loader = document.querySelector('.loader');
    let items = document.querySelectorAll('.item');
    loader.style.display = 'none';
    items.forEach(item => {
        item.classList.add('active');
    });
})