const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

function toggleNav() {
  const navList = document.querySelector('.main-nav');
  const burger = document.querySelector('.burger');
  navList.classList.toggle('open');
  burger.classList.toggle('open'); // <-- animacja burgera
}