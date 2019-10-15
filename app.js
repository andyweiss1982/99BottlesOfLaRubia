const bottles = document.querySelectorAll('.bottle')
const counters = document.querySelectorAll('.count')
const bottleWords = document.querySelectorAll('.bottle-word')

function count(){
  const remainingBottles = document.querySelectorAll('.bottle:not(.drank)').length
  counters.forEach(counter => counter.textContent = remainingBottles)
  const word = remainingBottles === 1 ? 'bottle' : 'bottles'
  bottleWords.forEach(bottleWord => bottleWord.textContent = word)
}

function drink(){
  if(confirm('Take one down, pass it around?')){
    this.classList.add('drank')
    count()
  }
}

bottles.forEach(bottle => bottle.addEventListener('click', drink))

count()
