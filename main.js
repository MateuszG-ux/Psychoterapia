const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // po przewinięciu 300px pokazujemy przycisk
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
    navList.classList.toggle('active');
  }

