// eslint-disable-next-line strict
'use strict';
const calc = () => {
  const cardOrder = document.getElementById('card_order'),
    priceTotal = document.querySelector('#price-total');

  const mozaika = {
    1: 1990,
    6: 9900,
    9: 13900,
    12: 19900
  };
  const schelkovo = {
    1: 2999,
    6: 14990,
    9: 21990,
    12: 24990
  };

  if (priceTotal) {
    const clubName = cardOrder.querySelectorAll('input[name="club-name"]'),
      timeBlock = document.querySelector('.time'),
      month = timeBlock.querySelectorAll('input'),
      inputCod = document.querySelector('input[placeholder="Промокод"]');

    const calcResult = (time, club) => {
      let x = '';
      if (club === 'mozaika') {
        x = mozaika[time];
      }
      if (club === 'schelkovo') {
        x = schelkovo[time];
      }
      priceTotal.textContent = x;
      if (inputCod.value === 'ТЕЛО2020') {
        priceTotal.textContent = x - (x * 0.3);
      }
    };

    const getValue = () => {
      let checkedInput = 1;
      let clubNameValue = 'mozaika';

      month.forEach(item => {
        if (item.checked) {
          checkedInput = item.value;
        }
      });

      clubName.forEach(item => {
        if (item.checked) {
          clubNameValue = item.value;
        }
      });
      calcResult(checkedInput, clubNameValue);
    };

    cardOrder.addEventListener('change', event => {
      const target = event.target;
      if (target.matches('input[name="card-type"]') ||
        target.matches('input[name="club-name"]') ||
        target.matches('input[placeholder="Промокод"]')) {
        getValue();
      }
    });

  }



  /* const enumNumbers = total => {
  let count = 0;
  const totalEnd = 200;
  let idInterval;
  const flyAnimate = () => {
    idInterval = requestAnimationFrame(flyAnimate);
    if (totalEnd > count && total > count) {
      count += 10;
      totalValue.textContent = '';
      totalValue.textContent += `${count}`;
    } else {
      cancelAnimationFrame(idInterval);
      totalValue.textContent = total;
    }
  };
  let animate;
  if (!animate) {
    idInterval = requestAnimationFrame(flyAnimate);
    animate = true;
  } else {
    animate = false;
    cancelAnimationFrame(idInterval);
  }
};

const countSum = () => {
  let total = 0,
    countValue = 1,
    dayValue = 1;

  const typeValue = calcType.options[calcType.selectedIndex].value,
    squareValue = +calcSquare.value;

  if (calcCount.value > 1) {
    countValue += (calcCount.value - 1) / 10;
  }

  if (calcDay.value && calcDay.value < 5) {
    dayValue *= 2;
  } else if (calcDay.value && calcDay.value < 10) {
    dayValue *= 1.5;
  } else {
    dayValue *= 1;
  }
  //что бы пока не ввели значение пользователю высвечивался 0
  if (typeValue && squareValue) {
    total = price * typeValue * squareValue * countValue * dayValue;
  }
  if (total) {
    enumNumbers(Math.floor(total));
    totalValue.textContent += `${Math.floor(total)}`;
  }
};

calcBlock.addEventListener('input', event => {
  const target = event.target;
  if (target.matches('select') || target.matches('input')) {
    countSum();
  }
}); */
};

export default calc;
