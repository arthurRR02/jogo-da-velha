var player, winner = null
var selectedPlayer = document.getElementById("selected-player")
var winnerPlayer = document.getElementById("winner-player")
var squares = document.getElementsByClassName("square")
var button = document.getElementById("btn-restart")
var scoreXText = document.getElementById("x-score")
var scoreXCounter = 0
var scoreOText = document.getElementById("o-score")
var scoreOCounter = 0

const INITIAL_PLAYER = "X"

changePlayer(INITIAL_PLAYER)
scoreXText.innerHTML = scoreXCounter
scoreOText.innerHTML = scoreOCounter

function chooseSquare(id){
    if(winner !== null){
        return
    }
    var square = document.getElementById(id)

    if(square.innerHTML !== "-"){
        return
    }

    square.innerHTML = player
    square.style.color = "#000"

    if(player === INITIAL_PLAYER){
        player = "O"
    } else{
        player = INITIAL_PLAYER
    }

    changePlayer(player)
    verifyWinner()
}

function changePlayer(value){
    player = value
    selectedPlayer.innerHTML = player
}

function verifyWinner(){
    if(checkSequency(squares[0], squares[1], squares[2])){
        changeSquareColor(squares[0], squares[1], squares[2])
        changeWinner(squares[0])
    }

    if(checkSequency(squares[3], squares[4], squares[5])){
        changeSquareColor(squares[3], squares[4], squares[5])
        changeWinner(squares[3])
    }

    if(checkSequency(squares[6], squares[7], squares[8])){
        changeSquareColor(squares[6], squares[7], squares[8])
        changeWinner(squares[6])
    }

    if(checkSequency(squares[0], squares[4], squares[8])){
        changeSquareColor(squares[0], squares[4], squares[8])
        changeWinner(squares[0])
    }

    if(checkSequency(squares[0], squares[3], squares[6])){
        changeSquareColor(squares[0], squares[3], squares[6])
        changeWinner(squares[0])
    }

    if(checkSequency(squares[1], squares[4], squares[7])){
        changeSquareColor(squares[1], squares[4], squares[7])
        changeWinner(squares[1])
    }

    if(checkSequency(squares[2], squares[5], squares[8])){
        changeSquareColor(squares[2], squares[5], squares[8])
        changeWinner(squares[2])
    }

    if(checkSequency(squares[2], squares[4], squares[6])){
        changeSquareColor(squares[2], squares[4], squares[6])
        changeWinner(squares[2])
    }
}

function checkSequency(squareOne, squareTwo, squareThree){
    var equal = false
    
    if(squareOne.innerHTML !== "-" && squareOne.innerHTML === squareTwo.innerHTML && squareTwo.innerHTML === squareThree.innerHTML){
        equal = true
    }

    return equal
}

function changeSquareColor(squareOne, squareTwo, squareThree){
    squareOne.style.background = "#0f0"
    squareTwo.style.background = "#0f0"
    squareThree.style.background = "#0f0"
}

function changeWinner(square){
    winner = square.innerHTML
    winnerPlayer.innerHTML = winner 

    if(winner === INITIAL_PLAYER){
        scoreXCounter++
        scoreXText.innerHTML = scoreXCounter
    } else {
        scoreOCounter++
        scoreOText.innerHTML = scoreOCounter
    }
}

function restart(){
    winner = null
    winnerPlayer.innerHTML = ""

    for(var i = 0; i <= 9; i++){
        squares[i].innerHTML = "-"
        squares[i].style.background = "#eee"
        squares[i].style.color = "#eee"
    }

    changePlayer(INITIAL_PLAYER)
}

button.addEventListener("click", restart)

