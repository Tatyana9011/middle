// eslint-disable-next-line strict
'use strict';

const popupThanks = str => {

  const openModalStart = (elem, str) => {
    elem.style.display = 'block';
    if (str) {
      const content = elem.querySelector('.form-content');
      content.innerHTML = `<h4 style="color : red">${str}!</h4>
      <p>Это учебный проект, потому запросы не работают!</p>`;
    }
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

  if (str === 'Заявка отправлена') {
    openModalStart(modalPopup, '');
    addCloseModal(modalPopup);
  }
  if (str === 'Ошибка запроса') {
    openModalStart(modalPopup, 'Ошибка запроса');
    addCloseModal(modalPopup);
  }

};

export default popupThanks;


