// const startButton = document.querySelector('.button');
let startButton = document.getElementById("button-input");
const pauseButton= document.querySelector('[data-action=pause]');
const resetButton = document.querySelector('[data-action=reset]');
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');

let timerTime = document.querySelector('.input').value;
let dataInput = document.querySelector('.input').value;



function Timer(){
    setInterval(function(){
    timerTime--;
    console.count("please stop acting up");
    const numOfseconds = Math.floor(timerTime%60);
    const numOfminutes = Math.floor(timerTime/60);

    seconds.innerText = numOfseconds;
    minutes.innerText = numOfminutes;
   
    if (numOfminutes && numOfseconds < 0 ){
        numOfminutes, numOfseconds = 0;
    }
}, 1000);
}


// console.log(dataInput);

function startTimer(){
    Timer();    

}
// startTimer();
//add event listeners
startButton.addEventListener("onclick", Timer() );
// pauseButton.addEventListener('click', pauseTimer );
// resetButton.addEventListener('click', resetTimer);