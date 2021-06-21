// eslint-disable-next-line strict
'use strict';
import addStatus from './addStatus';
import validateTel from './validationTel';

const validationData = form => {
  const inputName = form.querySelector('input[placeholder="Ваше имя..."]');
  if (inputName) {
    if (inputName.value === '') {
      addStatus(form, 'Введите свое имя', 'red');
      return;
    }
  }

  const formTel = form.querySelector('input[name="phone"]');
  if (formTel) {
    if (validateTel(formTel)) {
      addStatus(form, 'Не верно введен номер телефона', 'red');
      return;
    }
  }

  const checkbox = form.querySelector("input[type='checkbox']");
  if (checkbox) {
    if (!checkbox.checked) {
      addStatus(form, 'Согласитесь на обработку своих персональных данных', 'red');
      return;
    }
  }
  return true;
};

export default validationData;
