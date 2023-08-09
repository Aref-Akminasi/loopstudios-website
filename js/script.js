const hamburgerBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});
