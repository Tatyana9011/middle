// eslint-disable-next-line strict
'use strict';

const popupThanks = () => {

  const openModalStart = elem => {
    elem.style.display = 'block';
    document.addEventListener('keydown', escapeHandler);
  };

  const closeModal = modal => {
    modal.style.display = 'none';
    document.removeEventListener('keydown', escapeHandler);
  };

  function escapeHandler(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  const addCloseModal = elem => {
    const modalClose = elem.querySelector('.close-form'),
      overlay = elem.querySelector('.overlay'),
      closeBtn = elem.querySelector('.close-btn');

    overlay.addEventListener('click', () => {
      closeModal(elem);
    });
    modalClose.addEventListener('click', () => {
      closeModal(elem);
    });
    closeBtn.addEventListener('click', () => {
      closeModal(elem);
    });
  };

  const modalPopup = document.getElementById('thanks');
  openModalStart(modalPopup);
  addCloseModal(modalPopup);
};

export default popupThanks;


