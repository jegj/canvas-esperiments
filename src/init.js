const config = {
  width: 320,
  height: 180,
  parent: 'container',
  type: Phaser.AUTO,
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

function preload(){
  console.log('preload')
  this.load.image
}

function create(){
  console.log('create')
}

function update(){
  console.log('update')
}