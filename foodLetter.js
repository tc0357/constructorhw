var Letter = function(letter) {
    // property to store the actual letter
      this.letter = letter;
    // property/boolean if the letter can be shown
      this.appear = false;
    
      this.letterRender = function() {
        if(this.letter == ' '){
          this.appear = true;
          return '  ';
        }if(this.appear === false){ 
          return ' _ ';
        } else{ 
          return this.letter;
        }
    
      };
    };
    
   
    module.exports = Letter;
