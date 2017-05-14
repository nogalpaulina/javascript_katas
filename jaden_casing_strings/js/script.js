document.addEventListener('DOMContentLoaded', function() {
  var jadenInput = document.getElementById('sentence');
  jadenInput.addEventListener('input', function () {
  document.getElementById('result').innerHTML = "";
    
  if (jadenInput.value) {
    jadenInput.style.borderBottomColor = "#008000";
  } else {
    jadenInput.style.borderBottomColor = "#000";
  }
});
  
  document.getElementById('submit').addEventListener('click', function() {
  var sentence = document.getElementById('sentence').value;
   if (isNaN(sentence)) {
     document.getElementById('result').innerHTML = "This is how it looks capitalized: " + sentence.split(" ").map(word => word[0].toUpperCase() + word.substring(1, word.length)).join(" ");
   } else {
     document.getElementById('result').innerHTML = "It can't be a number...";
   }
  });
});