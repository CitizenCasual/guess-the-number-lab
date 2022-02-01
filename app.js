const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [], 
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.prevGuesses.push(this.getGuess()) //calls on getGuess method & pushes into arr.
      this.render()         // line 13. takes the last element in the prevGuesses array and makes sure the player hasn't won yet. when player wins, loop ends.
    } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum);//taken from example solution. Also this logic is what I used for the if statements I used below. 
  }, 
  getGuess: function()  {
    let guess;
    do {         // prompts to enter number & sets limits to end game
      guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`)) 
    } while (guess < this.smallestNum && guess > this.biggestNum); //makes sure num is w/in range
    return guess //while the (while) statement above is true, the prompt will play. The loop will end when it returns falsey
  },
  render: function() {  // used a else if statement to see if values are falsey before they move on.
    if (this.prevGuesses[this.prevGuesses.length -1] === this.secretNum) {//checks values against secret num. Alerts the win.
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length}`)
    } else if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum) { //checks if guess is  too large. Alerts if it is.
      alert(`Your guess is too high. Previous Guesses: ${this.prevGuesses}`)
    } else if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum) { //checks if guess is too small. Alerts if it is. 
      alert(`Your guess is too low. Previous Guesses: ${this.prevGuesses}`)  
    }
},
}

game.play();  //invokes play func. to automatically load on page load. 


