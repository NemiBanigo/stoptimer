// const startButton = document.querySelector('[data-action=start]');
// const pauseButton= document.querySelector('[data-action=pause]');
// const resetButton = document.querySelector('[data-action=reset]');
// const minutes = document.querySelector('.minutes');
// const seconds = document.querySelector('.seconds');

let countdown;


function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
   
   countdown = setInterval(()=>{
       const secondsLeft = Math.round((then - Date.now())/1000);

        if (secondsLeft < 0){
            clearInterval(countdown);
            return;
        }
    displayTimeLeft(secondsLeft);   
    },1000);
    
}
function displayTimeLeft(seconds){
    const numOfminutes = Math.floor(seconds/60);
    const numOfseconds = seconds % 60;
    seconds.innerText = numOfminutes;
   console.log(numOfminutes);
}


