let slider = document.getElementById("cost-range");
let output = document.getElementById("output");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}