document.addEventListener('DOMContentLoaded', function() {
  
  var highestNumInput = document.getElementById('number');
  
  highestNumInput.addEventListener('input', function () {
    document.getElementById('answer').innerHTML = "";
    
    if (highestNumInput.value) {
      highestNumInput.style.borderBottomColor = "#008000";
    } else {
      highestNumInput.style.borderBottomColor = "#000";
    }
  });
  
  document.getElementById('submit').addEventListener('click', function() {
    var number = parseInt(document.getElementById('number').value);
    
    if(!isNaN(number)) {
      document.getElementById('answer').innerHTML =  'The highest possible number is ' + parseInt(number.toString().split('').sort().reverse().join('')) + '.';
    }
  });
});