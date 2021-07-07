// eslint-disable-next-line strict
'use strict';

const addStatus = (form, status, color) => {
  let message = '';
  let style = '';

  style = document.createElement('style');
  message = document.createElement('div');

  style.innerHTML = `
      .preloader{
      width: 100%;
      height: 1px;
      text-align: center;
      color: ${color};
      margin: 5px 0;
      }
    `;

  document.head.append(style);

  message.innerHTML = `<div class="preloader">${status}</div>`;
  if (!document.querySelector('.preloader')) {
    form.insertAdjacentHTML(`beforeend`, message.outerHTML);
  }

  const loaderHtml = document.querySelector('.preloader');

  if (loaderHtml) {
    form.addEventListener('change', () => {
      message.innerHTML = '';
      style.innerHTML = '';
      loaderHtml.remove();
    });

    setTimeout(() => {
      message.innerHTML = '';
      style.innerHTML = '';
      loaderHtml.remove();
    }, 6000);
  }
};

export default addStatus;


