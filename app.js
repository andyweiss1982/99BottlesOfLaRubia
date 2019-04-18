const bottles = document.querySelectorAll('.bottle')
const counters = document.querySelectorAll('.count')
const bottleWords = document.querySelectorAll('.bottle-word')
let remainingBottles = 99

function drink(){
  if(confirm('Take one down, pass it around?')){
    this.classList.add('drank')
    remainingBottles --
    counters.forEach(counter => counter.textContent = remainingBottles)
    const word = remainingBottles === 1 ? 'bottle' : 'bottles'
    bottleWords.forEach(bottleWord => bottleWord.textContent = word)
  }
}

bottles.forEach(bottle => bottle.addEventListener('click', drink))
