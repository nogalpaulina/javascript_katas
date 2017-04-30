document.addEventListener('DOMContentLoaded', function () {
  var isSquareInput = document.getElementById('is_square');
  
  isSquareInput.addEventListener('input', function () {
    document.getElementById('answer').innerHTML = "";
    
    if (isSquareInput.value) {
      isSquareInput.style.borderBottomColor = "#008000";
    } else {
      isSquareInput.style.borderBottomColor = "#000";
    }
  });
  
  document.getElementById('submit').addEventListener('click', function () {
    var number = parseInt(isSquareInput.value);
    
    if (!isNaN(number)) {
      document.getElementById('answer').innerHTML = (Math.sqrt(number) % 1 === 0) ? 'Yes, ' + number + ' is a square number!' : 'No, ' + number + ' isn\'t a square number.';
    }
  });
});