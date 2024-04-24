const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let score =0;
let highScore = localStorage.getItem('highScore') || 0;
const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
      score++;
     document.getElementById('score').textContent = 'Score: ' +score
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.left = `${marioPosition}px`
       
       mario.src ='image/game overl.gif'
       mario.style.width = '112px'
      mario.style.margiLeft ='50px'
     
      clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
