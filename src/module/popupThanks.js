// eslint-disable-next-line strict
'use strict';

const menuHead = () => {

  const openModalStart = elem => {
    elem.style.display = 'block';
    document.addEventListener('keydown', escapeHandler);
  };

  const closeModal = modal => {
    modal.style.display = 'none';
    document.removeEventListener('keydown', escapeHandler);
  };

  const escapeHandler = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const addCloseModal = elem => {
    const modalClose = elem.querySelector('.close-form'),
      overlay = elem.querySelector('.overlay');

    overlay.addEventListener('click', () => {
      closeModal(elem);
    });
    modalClose.addEventListener('click', () => {
      closeModal(elem);
    });
  };

  const initPopup = target => {
    if (target.closest('.club-select')) {
      const menu = document.querySelector('.clubs-list-menu');

      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    }
    if (target.closest('.open-popup')) {
      const modalPopup = document.getElementById('free_visit_form');
      openModalStart(modalPopup);
      addCloseModal(modalPopup);
    }
    if (target.closest('.callback-btn')) {
      const modalPopup = document.getElementById('thanks');
      openModalStart(modalPopup);
      addCloseModal(modalPopup);
    }
  };

  const head = document.querySelector('.head');
  head.addEventListener('click', event => {
    const target = event.target;
    initPopup(target);
  });

  const gift = document.querySelector('.fixed-gift');
  if (gift) {
    gift.addEventListener('click', () => {
      const modalPopup = document.getElementById('gift');
      openModalStart(modalPopup);
      addCloseModal(modalPopup);
      gift.style.display = 'none';
    });
  }
};

export default menuHead;


