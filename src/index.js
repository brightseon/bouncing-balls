const BALL_COLORS = {
    RED: '#E74C3C',
    ORANGE_LIGHT: '#F39C12',
    YELLOW: '#F1C40F',
    GREEN_LIGHT: '#2ECC71',
    GREEN_DARK: '#1F8A70',
    BLUE_LIGHT: '#3498DB',
    PURPLE: '#9B59B6',
    ORANGE: '#E67E22',
    GRAY_LIGHT: '#ECF0F1',
    GRAY_MID: '#95A5A6',
    ORANGE_BRIGHT: '#D35400',
    GRAY_LIGHTER: '#BDC3C7',
    GRAY_DARK: '#7F8C8D',
    RED_DARK: '#C0392B',
    TEAL: '#16A085',
};

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

const getRandomColor = () => {
    const idx = getRandomNumber(0, Object.keys(BALL_COLORS).length);

    return Object.values(BALL_COLORS)[idx];
};

const radius = getRandomRadius();
let x = getRandomX();
let y = getRandomY();
let dx = Math.floor(radius / 2) * getRandomVelocity();
let dy = Math.floor(radius / 2) * getRandomVelocity();
const color = getRandomColor();

const drawBall = () => {
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
