const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "アカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

let interval = setInterval(drawMatrix, 50);

setTimeout(() => {
  clearInterval(interval);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("error").style.display = "block";
}, 4000);

setTimeout(() => {
  document.getElementById("error").style.display = "none";
  document.getElementById("hack").style.display = "block";
}, 7000);

setTimeout(() => {
  document.getElementById("hack").style.display = "none";
  document.getElementById("prank").style.display = "block";
}, 10000);
