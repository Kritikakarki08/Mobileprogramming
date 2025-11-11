
function toggleContainer1() {
  const text = document.getElementById("toggleText1");
  const button = event.target;
}

function showCalculations() {
  let kritika = 5;
  let karki = 6;
  const sum = kritika + karki;
  const difference = kritika - karki;
  const product = kritika * karki;
  const quotient = kritika / karki;
  const result = document.getElementById("sumResult");
  result.textContent = `
    The sum of ${kritika} + ${karki} is ${sum}.
    The difference of ${kritika} - ${karki} is ${difference}.
    The product of ${kritika} × ${karki} is ${product}.
    The quotient of ${kritika} ÷ ${karki} is ${quotient.toFixed(2)}.
  `;
}
