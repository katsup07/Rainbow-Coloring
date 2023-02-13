const eraseBtn = document.querySelector('.erase');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#000000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;
let direction = true;

let isDrawing = false;
let lastX = 0;//starting point for line
let lastY = 0;
let hue = 0;

function draw(e) {
  if (isDrawing) {
    console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);//start point of line
    ctx.lineTo(e.offsetX, e.offsetY);//end point of line
    ctx.stroke();//make line
    console.log('lastX: ' + lastX);
    [lastX, lastY] = [e.offsetX, e.offsetY]; //Updates constantly while holding mousedown.
    hue++;

    /* if(direction){//plus direction
      ctx.lineWidth++;
    }
    else{
      ctx.lineWidth--;//minus direction
    }
   
    if(ctx.lineWidth>50){//change to minus direction which will count back from 50
      direction = false;
    }
    else if(ctx.lineWidth<5){//change to plus direction which will count on from 5
      direction = true;
   
    } */


    console.log(ctx.lineWidth);
  }

}
canvas.addEventListener('mousedown', (e) => {

  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; //only updates when event is fired.
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
eraseBtn.addEventListener('click', () => ctx.clearRect(0, 0, 1100, 500));
//canvas.addEventListener('click');