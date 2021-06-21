// eslint-disable-next-line strict
'use strict';

const smoothScroll = () => {
  const scrollUp = document.querySelector('header');
  const up = document.querySelector('#totop');
  up.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (pageYOffset >= 612) {
      up.style.display = 'block';
    } else {
      up.style.display = 'none';
    }
  });

  const click = () => {
    up.addEventListener('click', () => {
      scrollUp.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  click();

};

export default smoothScroll;
