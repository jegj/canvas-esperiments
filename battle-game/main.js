const canvas = document.createElement('canvas');
const grid = 50;
canvas.setAttribute('width', grid* 20);
canvas.setAttribute('height', grid*15);
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');

const players = [
  {
    x: canvas.width/2 + (grid*2),
    y: canvas.height/2,
    size: grid/2+5,
    speed: grid/8,
    color: 'red',
    cooldown: 0,
    score: 0,
    pos: canvas.width / 2 + canvas.width/4
  },
  {
    x: canvas.width/2 - (grid*2),
    y: canvas.height/2,
    size: grid/2+5,
    speed: grid/8,
    color: 'blue',
    cooldown: 0,
    score: 0,
    pos: canvas.width/4
  }
];

const game = {
  req: '',
  bullets: [],
  bulletSpeed: grid/10
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
  // console.log(e);
  if ( e.code in keyz ){
    keyz[e.code]= true;
    // console.log(keyz);
  }

  if(e.code == 'Space' && players[0].cooldown <= 0) {
    players[0].cooldown = 10;
    game.bullets.push(
      {
        x: players[0].x - 40,
        y: players[0].y,
        speed: -game.bulletSpeed,
        size: grid/8,
        color: 'green'
      }
    )
  }
});

document.addEventListener('keyup', (e) => {
  if ( e.code in keyz ){
    keyz[e.code]= false;
    // console.log(keyz);
  }
});

game.req = requestAnimationFrame(draw);

function movementPlayer() {
  if( keyz['ArrowLeft'] && players[0].x > canvas.width/2 + players[0].size) {
    players[0].x -= players[0].speed;
  }
  if( keyz['ArrowRight'] && players[0].x < canvas.width - players[0].size) {
    players[0].x += players[0].speed;
  }
  if( keyz['ArrowUp'] && players[0].y > 0 + players[0].size ){
    players[0].y -= players[0].speed;
  }
  if( keyz['ArrowDown'] && players[0].y < canvas.height - players[0].size ) {
    players[0].y += players[0].speed;
  }
  if( keyz['KeyA'] && players[1].x > 0 + players[1].size) {
    players[1].x -= players[1].speed;
  }
  if( keyz['KeyD'] && players[1].x < canvas.width/2 - players[1].size) {
    players[1].x += players[1].speed;
  }
  if( keyz['KeyS'] & players[1].y < canvas.height - players[1].size ) {
    players[1].y += players[1].speed;
  }
  if( keyz['KeyW'] && players[1].y > 0 + players[1].size) {
    players[1].y -= players[1].speed;
  }
}

function colDetection(obj1, obj2){
  // FIXME: Collision detection between circle and rectangle
  return obj1.x <= obj2.x + obj2.size &&
         obj1.x + obj1.size >= obj2.x &&
         obj1.y <= obj2.y + obj2.size &&
         obj1.y + obj1.size*2 >= obj2.y;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // console.log(player.x);
  movementPlayer();

  game.bullets.forEach((bull, index) => {
    ctx.fillStyle = bull.color;
    ctx.fillRect(bull.x, bull.y, bull.size, bull.size);
    bull.x +=bull.speed;
    // remove bullet when is outside the screen
    if ( bull.x<0) {
      game.bullets.splice(index, 1);
    }

    players.forEach((player, pindex)=>{
      if ( colDetection(bull, player) ) {
        console.log('hit', pindex);
        if (pindex === 0) players[1].score++;
        else if(pindex === 1) players[0].score ++;
        game.bullets.splice(index, 1);
      }
    })
  });
  //line
  ctx.beginPath()
  ctx.moveTo(canvas.width/2, 0);
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();
  ctx.closePath();
  players.forEach( player => {
    if ( player.cooldown > 0 ) {
      player.cooldown --;
    }

    ctx.font = `${Math.ceil(grid/2)+5}px serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = player.color;
    ctx.fillText(`Score: ${player.score}`, player.pos, 50);

    ctx.beginPath();
    ctx.fillStyle = player.color;
    ctx.arc(player.x, player.y, player.size, 0, Math.PI*2, true);    ctx.fill();
    ctx.fill();
  })
  game.req = requestAnimationFrame(draw)
}
