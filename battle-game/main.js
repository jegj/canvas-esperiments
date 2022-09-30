const canvas = document.createElement('canvas');
const grid = 50;
canvas.setAttribute('width', grid* 20);
canvas.setAttribute('height', grid*15);
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');

const players = [
  {
    x: canvas.width/2,
    y: canvas.height/2,
    size: 30,
    speed: 5,
    color: 'red'
  },
  {
    x: canvas.width/2,
    y: canvas.height/2,
    size: 30,
    speed: 5,
    color: 'blue'
  }
];


const game = {
  req: ''
};

const keyz = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
  KeyA: false,
  KeyS: false,
  KeyW: false,
  KeyD: false,
};

document.addEventListener('keydown', (e) => {
  console.log(e);
  if ( e.code in keyz ){
    keyz[e.code]= true;
    console.log(keyz);
  }
});

document.addEventListener('keyup', (e) => {
  if ( e.code in keyz ){
    keyz[e.code]= false;
    console.log(keyz);
  }
});


game.req = requestAnimationFrame(draw);
// canvas.addEventListener('click', () => {
//   player.speed *= -1;
// });

function movementPlayer() {
  if( keyz['ArrowLeft']) {
    players[0].x -= players[0].speed;
  }
  if( keyz['ArrowRight']) {
    players[0].x += players[0].speed;
  }
  if( keyz['ArrowUp']) {
    players[0].y -= players[0].speed;
  }
  if( keyz['ArrowDown']) {
    players[0].y += players[0].speed;
  }
  if( keyz['KeyA']) {
    players[1].x -= players[1].speed;
  }
  if( keyz['KeyD']) {
    players[1].x += players[1].speed;
  }
  if( keyz['KeyS']) {
    players[1].y += players[1].speed;
  }
  if( keyz['KeyW']) {
    players[1].y -= players[1].speed;
  }
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // console.log(player.x);
  movementPlayer();
  players.forEach( player => {
    ctx.beginPath();
    ctx.fillStyle = player.color;
    ctx.arc(player.x, player.y, player.size, 0, Math.PI*2, true);    ctx.fill();
    ctx.fill();
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(player.x, player.y, 5, 5);
  })
  game.req = requestAnimationFrame(draw)
}
