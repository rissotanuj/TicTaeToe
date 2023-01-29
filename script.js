let turn = "X";
let music = new Audio("music.mp3");
let musicGover = new Audio("ting.mp3");
let isGameOver = false;
let musicGame = new Audio("gameover.mp3");

checkWin = ()=> {
        let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    let boxtext  = document.getElementsByClassName("boxtext");
    wins.forEach((element)=>{
        if((boxtext[element[0]].innerText===boxtext[element[1]].innerText)&&(boxtext[element[0]].innerText===boxtext[element[2]].innerText)&&(boxtext[element[0]].innerText!=="")){
            document.querySelector('.gameInfo').innerText = boxtext[element[0]].innerText + " Won the Game";
            isGameOver = true;
            music.pause();
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "200px";
            musicGover.play();
        }
    })
}

// Changing the Turn Function
changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

// Reset logic 
let reset = document.getElementById("btn");

reset.addEventListener('click',() =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.getElementsByClassName("gameInfo")[0].innerText = "Turn for " + turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px";
})

// Logic for game 'This will increase my javascript understanding....
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
            element.addEventListener('click',()=>{
            //  music.play();
            musicGame.play();
            element.querySelector('.boxtext').innerHTML = turn;
            turn = changeTurn();
            checkWin();
            if(!isGameOver){
             document.getElementsByClassName("gameInfo")[0].innerText = "Turn for " + turn;
       
            }
            })
})
