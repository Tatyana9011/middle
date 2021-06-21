// eslint-disable-next-line strict
'use strict';

const validateTel = tel => {
  const str = tel.value.length;
  if (str === 18) {
    return false;
  } else {
    return true;
  }
};

export default validateTel;
