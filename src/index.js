const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomX = () => {
    const min = 0;
    const max = canvas.width;

    return getRandomNumber(min, max);
};

const getRandomY = () => {
    const min = 0;
    const max = canvas.height;

    return getRandomNumber(min, max);
};

const getRandomRadius = () => {
    const min = 10;
    const max = 50;

    return getRandomNumber(min, max);
};

const getRandomVelocity = () => {
    const min = 0.1;
    const max = 1;

    return Math.random() * (max - min) + min;
};

const radius = getRandomRadius();
let x = getRandomX();
let y = getRandomY();
let dx = Math.floor(radius / 2) * getRandomVelocity();
let dy = Math.floor(radius / 2) * getRandomVelocity();

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
