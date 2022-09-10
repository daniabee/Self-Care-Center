//Page views
var mainPage = document.querySelector('#main-page-view');
var messageListView = document.querySelector('#message-view');

//Buttons
var recieveMessageButton = document.querySelector('#recieve-message-button');
var clearMessageButton = document.querySelector('#clear-button');
var allMessagesButton = document.querySelector('#all-messages');
var createMessageButton = document.querySelector('#yourMessage');
var homeButton = document.querySelector('#home-button');
var removeMessageButton = document.querySelector('#removeMessage');

//main page container and logo
var meditationImage = document.querySelector('#svg');
var meditationContainer = document.querySelector('#meditate-container');

//affirmation and mantra lists
var affirmationsListTitle = document.querySelector('#affirmations-list');
var mantrasListTitle = document.querySelector('#mantras-list');

//user message input
var affirmationChecked2 = document.getElementById('affirmation2');
var mantraChecked2 = document.getElementById('mantra2');
var userMessage = document.querySelector('#user-input');


//Event listeners
recieveMessageButton.addEventListener('click', giveMessage);
clearMessageButton.addEventListener('click', clearMessage);
allMessagesButton.addEventListener('click', changePage);
createMessageButton.addEventListener('click', addYourMessage);
homeButton.addEventListener('click', returnHome);
removeMessageButton.addEventListener('click',removeSpecificMessage);
removeMessageButton.addEventListener('dblclick', removeLastMessage);

//functions
function makeHidden(hide) {
  hide.classList.add('hidden');
}

function makeVisible(visible) {
  visible.classList.remove('hidden')
}

function fade(fadeElement) {
  fadeElement.classList.add('fade');
}

function giveMessage() {
  var message = ''
  var affirmationChecked = document.getElementById('affirmation');
  var mantraChecked = document.getElementById('mantra');

  if (mantra.checked) {
    message = mantrasList[getRandomIndex(mantrasList)];
    makeHidden(meditationImage);
    meditationContainer.innerHTML = `
    <p>${message}</p>`
  }
  if (affirmation.checked) {
    message = affirmationsList[getRandomIndex(affirmationsList)];
    makeHidden(meditationImage);
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
    makeVisible(meditationImage);
  }
}

function changePage() {
  mantrasListTitle.innerHTML = '';
  affirmationsListTitle.innerHTML = '';

  makeHidden(mainPage);
  makeVisible(messageListView);
  fade(messageListView);
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
    affirmationsList.push(userMessage.value);
    mantrasListTitle.innerHTML = '';
    affirmationsListTitle.innerHTML = '';
    addMantrasList();
    addAffirmationsList();
  }
  if (mantraChecked2.checked && userMessage.value != '') {
    mantrasList.push(userMessage.value);
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
  userMessage.value = '';
}

function returnHome() {
  makeVisible(mainPage);
  makeHidden(messageListView);
  fade(mainPage);
}

function removeSpecificMessage() {
  for (var i = 0; i < affirmationsList.length; i++) {
    if (userMessage.value === affirmationsList[i] ){
      affirmationsList.splice(i,1);
    }
  }
  for (var i = 0; i < mantrasList.length; i++) {
    if (userMessage.value === mantrasList[i]) {
      mantrasList.splice(i,1);
    }
  }
  mantrasListTitle.innerHTML = '';
  affirmationsListTitle.innerHTML = '';
  addMantrasList();
  addAffirmationsList();
  userMessage.value = '';
}

function removeLastMessage() {
  if (affirmationChecked2.checked) {
    affirmationsList.splice(affirmationsList.length-1, 1);
  }
  if (mantraChecked2.checked) {
    mantrasList.splice(mantrasList.length-1, 1);
  }
  if (!mantraChecked2.checked && !affirmationChecked2.checked) {
    alert("Please choose which list you would like a message removed from!")
  }
  mantrasListTitle.innerHTML = '';
  affirmationsListTitle.innerHTML = '';
  addMantrasList();
  addAffirmationsList();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
