const canvas = document.getElementById("dotBackground");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = [];

function createDots() {
    for (let i = 0; i < 60; i++) {
        dots.push({
            x: Math.random() * canvas.width * 1.2 - canvas.width * 0.1,
           y: Math.random() * canvas.height, 
            radius: Math.random() * 0.5 + 0.54, 
            speed: (Math.random() * 0.7 + 0.6) * 0.5, 
            color:
                Math.random() < 0.9
                    ? "rgba(0, 0, 0, 1)"
                    : "rgba(128,128,128,0.95)",
            drift: Math.random() * 0.6 - 0.4, 
        });
    }
}

function drawDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();

        dot.y -= dot.speed;
        dot.x += dot.drift;

        if (dot.y < 0) {
            dot.y = canvas.height + Math.random() * 50; 
            dot.x = Math.random() * canvas.width * 1.2 - canvas.width * 0.1;
        }
    }
}

function animate() {
    drawDots();
    requestAnimationFrame(animate);
}

createDots();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
