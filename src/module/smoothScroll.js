// eslint-disable-next-line strict
'use strict';

const smoothScroll = () => {
  const scrollUp = document.querySelector('.header-main'),
    up = document.querySelector('#totop'),
    topMenu = document.querySelector('.top-menu'),
    scrollNav = topMenu.querySelectorAll('a[href]');


  up.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (pageYOffset >= 612) {
      up.style.display = 'block';
    } else {
      up.style.display = 'none';
    }
  });


  up.addEventListener('click', event => {
    event.preventDefault();
    scrollUp.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  scrollNav.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      const id = btn.getAttribute("href");

      if (id !== '#') {
        const getId = document.querySelector(id);

        if (getId !== null) {
          getId.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });

};

export default smoothScroll;
