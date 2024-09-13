const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const drawBall = () => {
    const color = 'green';

    ctx.beginPath();
    ctx.arc(50, 50, 25, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fill();
};

const init = () => {
    drawBall();
};

init();
