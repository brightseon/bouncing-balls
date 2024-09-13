const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const radius = 25;
let x = radius;
let y = radius;
let dx = Math.floor(radius / 2);
let dy = Math.floor(radius / 2);

const drawBall = () => {
    const color = 'green';

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;

    if (x >= canvas.width - radius || x < radius) {
        x = Math.max(0, Math.min(x, canvas.width - radius));
        dx *= -1;
    }

    if (y >= canvas.height - radius || y < radius) {
        y = Math.max(0, Math.min(y, canvas.height - radius));
        dy *= -1;
    }
};

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
};

const init = () => {
    setInterval(draw, 30);
};

init();
