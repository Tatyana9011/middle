// eslint-disable-next-line strict
'use strict';

const popupThanks = str => {
  const modalPopup = document.getElementById('thanks'),
    overlay = modalPopup.querySelector('.overlay'),
    closeBtn = modalPopup.querySelector('.close_icon');

  const openModalStart = strText => {
    modalPopup.style.display = 'flex';

    if (strText) {
      const content = modalPopup.querySelector('.form-content');
      content.innerHTML = `<h4 style="color : red">${strText}!</h4>
      <p>Это учебный проект, потому запросы не работают!</p>`;
    }

    document.addEventListener('keydown', escapeHandler);
  };

  const closeModal = () => {
    modalPopup.style.display = 'none';
    document.removeEventListener('keydown', escapeHandler);
  };

  function escapeHandler(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  if (str === 'Заявка отправлена') {
    openModalStart('');
    const closeBtnOk = modalPopup.querySelector('.close-btn');
    closeBtnOk.addEventListener('click', closeModal);
  }
  if (str === 'Ошибка запроса') {
    openModalStart('Ошибка запроса');
  }
};

export default popupThanks;


