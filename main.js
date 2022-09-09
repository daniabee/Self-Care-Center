var affirmationChecked = document.getElementById('affirmation');
var mantraChecked = document.getElementById('mantra');
var recieveMessageButton = document.querySelector('#recieve-message-button');
var meditationImage = document.querySelector('#svg');
var meditationContainer = document.querySelector('#meditate-container');
var clearMessageButton = document.querySelector('#clear-button');
var message = ''
var paragraph = document.querySelector('#paragraph');

recieveMessageButton.addEventListener('click',giveMessage);
clearMessageButton.addEventListener('click', clearMessage);



function giveMessage() {
  if (mantra.checked) {
    message = mantras[getRandomIndex(mantras)];
    meditationImage.classList.add('hidden');
    meditationContainer.innerHTML = `
    <p>${message}</p>`
  }
  if (affirmation.checked) {
    message = affirmations[getRandomIndex(affirmations)];
    meditationImage.classList.add('hidden');
    meditationContainer.innerHTML = `
    <p>${message}</p>`
  }
   if (!mantra.checked && !affirmation.checked) {
    alert("Please pick a message type!");
  }
}

function clearMessage() {
  if (meditationImage.classList.contains('hidden')) {
    meditationContainer.innerHTML = `
    <img id= "svg" src = "meditate.svg" alt="My Happy SVG"/>`;
  }
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
