const tableBoard$$ = document.querySelector('[data-function="board"]')
const attemps$$ = document.querySelector('[data-function="attempts"]')
const imgXUrl = 'assets/buscaTesoros/x.png'
const imgChestUrl = 'assets/buscaTesoros/chest.png'
const imgSkullUrl = 'assets/buscaTesoros/skull.png'

let coordenadas = { x: 0, y: 0 }
let gameOver = false



function drawBoard() {
    gameOver = false
    const rows = prompt('Introduce número de filas:')
    const columns = prompt('Introduce el número de columnas:')

    colocarCofre(rows, columns)

    for (let i = 0; i < rows; i++) {

        const tr$$ = document.createElement('tr')

        for (let j = 0; j < columns; j++) {

            const td$$ = document.createElement('td')
            const img$$ = document.createElement('img')
            img$$.setAttribute('src', imgXUrl)

            td$$.addEventListener('click', function () {
                check(img$$, i, j)
            })

            td$$.appendChild(img$$)
            tr$$.appendChild(td$$)

        }

        tableBoard$$.appendChild(tr$$)

    }


}


function check(img$$, i, j) {

    if (gameOver == false) {
        attemps$$.textContent = Number(attemps$$.textContent) + 1

        if (coordenadas.x == i && coordenadas.y == j) {
            img$$.setAttribute('src', imgChestUrl)
            setTimeout(() => {
                alert('Yow win!')
                gameOver = true
            })

        } else {
            img$$.setAttribute('src', imgSkullUrl)
        }
    }

}

function colocarCofre(maxRows, maxColumns) {
    coordenadas.x = Math.floor(Math.random() * maxRows)
    coordenadas.y = Math.floor(Math.random() * maxColumns)
}


drawBoard();