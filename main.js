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
var userMessage = document.querySelector('#user-input');
var createMessageButton = document.querySelector('#yourMessage');
var affirmationChecked2 = document.getElementById('affirmation2');
var mantraChecked2 = document.getElementById('mantra2');
var homeButton = document.querySelector('#home-button');


recieveMessageButton.addEventListener('click',giveMessage);
clearMessageButton.addEventListener('click', clearMessage);
allMessagesButton.addEventListener('click', changePage);
createMessageButton.addEventListener('click', addYourMessage);
homeButton.addEventListener('click', returnHome);


function giveMessage() {
  if (mantra.checked) {
    message = mantrasList[getRandomIndex(mantrasList)];
    meditationImage.classList.add('hidden');
    meditationContainer.innerHTML = `
    <p>${message}</p>`
  }
  if (affirmation.checked) {
    message = affirmationsList[getRandomIndex(affirmationsList)];
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
  messageListView.classList.add('fade');
  mantrasListTitle.innerHTML = '';
  affirmationsListTitle.innerHTML = '';
  addMantrasList();
  addAffirmationsList();
}

function addAffirmationsList() {
  for (var i = 0; i < affirmationsList.length; i++) {
    affirmationsListTitle.innerHTML += `<li> ${affirmationsList[i]} </li>`
  }
}

function addMantrasList() {
  for (var i = 0; i < mantrasList.length; i++) {
    mantrasListTitle.innerHTML += `<li> ${mantrasList[i]}</li>`
  }
}

function addYourMessage() {
  if (affirmationChecked2.checked && userMessage.value != '') {
    affirmationsList.push(String(userMessage.value));
    mantrasListTitle.innerHTML = '';
    affirmationsListTitle.innerHTML = '';
    addMantrasList();
    addAffirmationsList();
  }
  if (mantraChecked2.checked && userMessage.value != '') {
    mantrasList.push(String(userMessage.value));
    mantrasListTitle.innerHTML = '';
    affirmationsListTitle.innerHTML = '';
    addMantrasList();
    addAffirmationsList();
  }
  if (!mantraChecked2.checked && !affirmation2.checked) {
    alert("Please pick a message type before adding your message!");
  }
  if (userMessage.value === '') {
    alert("Please write a message!")
  }
}

function returnHome() {
  mainPage.classList.remove('hidden');
  messageListView.classList.add('hidden');
  mainPage.classList.add('fade');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
