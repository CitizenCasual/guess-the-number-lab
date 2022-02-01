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
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum);//taken from ex. solution
  }, 
  getGuess: function()  {
    let guess;
    do {         // prompts to enter number & sets limits to end game
      guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`))
    } while (guess < this.smallestNum && guess > this.biggestNum); //makes sure num is w/in range
    return guess //while (while) is true, the prompt will play
  },
  render: function() {
    if (this.prevGuesses[this.prevGuesses.length -1] === this.secretNum) {//checks values against secret num
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length}`)
    } else if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum) {
      alert(`Your guess is too high. Previous Guesses: ${this.prevGuesses}`)
    } else if (this.prevGuesses[this.prevGuesses.length -1] < this.secretNum) {
      alert(`Your guess is too low. Previous Guesses: ${this.prevGuesses}`)
    }
},
}

game.play();


