var affirmationChecked = document.getElementById('affirmation');
var mantraChecked = document.getElementById('mantra');
var recieveMessageButton = document.querySelector('#recieve-message-button');
var meditationImage = document.querySelector('svg');
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
    paragraph.innerHTML = `
    <p>${message}</p>`
  }
  if (affirmation.checked) {
    message = affirmations[getRandomIndex(affirmations)];
    meditationImage.classList.add('hidden');
    paragraph.innerHTML = `
    <p>${message}</p>`
  }
}

function clearMessage() {
  if (meditationImage.classList.contains('hidden')) {
    meditationImage.classList.remove('hidden');
    meditationImage.classList.add('visible');
    document.querySelector('p').innerHTML = '';
  }
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
