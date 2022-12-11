let loader = document.querySelector('.loader');
window.addEventListener("load", function(){
    let items = document.querySelectorAll('.item');
    loader.style.display = 'none';
    items.forEach(item => {
        item.classList.add('active');
    });
})