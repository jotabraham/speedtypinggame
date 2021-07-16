window.addEventListener('load', init);

//Global vars to use in functions

//available levels (this is an object)
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

//to change level (calling obj above^)
const currentLevel =levels.easy;

let time = currentLevel;
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
    'subscribed',
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
    'sophisticated',
    'yes',
    'nutrition',
    'glacier',
    'wolf',
    'planet',
    'river',
    'brooklyn',
    'preview',
    'gift',
    'animation',
    'bowl',
    'dagger',
    'unpopular',
    'announcement',
    'mandate',
    'witness',
    'horrible',
    'county',
    'apparently',
    'gargantuan'
];

// Initialize Game
function init() {
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    //start matching word input
    wordInput.addEventListener('input', startMatch);
    //call countdown every second aka 1000 milsec
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50);
}

//start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    //if score -1 display 0
    if (score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

//match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
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
        message.innerHTML = 'Sorry! Game over.';
        score = -1;
    }
}