const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, INR: 74.5, GBP: 0.73, JPY: 110.5 },
    EUR: { USD: 1.18, EUR: 1, INR: 88.0, GBP: 0.86, JPY: 129.5 },
    INR: { USD: 0.013, EUR: 0.011, INR: 1, GBP: 0.0098, JPY: 1.47 },
    GBP: { USD: 1.37, EUR: 1.16, INR: 101.5, GBP: 1, JPY: 150.2 },
    JPY: { USD: 0.009, EUR: 0.0077, INR: 0.68, GBP: 0.0067, JPY: 1 }
};

function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!amount || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerHTML = `
        <p>${amount} ${fromCurrency} = <strong>${convertedAmount} ${toCurrency}</strong></p>
    `;
}


setInterval(() => {
    for (const currency in exchangeRates) {
        for (const target in exchangeRates[currency]) {
            const randomFluctuation = (Math.random() * 0.1 - 0.05).toFixed(4); // ±5% fluctuation
            exchangeRates[currency][target] = (
                exchangeRates[currency][target] * (1 + parseFloat(randomFluctuation))
            ).toFixed(4);
        }
    }
}, 5000);


function animateBackground() {
    const canvas = document.getElementById('ringCanvas');
    const ctx = canvas.getContext('2d');
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;

    const objects = Array(30).fill().map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 40 + 10,
        color: `hsl(${Math.random() * 360}, 70%, 70%)`,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, w, h);
        objects.forEach(obj => {
            ctx.beginPath();
            ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
            ctx.fillStyle = obj.color;
            ctx.fill();
            obj.x += obj.speedX;
            obj.y += obj.speedY;
            if (obj.x - obj.radius < 0 || obj.x + obj.radius > w) obj.speedX *= -1;
            if (obj.y - obj.radius < 0 || obj.y + obj.radius > h) obj.speedY *= -1;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

window.onload = animateBackground;
