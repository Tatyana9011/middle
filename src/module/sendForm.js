// eslint-disable-next-line strict
'use strict';
import popupThanks from './popupThanks';
import addStatus from './addStatus';
import validationData from './validationData';
import createInput from './createInput';
const sendForm = () => {

  const forms = document.querySelectorAll('form');
  const preloder = './preloader.svg';

  const fetchData = event => {
    event.preventDefault();
    const form = event.target;
    const emailInput = createInput();
    form.insertAdjacentHTML('afterend', emailInput);
    const formData = new FormData(form);
    const body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    const postData = data => fetch('mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const outputData = () => {
      const loaderHtml = document.querySelector('.preloader');
      loaderHtml.remove();
      addStatus(form, 'Заявка отправлена', 'green');
      popupThanks('Заявка отправлена');
      form.reset();
    };

    const error = () => {
      const loaderHtml = document.querySelector('.preloader');
      loaderHtml.remove();
      addStatus(form, 'Ошибка запроса', 'red');
      popupThanks('Ошибка запроса');
      form.reset();
    };

    //после нажатия отправить форма отчищается, а модальные окна закрываются через 3 сек
    const resultEnd = () => {
      form.reset();

      setTimeout(() => {
        const loaderHtml = document.querySelector('.preloader');
        loaderHtml.remove();

        const modal = form.closest('.popup');
        if (modal) {
          modal.style.display = 'none';
        }
      }, 3000);
    };

    if (validationData(form)) {
      addStatus(form, `<img width='40px' alt='preloder' src=${preloder}>`, 'green');

      postData(body)
        .then(response => {
          if (response.status !== 200) {
            throw 'error !!! ';
          }
          outputData();
        })
        .catch(error)
        .then(resultEnd);
    }
  };

  forms.forEach(form => {
    form.addEventListener('submit', fetchData);
  });

};
export default sendForm;
