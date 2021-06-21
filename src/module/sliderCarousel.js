// eslint-disable-next-line strict
'use strict';

const carousel = () => {
  let currentSlide = 0,
    interval;

  const allSlider = document.querySelector('.gallery-slider'),
    slide = allSlider.querySelectorAll('.slide'),
    dots = document.querySelector('.dots');

  const createDot = () => {
    const newDot = [];
    for (let i = 0; i < slide.length; i++) {
      newDot[i] = document.createElement('li');
      newDot[i].classList.add('dot');
      dots.append(newDot[i]);
    }
  };
  createDot();

  const dot = document.querySelectorAll('.dot');
  dot[0].classList.add('dot-active');
  slide[0].classList.add('slide-active');

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };
  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };
  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

  allSlider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.portfolio-btn, .dot')) {
      return;
    }

    prevSlide(slide, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('#arrow-left')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    nextSlide(slide, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'dot-active');
  });
  //когда наводим мышку
  allSlider.addEventListener('mouseover', event => {
    if (event.target.matches('.portfolio-btn, .dot')) {
      stopSlide();
    }
  });
  //когда убираем мышку
  allSlider.addEventListener('mouseout', event => {
    if (event.target.matches('.portfolio-btn, .dot')) {
      startSlide(3000);
    }
  });
  startSlide(3000);
};

export default carousel;

