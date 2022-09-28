const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

ctx.fillStyle = "blue";
ctx.fillRect(320, 320, 200, 200);
// ctx.clearRect(320, 320, 20, 20)
ctx.strokeRect(100, 100 , 50, 50);

ctx.fillStyle = "rgba(255,0,255,0.1)";
ctx.fillRect(120, 120, 100, 100);


ctx.beginPath(300,300);
ctx.moveTo(300, 400);
ctx.lineTo(400, 400);
ctx.lineTo(400, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 400);
ctx.fill();

ctx.stroke();