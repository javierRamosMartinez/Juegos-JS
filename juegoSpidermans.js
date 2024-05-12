let cards = [
    {
        id: 1,
        name: "GhosSpider2",
        img: "assets/Spydermans/GhostSpider_02.webp",
    },
    {
        id: 2,
        name: "GhosSpider",
        img: "assets/Spydermans/GhostSpider.webp",
    },
    {
        id: 3,
        name: "SpìderMan",
        img: "assets/Spydermans/SpiderMan.webp",
    },
    {
        id: 4,
        name: "SpiderHam",
        img: "assets/Spydermans/SpiderHam.webp",
    },
    {
        id: 5,
        name: "Spiderwoman",
        img: "assets/Spydermans/SpiderMan2099.webp",
    },
    {
        id: 6,
        name: "SpiderMan2099",
        img: "assets/Spydermans/SpiderWoman.webp",
    },
    {
        id: 7,
        name: "GhosSpider2",
        img: "assets/Spydermans/GhostSpider_02.webp",
    },
    {
        id: 8,
        name: "GhosSpider",
        img: "assets/Spydermans/GhostSpider.webp",
    },
    {
        id: 9,
        name: "SpìderMan",
        img: "assets/Spydermans/SpiderMan.webp",
    },
    {
        id: 10,
        name: "SpiderHam",
        img: "assets/Spydermans/SpiderHam.webp",
    },
    {
        id: 11,
        name: "Spiderwoman",
        img: "assets/Spydermans/SpiderMan2099.webp",
    },
    {
        id: 12,
        name: "SpiderMan2099",
        img: "assets/Spydermans/SpiderWoman.webp",
    },
];

cards.sort(() => 0.5 - Math.random())

const grid$$ = document.querySelector('[data-function="grid"]')
const score$$ = document.querySelector('[data-function="score"]')
const attemps$$ = document.querySelector('[data-function="attempts"]')

let cardChosen = []
let cardsWon = []

crearTablero()
function crearTablero() {
    for (let i = 0; i < cards.length; i++) {
        const cardItem = cards[i];
        const card$$ = document.createElement('img')
        card$$.setAttribute('src', 'assets/Spydermans/dorso.jpg')
        card$$.setAttribute('data-id', cardItem.id)
        grid$$.appendChild(card$$)
        card$$.addEventListener('click', ($event) => flipCard($event.target, i))
    }
}

function flipCard(target$$, i) {
    const cardItem = cards[i]
    const cardWon = cardsWon.find(findCard => findCard.name === cardItem.name)

    if (cardWon == true) {
        alert('Ésta carta ya ha sido emparejada')
    } else {
        cardChosen.push(cardItem)
        target$$.setAttribute('src', cardItem.img)
        if (cardChosen.length === 2) {
            setTimeout(checkcards, 500)
        }
    }
}

function checkcards() {
    const optionOne = cardChosen[0]
    const optionTwo = cardChosen[1]
    const cardOne$$ = document.querySelector('[data-id="' + optionOne.id + '"]')
    const cardTwo$$ = document.querySelector('[data-id="' + optionTwo.id + '"]')

    if (optionOne.id === optionTwo.id) {
        cardOne$$.setAttribute('src', 'assets/Spydermans/dorso.jpg')
        cardTwo$$.setAttribute('src', 'assets/Spydermans/dorso.jpg')
        alert('Has escogido la misma carta dos veces!!')
    } else if (optionOne.name === optionTwo.name && optionOne.id !== optionTwo.id) {
        cardOne$$.removeEventListener('click', flipCard)
        cardTwo$$.removeEventListener('click', flipCard)
        cardsWon.push(optionOne)
    } else {
        cardOne$$.setAttribute('src', 'assets/Spydermans/dorso.jpg')
        cardTwo$$.setAttribute('src', 'assets/Spydermans/dorso.jpg')
    }
    cardChosen = []
    checkScore()
}
function checkScore() {
    score$$.textContent = cardsWon.length
    attemps$$.textContent = Number(attemps$$.textContent) + 1
    if ((cardsWon.length === cards.length / 2)) {
        score$$.textContent = 'Has ganado!!'
    }
}