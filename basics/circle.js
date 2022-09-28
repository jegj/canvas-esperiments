const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(200,200, 50,0 , 6*Math.PI);
ctx.stroke();
ctx.fillStyle = 'green';
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.arc(500,500, 100,0 , 3*Math.PI);
ctx.stroke();
ctx.fillStyle = 'purple';
ctx.fill();
ctx.closePath();

