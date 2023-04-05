const form = document.querySelector('#form_number');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputNumber = document.querySelector('#integer').value;
  const result = document.querySelector('#result');

  result.innerHTML = `<p>O quadrado do numero e: ${inputNumber * inputNumber}</p>`


});