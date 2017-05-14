 document.addEventListener('DOMContentLoaded', function() {
   var middleCharInput = document.getElementById('word');
   
   middleCharInput.addEventListener('input', function () {
    document.getElementById('result').innerHTML = "";
    
    if (middleCharInput.value) {
      middleCharInput.style.borderBottomColor = "#008000";
    } else {
      middleCharInput.style.borderBottomColor = "#000";
    }
  });
  
   
    document.getElementById('submit').addEventListener('click', function() {
      var word = document.getElementById('word').value;
      var middleIndex = Math.floor(word.length / 2);
      document.getElementById('result').innerHTML = (word.length % 2 === 0 ? ('The two middle characters are "' + word.substring(middleIndex - 1, middleIndex + 1) + '".') : ( 'The middle character is "' + word[middleIndex] + '".'));
    });
  });