function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const img = document.getElementById('toggle-mode');
let toggle = true;
img.addEventListener('click', function(){
  toggle = !toggle;
  if(toggle){
    img.src = 'assets\\theme.png'
  } else {
    img.src = 'assets\\sun.png';
  }
})