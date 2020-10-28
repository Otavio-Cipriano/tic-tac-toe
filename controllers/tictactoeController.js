class TicTacToe {
    constructor() {
        this.winner = null;
        this.position = 0;
        this.currentPlayer = 'X'
        this.lineElement = document.querySelector('div[class="line"]')
        this.boardHtml = document.querySelector('div[class="board"]')
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.winnerSquels = ['012', '345', '678', '036', '147', '358', '048', '246']
        this.initialize()
    }

    initialize() {
        this.render()
    }
    render() {
        for (let i = 0; i < this.board.length; i++) {
            let square = document.createElement('div')
            square.className = 'square'
            square.innerHTML = this.board[i]
            this.boardHtml.appendChild(square)
            square.onclick = () => this.markDown(square, i)
        }
    }

    checkResult() {
        let i = 0;
        while (i < this.winnerSquels.length) {
            let pos1 = this.winnerSquels[i][0]
            let pos2 = this.winnerSquels[i][1]
            let pos3 = this.winnerSquels[i][2]
            if (this.board[pos1] === this.board[pos2]
                && this.board[pos2] === this.board[pos3]
                && this.board[pos3] == this.board[pos1]) {
                this.winner = this.board[pos1]
                this.position = pos1 + pos2 + pos3
            }
            i++
        }
        if (this.winner) {
            alert('Vencedor ' + this.winner)
        }
    }

    async markDown(html, index) {
        if (!html.innerHTML) {
            if (this.currentPlayer == 'X') {
                this.board[index] = this.currentPlayer;
                html.innerHTML = this.currentPlayer;
                this.currentPlayer = 'O';
            } else {
                this.board[index] = this.currentPlayer;
                html.innerHTML = this.currentPlayer;
                this.currentPlayer = 'X';
            }
        }
        setTimeout(() => {
            this.checkResult(this.board)
        }, 1);
    }

    drawLineWhere(position) {
        switch (position) {
            case 012:
                this.lineElement.style
                break;
        
            default:
                break;
        }
    }
    drawLine(){

    }
}
