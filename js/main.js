window.addEventListener('load', init);

//Global vars to use in functions
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'cat',
    'dog',
    'couch',
    'pillow',
    'aardvark',
    'blanket',
    'elemental',
    'toyota',
    'slipper',
    'pizza',
    'construction',
    'silly',
    'telephone',
    'butts',
    'rocker',
    'philosophy',
    'application',
    'javascript',
    'document',
    'bilbo',
    'shire',
    'gandalf',
    'church',
    'beatle',
    'theatre',
    'mother',
    'car',
    'bible',
    'list',
    'bootstrap',
    'word',
    'bunch',
    'slytherin',
    'harry',
    'bolts',
    'conductor',
    'espresso',
    'italy',
    'greek',
    'dungeon',
    'catapult',
    'corona',
    'seedless',
    'environment',
    'abraham',
    'catastrophic',
    'again',
    'supercalophragalisticexpealidotious',
    'yes',
    'nutrition'
];

// Initialize Game
function init() {
    // Load word from array
    showWord(words);
    //call countdown every second aka 1000 milsec
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);
}

//pick and show random word
function showWord(words) {
    //generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
    //make sure time does not runout
    if(time > 0) {
        //decrement
        time--;
    } else if (time === 0) {
        // game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'u L0sE!';
    }
}