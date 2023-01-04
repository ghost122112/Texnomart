let slider = document.getElementById("cost-range");
let output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


let rangeInputs = document.querySelectorAll('input[type="range"]');
let numberInput = document.querySelector('input[type="number"]');

const handleInputChange = (e) => {
  let target = e.target;

  if (e.target.type !== 'range') {
    target = document.getElementById('range');
  }

  let min = target.min;
  let max = target.max;
  let val = target.value;
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';

}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
});

numberInput.addEventListener('input', handleInputChange);



