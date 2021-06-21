// eslint-disable-next-line strict
'use strict';

const carousel = () => {
  const allSlider = document.querySelector('.services-slider'),
    arrowRight = allSlider.querySelector('#arrow-right'),
    arrowLeft = allSlider.querySelector('#arrow-left'),
    cards = [...allSlider.querySelectorAll('.slide')];

  allSlider.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  `;
  arrowRight.style.top = '25% !important';
  arrowLeft.style.top = '25% !important';
  const renderCards = () => {
    let numberElements = 1;

    if (document.documentElement.offsetWidth > 990) {
      numberElements = 4;
    } else if (document.documentElement.offsetWidth > 760) {
      numberElements = 3;
    } else if (document.documentElement.offsetWidth > 680) {
      numberElements = 2;
    }

    cards.forEach((card, i) => {
      if (i < numberElements) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  const moveRight = () => {
    allSlider.append(cards[0]);

    cards.push(cards[0]);
    cards.shift();

    renderCards();

  };

  const moveLeft = () => {
    allSlider.prepend(cards[cards.length - 1]);

    cards.unshift(cards[cards.length - 1]);
    cards.pop();

    renderCards();

  };

  renderCards();

  const clickBtn = event => {
    event.preventDefault();
    const target = event.target;

    if (target.matches('#arrow-left')) {
      moveLeft();
    } else if (target.matches('#arrow-right')) {
      moveRight();
    }
  };
  arrowRight.addEventListener('click', clickBtn);
  arrowLeft.addEventListener('click', clickBtn);

  window.addEventListener('resize', renderCards);
};

export default carousel;

