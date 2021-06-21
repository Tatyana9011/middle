// eslint-disable-next-line strict
'use strict';

const validationAllInput = form => {
  const nameInputs = form.querySelectorAll('input[name="name"]'),
    allInputs = form.querySelectorAll('input');

  allInputs.forEach(elem => {
    elem.removeAttribute('required');
  });

  const validateName = (elem, event) => {
    if (elem.getAttribute('placeholder') !== 'Промокод') {
      elem.value = event.target.value.replace(/[^а-яё ]/ig, '');
    }
  };

  const itemPush = arr => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "") {
        newArr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
      }
    }
    return newArr;
  };

  const blurValidateName = (elem, target) => {
    const getValue = target.value.trim().replace(/\s{2,}/, ' ').replace(/^[ |-]/, '')
      .replace(/[-]{2,}/, '-').split(" ");
    elem.value = itemPush(getValue).join(' ');
  };

  nameInputs.forEach(item => item.addEventListener('input', validateName.bind(this, item)));
  allInputs.forEach(input => {
    input.addEventListener('blur', event => {
      event.preventDefault();

      const target = event.target;
      if (target.matches('input[name="name"]') && target.getAttribute('placeholder') !== 'Промокод') {
        blurValidateName(input, target);
      }
    });
  });
};

export default validationAllInput;
