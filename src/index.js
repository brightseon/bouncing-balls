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
const BALL_COUNT = 50;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const balls = [];

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

const getRandomMovement = (radius) => {
    return Math.floor(radius / 2) * getRandomVelocity();
};

class Ball {
    constructor({ x, y, radius, dx, dy, color }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        this.update();
    };

    update = () => {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x >= canvas.width - this.radius || this.x < this.radius) {
            this.x = Math.max(0, Math.min(this.x, canvas.width - this.radius));
            this.dx *= -1;
        }

        if (this.y >= canvas.height - this.radius || this.y < this.radius) {
            this.y = Math.max(0, Math.min(this.y, canvas.height - this.radius));
            this.dy *= -1;
        }
    };
}

const initBalls = () => {
    for (let i = 0; i < BALL_COUNT; i++) {
        const x = getRandomX();
        const y = getRandomY();
        const radius = getRandomRadius();
        const dx = getRandomMovement(radius);
        const dy = getRandomMovement(radius);
        const color = getRandomColor();
        const ball = new Ball({ x, y, radius, dx, dy, color });

        balls.push(ball);
    }
};

const drawBalls = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach((ball) => ball.draw());
};

const init = () => {
    initBalls();
    setInterval(drawBalls, 30);
};

init();
