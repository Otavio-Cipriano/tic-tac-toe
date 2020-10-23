let squares = document.querySelectorAll('div[class*="square"]')

const p1 = {
    number: 1,
    symbol: 'X'
};
const p2 = {
    number: 2,
    symbol: 'O'
};

let plays = []
let p1homes = []
let p2homes = []
let winner = 0;

squares.forEach(square => {
    square.addEventListener('click', event => {
        let append = document.createElement('span')
        let home = square.classList
        if (!square.querySelector('span')) {
            if (plays.length == 0) {
                currentPlayer = p1.number;
                plays.push(p1.number);
                p1homes.push(home[1].substr(5))
                append.innerText = p1.symbol;
                square.appendChild(append)

            } else {
                if (plays[plays.length - 1] == p1.number) {
                    currentPlayer = p2.number;
                    plays.push(p2.number);
                    p2homes.push(home[1].substr(5))
                    append.innerText = p2.symbol;
                    square.appendChild(append)
                } else {
                    currentPlayer = p1.number;
                    plays.push(p1.number);
                    p1homes.push(home[1].substr(5))
                    append.innerText = p1.symbol;
                    square.appendChild(append)
                }
            }
        }
        this.findWinner(p1homes, p1.number);
        this.findWinner(p2homes, p2.number);
    })
})


function findWinner(array, nr) {
    if (array.includes('1') && array.includes('2') && array.includes('3')) {
        winner == nr;
        console.log(`VENCEDOR PLAYER ${nr}`)
    }
    else if (array.includes('4') && array.includes('5') && array.includes('6')) {
        winner == nr;
        console.log(`VENCEDOR PLAYER ${nr}`)
    }
    else if (array.includes('7') && array.includes('8') && array.includes('9')) {
        winner == nr;
        console.log(`VENCEDOR PLAYER ${nr}`)
    }
    else if (array.includes('1') && array.includes('4') && array.includes('7')) {
        winner == nr;
        console.log(`VENCEDOR PLAYER ${nr}`)
    }
    else if (array.includes('2') && array.includes('5') && array.includes('8')) {
        winner == nr;
        console.log(`VENCEDOR PLAYER ${nr}`)
    }
    else if (array.includes('3') && array.includes('6') && array.includes('9')) {
        winner == nr;
        console.log(`VENCEDOR PLAYER ${nr}`)
    }
    else if (array.includes('1') && array.includes('5') && array.includes('9')) {
        winner == nr;
        console.log(`VENCEDOR PLAYER ${nr}`)
    }
    else if (array.includes('3') && array.includes('5') && array.includes('7')) {
        winner == nr;
        console.log(`VENCEDOR PLAYER ${nr}`)
    }
}
