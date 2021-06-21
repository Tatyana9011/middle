// eslint-disable-next-line strict
'use strict';

const openPopupMenu = () => {
  const popupMenu = document.querySelector('.popup-menu');

  const openMenu = () => {
    popupMenu.style.display = 'flex';
    document.addEventListener('keydown', escapeHandler);
  };

  const closePopupMenu = () => {
    popupMenu.style.display = 'none';
    document.removeEventListener('keydown', escapeHandler);
  };

  const escapeHandler = event => {
    if (event.code === 'Escape') {
      closePopupMenu();
    }
  };

  const addCloseModal = () => {
    const modalClose = document.querySelector('.close-menu-btn');

    popupMenu.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('ul')) {
        closePopupMenu();
      }
    });

    modalClose.addEventListener('click', () => {
      closePopupMenu();
    });
  };

  const btnPopup = document.querySelector('.menu-button');
  btnPopup.addEventListener('click', () => {
    openMenu();
    addCloseModal();
  });

  const positionFixed = () => {
    const topMenu = document.querySelector('.top-menu');
    if (document.documentElement.clientWidth <= 768) {
      topMenu.style.cssText = `
      position: fixed !important;
      right: 20px !important;`;
    } else {
      topMenu.style.cssText = `
      position: relative !important;
      z-index: 1 !important;
      `;
    }
  };
  positionFixed();

  window.addEventListener('resize', positionFixed);
};

export default openPopupMenu;
