let tank = document.querySelector(`.tank`);
let soundMove = document.querySelector(`.sound-move`);
let soundStop = document.querySelector(`.sound-stop`);
let w = document.body.clientWidth;
let h = document.body.clientHeight;

soundMove.volume = 0.1;
soundStop.volume = 0.1;

//чтобы танк не уезжал за границы окна при изменении размеров окна
window.addEventListener(`resize`, function(){
    w = document.body.clientWidth;
    h = document.body.clientHeight;
});

document.addEventListener(`keydown`, move);
document.addEventListener(`keyup`, stop);

function stop(ev){
    soundMove.pause();
    soundStop.currentTime = 0; //отмотка звука на начало
    soundStop.play();
}

function move(ev) {

    soundStop.pause();
    soundMove.currentTime = 0; //отмотка звука на начало
    soundMove.play();

    let key = ev.key;
    let x = tank.offsetLeft;
    let y = tank.offsetTop;

    if(key == `ArrowRight`){
        tank.className = `tank`;
        tank.classList.add(`right`);
        if(x < w-150) tank.style.left = x + 10 + `px`;        
    }
    if(key == `ArrowLeft`){
        tank.className = `tank`;
        tank.classList.add(`left`);
        if(x > 0) tank.style.left = x - 10 + `px`;        
    }
    if(key == `ArrowDown`){
        tank.className = `tank`;
        tank.classList.add(`down`);
        if(y < h-150) tank.style.top = y + 10 + `px`;        
    }

    if(key == `ArrowUp`){
        tank.className = `tank`;
        tank.classList.add(`up`);
        if(y > 0) tank.style.top = y - 10 + `px`;        
    }

}