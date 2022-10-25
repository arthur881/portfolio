const btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', function(){
    document.getElementById('menu-transition').classList.toggle('show');
    document.getElementById('menu').classList.toggle('show');
    setTimeout(() => {document.getElementById('btn-menu').classList.toggle('show')}, 550);
    
});

const heroTitle = new SplitType('#heroTxt')

gsap. to(' .char',{
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 1.
})

