const btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', function(){
    document.getElementById('menu-transition').classList.toggle('show');
    document.getElementById('menu').classList.toggle('show');
    setTimeout(() => {document.getElementById('btn-menu').classList.toggle('show')}, 550);
});



