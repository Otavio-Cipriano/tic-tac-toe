class TicTacToe {
    constructor() {
        this.winner = 0;
        this.sequels1 = '';
        this.sequels2 = '';
        this.plays = []
        this.boardHtml = document.querySelector('div[class="board"]')
        this.board = ['', '', '', '', '', '', '', '', '']
        this.winnerSquels = ['012', '345', '678', '036', '147', '358', '048', '246']
        this.p1 = {
            number: 1,
            symbol: 'X'
        };
        this.p2 = {
            number: 2,
            symbol: 'O'
        };
        this.initialize()
    }

    initialize() {
        this.render()
    }
    render() {
        for (let i = 0; i < this.board.length; i++) {
            let square = document.createElement('div')
            square.className = 'square'
            this.boardHtml.appendChild(square)
            square.onclick = () => this.markDown(square, i)
        }
    }
    markDown(html, index) {
        if (!html.innerHTML) {
            if (this.plays.length <= 0 ||
                this.plays[this.plays.length - 1] == this.p2.number) {
                this.plays.push(this.p1.number);
                this.sequels1 += index
                html.innerHTML = this.p1.symbol;
                this.checkWinner(this.sequels1, this.p1.number)
            } else {
                this.plays.push(this.p2.number);
                this.sequels2 += index
                html.innerHTML = this.p2.symbol;
                this.checkWinner(this.sequels2, this.p2.number)
            }
        }
        this.checkDraws()
        console.log(this.plays)
    }
    checkWinner(sequels, player) {
        this.winnerSquels.forEach(sequel => {
            let pos1 = sequel[0]
            let pos2 = sequel[1]
            let pos3 = sequel[2]
            if (sequels.includes(pos1) &&
                sequels.includes(pos2) && sequels.includes(pos3)) {
                console.log('VENCEDOR PLAYER ' + player)
            }
        })
    }
    checkDraws() {
        if (this.plays.length >= 9) {
            console.log('EMPATE')
        }
    }
    restart() {
        let squares = this.boardHtml.querySelectorAll('div[class="square"]')
        squares.forEach(square =>{
            square.innerHTML = null;
        })
    }

}
