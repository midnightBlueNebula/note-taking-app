var note = document.querySelector("#note-page");

var canvas = document.querySelector("#drawing");
var ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var startX;
var startY;


function correctMouseCoord(x, y){
  return [x - canvas.getBoundingClientRect().left, 
          y - canvas.getBoundingClientRect().top];
}

const drawing = (event) => {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000080';
  
  const [destinationX, destinationY] = correctMouseCoord(event.clientX, event.clientY);
  
  ctx.moveTo(startX, startY);
  ctx.lineTo(destinationX, destinationY);
  
  [startX, startY] = [destinationX, destinationY];
  
  ctx.stroke();
}


const mouseDownOnNotePage = (event) => {
  [startX, startY] = correctMouseCoord(event.clientX, event.clientY);
  
  note.addEventListener("mousemove", drawing);
}


const mouseUpOnNotePage = () => {
  note.removeEventListener("mousemove", drawing);
}


const mouseNotOnPage = () => {
  note.removeEventListener("mousemove", drawing);
}


note.addEventListener("mousedown", mouseDownOnNotePage);
note.addEventListener("mouseup", mouseUpOnNotePage);
note.addEventListener("mouseleave", mouseNotOnPage);