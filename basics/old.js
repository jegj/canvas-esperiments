
function drawPath() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(canvas.width/2, canvas.height/2, 5, 5);
  ctx.fillRect(100, 100, 5, 5);
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, canvas.height/2);
  ctx.lineTo(100, 100);
  ctx.lineTo(100, 300);
  ctx.lineTo(canvas.width/2, canvas.height/2);
  ctx.stroke();
  ctx.fillRect(100, 300, 5, 5);
  ctx.fillStyle = 'purple';
  ctx.fill();
}

function drawCircle() {
  ctx.beginPath();
  ctx.fillStyle ='yellow';
  ctx.arc(300, 100, 80, 0, Math.PI*2, true)
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle ='black';
  // ctx.moveTo(300, 70);
  ctx.arc(260, 80, 20, 0, Math.PI*2, true)
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle ='black';
  // ctx.moveTo(300, 70);
  ctx.arc(340, 80, 20, 0, Math.PI*2, true)
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle ='black';
  // ctx.moveTo(300, 70);
  ctx.arc(300, 120, 50, 0, Math.PI, false)
  ctx.fill();
  ctx.closePath();

}

function draw() {
  ctx.strokeRect(150, 150, 50, 30);
}