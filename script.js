console.log("Welcome to Tic Tac Toe")

let turn = 'X';
let isGameover = false;
//function for change turn
const changeTurn = ()=>{
    return turn==='X'?'0':'X';
}

//function to check the win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText!==''){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won';
            isGameover = true;
        }
    })
}

//Game Logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            console.log(turn,isGameover)
            if(!isGameover){
                // console.log('inside gameober')
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

