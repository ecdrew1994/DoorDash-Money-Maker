document.querySelector(`.payButton`).addEventListener(`click`, function () {
  const miles = document.querySelector(`.miles`).value;

  const pay = document.querySelector(`.pay`).value;

  let total = pay / miles;

  if (miles < 6 && pay > 6) {
    document.querySelector(
      `.resultText`
    ).textContent = `I, Mr. Money Maker, declare that you SHOULD take this job! You will make $${total.toFixed(
      2
    )} per mile on this job!`;
  } else {
    document.querySelector(
      `.resultText`
    ).textContent = `I, Mr. Money Maker, declare that you SHOULD NOT take this job! You will make too little!`;
  }
});
