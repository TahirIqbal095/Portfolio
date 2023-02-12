const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener('click', () =>{
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
});

// active status

const navItems = document.querySelectorAll('nav a');
for(var i=0; i<navItems.length; i++){
    navItems[i].addEventListener('click', function(){
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.className += " active";
    });
}