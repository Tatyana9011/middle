// eslint-disable-next-line strict
'use strict';

const slider = () => {
  let currentSlide = 0;
  const mainSlider = document.querySelector('.main-slider'),
    slide = mainSlider.querySelectorAll('.slide'),
    offerHead = mainSlider.querySelectorAll('.offer-head');

  offerHead.forEach(item => {
    item.style.cssText = `margin-top: 0px`;
  });

  mainSlider.style.cssText = `padding-top: 80px`;
  const prevSlide = (elem, index) => {
    elem[index].style.display = 'block';
  };

  const nextSlide = (elem, index) => {
    elem[index].style.display = 'none';
  };

  const autoPlaySlide = () => {
    slide.forEach(item => {
      item.style.display = 'none';
    });

    prevSlide(slide, currentSlide);
    currentSlide++;

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    nextSlide(slide, currentSlide);

  };

  const startSlide = (time = 3000) => {
    setInterval(autoPlaySlide, time);
  };

  startSlide(3000);
};
export default slider;
