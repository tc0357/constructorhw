var inquirer = require('inquirer');
var isLetter = require('is-letter');

var Word = require('./foodword.js');
var Game = require('./randomFood.js');


//set the maxListener
require('events').EventEmitter.prototype._maxListeners = 100;


var hangman = {
  wordBank: Game.newFood.foodList,
  guessesRemaining: 10,
  //empty array to hold letters guessed by user. And checks if the user guessed the letter already
  guessedLetters: [],
  display: 0,
  currentWord: null,
  //asks user if they are ready to play
  startGame: function() {
    var that = this;
    //clears guessedLetters before a new game starts if it's not already empty.
    if(this.guessedLetters.length > 0){
      this.guessedLetters = [];
    }

    inquirer.prompt([{
      message: "Ready to play?"
    }])
  }}

hangman.startGame();
