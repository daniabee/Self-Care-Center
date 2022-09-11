//Page views
var mainPage = document.querySelector('#main-page-view');
var messageListView = document.querySelector('#message-view');
var messageForm = document.querySelector('.inputs-main');

//Buttons
var recieveMessageButton = document.querySelector('#recieve-message-button');
var clearMessageButton = document.querySelector('#clear-button');
var allMessagesButton = document.querySelector('#all-messages');
var createMessageButton = document.querySelector('#yourMessage');
var homeButton = document.querySelector('#home-button');
var removeMessageButton = document.querySelector('#removeMessage');
var addMessageMainPageButton = document.querySelector('#add-message-here');
var submitButton = document.querySelector('#submit');
var addMessageSecondButton = document.querySelector('#addMessage-button');

//main page container and logo
var meditationImage = document.querySelector('#svg');
var meditationContainer = document.querySelector('#meditate-container');
var messageParagraph = document.querySelector('#message');

//affirmation and mantra lists
var affirmationsListTitle = document.querySelector('#affirmations-list');
var mantrasListTitle = document.querySelector('#mantras-list');
var message = ''
var affirmationChecked = document.getElementById('affirmation');
var mantraChecked = document.getElementById('mantra');

//user message input
var affirmationChecked2 = document.getElementById('affirmation2');
var mantraChecked2 = document.getElementById('mantra2');
var userMessage = document.querySelector('#user-input1');
var userInput = document.querySelector('#user-input2');

//Event listeners
recieveMessageButton.addEventListener('click', giveRandomMessage);
clearMessageButton.addEventListener('click', clearMessage);
allMessagesButton.addEventListener('click', changePage);
homeButton.addEventListener('click', returnHome);
removeMessageButton.addEventListener('click',removeSpecificMessage);
removeMessageButton.addEventListener('dblclick', removeLastMessage);
addMessageMainPageButton.addEventListener('click', seeMessageForm);
submitButton.addEventListener('click', addYourMessage);
addMessageSecondButton.addEventListener('click', secondPageAddMessage);

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

function resetPage() {
  mantrasListTitle.innerHTML = '';
  affirmationsListTitle.innerHTML = '';
  addMantrasList();
  addAffirmationsList();
}

function resetForm() {
  makeHidden(messageForm);
  makeVisible(messageParagraph);
  userMessage.value = '';
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

function changePage() {
  resetPage();
  makeHidden(mainPage);
  makeVisible(messageListView);
  fade(messageListView);
}

function giveRandomMessage() {
  if (mantraChecked.checked) {
    message = mantrasList[getRandomIndex(mantrasList)];
    makeHidden(meditationImage);
    makeVisible(messageParagraph);
    makeHidden(messageForm);
    messageParagraph.innerText = `${message}`;
  }
  if (affirmationChecked.checked) {
    message = affirmationsList[getRandomIndex(affirmationsList)];
    makeHidden(meditationImage);
    makeVisible(messageParagraph);
    makeHidden(messageForm);
    messageParagraph.innerText = `${message}`;
  }
   if (!mantraChecked.checked && !affirmationChecked.checked) {
    alert("Please pick a message type!");
  }
}

function clearMessage() {
  if (meditationImage.classList.contains('hidden')) {
    makeVisible(meditationImage);
    makeHidden(messageForm);
    makeHidden(messageParagraph);
  }
}

function seeMessageForm() {
  makeHidden(meditationImage);
  makeVisible(messageForm);
  makeHidden(messageParagraph);
}

function addYourMessage() {
  var userMessage = document.querySelector('#user-input1');

  if (affirmationChecked.checked && userMessage.value != '') {
    affirmationsList.push(userMessage.value);
    messageParagraph.innerText = `${userMessage.value}`;
    resetForm();
  }
  if (mantraChecked.checked && userMessage.value != '') {
    mantrasList.push(userMessage.value);
    messageParagraph.innerText = `${userMessage.value}`;
    resetForm();
  }
  if (!mantraChecked.checked && !affirmationChecked.checked) {
    alert("Please pick a message type before adding your message!");
  }
}

function secondPageAddMessage() {
  if (affirmationChecked2.checked && userInput.value != '') {
    affirmationsList.push(userInput.value);
  }
  if (mantraChecked2.checked && userInput.value != '') {
    mantrasList.push(userInput.value);
  }
  if (!mantraChecked2.checked && !affirmationChecked2.checked) {
    alert("Please pick a message type before adding your message!");
  }
  resetPage();
}

function removeSpecificMessage() {
  for (var i = 0; i < affirmationsList.length; i++) {
    if (userInput.value === affirmationsList[i] ){
      affirmationsList.splice(i,1);
    }
  }
  for (var i = 0; i < mantrasList.length; i++) {
    if (userInput.value === mantrasList[i]) {
      mantrasList.splice(i,1);
    }
  }
  resetPage();
  userInput.value = '';
}

function removeLastMessage() {
  if (affirmationChecked2.checked) {
    affirmationsList.splice(affirmationsList.length-1, 1);
  }
  if (mantraChecked2.checked) {
    mantrasList.splice(mantrasList.length-1, 1);
  }
  if (!mantraChecked2.checked && !affirmationChecked2.checked) {
    alert("Please choose which list you would like a message removed from!");
  }
  resetPage();
}

function returnHome() {
  makeVisible(mainPage);
  makeHidden(messageListView);
  fade(mainPage);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
