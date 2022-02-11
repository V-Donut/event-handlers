'use strict';

const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const range = document.getElementById('range');
const circle = document.getElementById('circle');
const eBtn = document.getElementById('e_btn');

btn.addEventListener('click', function () {
  let color = input.value;
  square.style.backgroundColor = color;
});

eBtn.style.display = 'none';

range.addEventListener('input', function (event) {
  let percentage = event.target.value;
  circle.style.height = percentage + '%';
  circle.style.width = percentage + '%';
});
