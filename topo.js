const casillas$$ = document.querySelectorAll('[data-function="square"]')
const timeLeft$$ = document.querySelector('[data-function="time-left"]')
let score$$ = document.querySelector('[data-function="score"]')

let result = 0
let hitPosition = null

addSquaresListener()

const randomSquareInterval = setInterval(changeDigglet, 500)
const timerInterval = setInterval(timer, 1000)

function changeDigglet() {

    for (const casilla$$ of casillas$$) {
        casilla$$.classList.remove('b-mole')
    }
    const randomNumber = Math.floor(Math.random() * 9)
    let randomPosition = casillas$$[randomNumber]
    randomPosition.classList.add('b-mole')
    hitPosition = randomPosition
}

function addSquaresListener() {
    for (const casilla$$ of casillas$$) {
        casilla$$.addEventListener('click', () => {
            if (casilla$$ == hitPosition) {
                result += 1
                score$$.textContent = result
                hitPosition = null
            }
        })
    }
}

function timer() {
    const time = timeLeft$$.textContent - 1
    timeLeft$$.textContent = time

    if (time === 0) {
        clearInterval(randomSquareInterval)
        clearInterval(timerInterval)
        alert('Your final score is ' + result)
    }

}