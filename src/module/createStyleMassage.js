// eslint-disable-next-line strict
'use strict';

const styleMessage = (style, str) => {

  const status = document.createElement('div');
  if (style === 'error') {
    status.style.cssText = `
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: red;
    justify-content: center;
    `;
  } else {
    status.style.cssText = `
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: green;
    justify-content: center;
    `;
  }
  status.textContent = str;

  return status;
};

export default styleMessage;
