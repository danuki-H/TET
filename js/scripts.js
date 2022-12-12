//
window.addEventListener("load", function(){
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.classList.add('active');
    });
})