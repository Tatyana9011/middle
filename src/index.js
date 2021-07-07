// eslint-disable-next-line strict
'use strict';
import smoothScroll from './module/smoothScroll';
import slider from './module/slider';
import carouselGallery from './module/sliderCarousel';
import calc from './module/calc';
import sendForm from './module/sendForm';
import validationForm from './module/validationForm';
import menuHead from './module/menuHead';
import popupMenu from './module/popupMenu';
import sliderServices from './module/sliderCarouselServices';
import telMask from './module/tel-mask';


calc();
smoothScroll();
carouselGallery();
sliderServices();
menuHead();
popupMenu();
telMask();

const forms = document.querySelectorAll('form');
forms.forEach(form => {
	validationForm(form);
});

sendForm();
slider();

