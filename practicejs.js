
var textIndex = 0;
var buttonTexts = ['Ohh myyy', 'Nyuuu', 'roses are red, skies are blue','Cos of time?','Sorry, there is yes', 'Yes'];

function onNoButtonClick() {
  var yesButton = document.getElementById("yesButton");
  var currentSize = window.getComputedStyle(yesButton).fontSize;
  var newSize = parseInt(currentSize) + 10 + "px";
  yesButton.style.fontSize = newSize;

  yesButton.innerHTML = buttonTexts[textIndex];

  textIndex = (textIndex + 1) % buttonTexts.length;
}

function onYesButtonClick() {
  var yesButton = document.getElementById("yesButton");
  var mybtn2 = document.getElementById("mybtn2");

  if(yesButton) {
    yesButton.remove();
  }

  if(mybtn2) {
    mybtn2.remove();
  }

  if(myText) {
  myText.innerHTML = 'Let\'s go out then';
  }
}

