var affirmationChecked = document.getElementById('affirmation');
var mantraChecked = document.getElementById('mantra');
var recieveMessageButton = document.querySelector('#recieve-message-button');
var meditationImage = document.querySelector('#svg');
var meditationContainer = document.querySelector('#meditate-container');
var clearMessageButton = document.querySelector('#clear-button');
var message = ''
var paragraph = document.querySelector('#paragraph');
var allMessagesButton = document.querySelector('#all-messages');
var mainPage = document.querySelector('#main-page-view');
var messageListView = document.querySelector('#message-view');
var affirmationsListTitle = document.querySelector('#affirmations-list');
var mantrasListTitle = document.querySelector('#mantras-list');

recieveMessageButton.addEventListener('click',giveMessage);
clearMessageButton.addEventListener('click', clearMessage);
allMessagesButton.addEventListener('click', changePage);


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
    <img class = "fade" id= "svg" src = "meditate.svg" alt="My Happy SVG"/>`;
    meditationImage.classList.remove('hidden');
  }
}

function changePage() {
  mainPage.classList.add('hidden');
  messageListView.classList.remove('hidden');
  addMantrasList();
  addAffirmationsList();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function addAffirmationsList() {
  for (var i = 0; i < affirmationsList.length; i++) {
    affirmationsListTitle.innerHTML += `<li> ${affirmationsList[i]} </li>`
    console.log('affirmations', affirmationsList[i])
  }
}

function addMantrasList() {
  for (var i = 0; i < mantrasList.length; i++) {
    mantrasListTitle.innerHTML += `<li> ${mantrasList[i]}</li>`
    console.log('mantras', mantrasList[i]);
  }
}
