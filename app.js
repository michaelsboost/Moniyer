// variables
var num, sum, commas;

// update calculation upon input change
function calculate(val) {
  num = val;
  
  // how many hours are in a year? 8766
  sum = parseFloat(num / 8766).toFixed(2);
  commas = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  hourly.textContent = '$' + commas
  
  // how many days are in a year? 365.25
  sum = parseFloat(num / 365.25).toFixed(2);
  commas = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  daily.textContent = '$' + commas
  
  // how many weeks are in a year? 52.17857
  sum = parseFloat(num / 52.17857).toFixed(2);
  commas = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  weekly.textContent = '$' + commas
  
  // how many months are in a year? 12
  sum = parseFloat(num / 12).toFixed(2);
  commas = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  monthly.textContent = '$' + commas
  
  // how many quarters are in a year? 4
  sum = parseFloat(num / 4).toFixed(2);
  commas = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  quarterly.textContent = '$' + commas
  
  // how many semi-annuallies are in a year? 2
  sum = parseFloat(num / 2).toFixed(2);
  commas = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  semiannually.textContent = '$' + commas
}

input.onkeyup = function() {
  calculate(this.value)
}
calculate(input.value)