const btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', function(){
    document.getElementById('menu-transition').classList.toggle('show');
    document.getElementById('menu').classList.toggle('show');
    setTimeout(() => {document.getElementById('btn-menu').classList.toggle('show')}, 550);
});

let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", moveCursor)

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}

let links4cursor = Array.from(document.querySelectorAll("a"));
links4cursor.push(btnMenu)

links4cursor.forEach(link => {
    link.addEventListener("mouseover", function() {
        cursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", function() {
        cursor.classList.remove("grow");
    });
});