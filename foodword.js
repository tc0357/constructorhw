// require letter objects
var Letter = require('./foodLetter.js');

function Word(word) {
  var that = this;
  this.word = word;
  //object constructor keyword 'letters' is empty array, need to push
  this.letters = [];
  //need to set
  this.guessRight = false;

  this.grabLetter = function() {
    //populate the collection above with new Letter objects
    for(var i = 0; i < that.word.length; i++){
      var newLetter = new Letter(that.word[i]);
      this.letters.push(newLetter);
    }
  };

  this.wordMatch = function() {
    if(this.letters.every(function(ltr){
      return ltr.appear === true;
    })){
      this.wordFound = true;
      return true;
    }

  };

  this.letterMatch = function(guessedLetter) {
    var whatToReturn = 0;
    //iterates through each letter to see if it matches the guessed letter
    this.letters.forEach(function(ltr){
      if(ltr.letter === guessedLetter){
        ltr.appear = true;
        whatToReturn++;
      }
    })
    //if guessLetter matches Letter property, the letter object should be shown
    return whatToReturn;
  };

  this.wordGrab = function() {
    var display = '';
    //render the word based on if letters are found or not
    that.letters.forEach(function(ltr){
      var currentLetter = ltr.grabLetter();
      display+= currentLetter;
    });

    return display;
  };
}

module.exports = Word;
