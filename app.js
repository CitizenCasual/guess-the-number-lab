const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [], 
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    while (getGuess()) {
      prevGuesses.push(this.guess)
    }
  }, 
  getGuess()  {
    let guess;
    do {
      guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`))
    } while (guess >= this.smallestNum && guess <= this.biggestNum);
  },
}



