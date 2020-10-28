class TicTacToe {
    constructor() {
        this.winner = null;
        this.currentPlayer = 'X'
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
        let i;
        for (i = 0; i < this.winnerSquels.length; i++) {
            let pos1 = this.winnerSquels[i][0]
            let pos2 = this.winnerSquels[i][1]
            let pos3 = this.winnerSquels[i][2]
            if (this.board[pos1] == this.board[pos2] && this.board[pos2] == this.board[pos3]) {
                this.winner = this.board[pos1]
            }
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

}
