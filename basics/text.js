const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const str = "Hello world"

ctx.font = 'italic 50px Comic';
ctx.fillStyle = 'red';
ctx.fillText(str, 100, 100)
