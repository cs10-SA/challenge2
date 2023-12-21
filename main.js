// Cahllenge2
// setupcanvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;
// global variables
let mouseX, mouseY;
let rect = {
  x: 150,
  y: 300,
  w: 100,
  h: 50,
  speed: 5,
  color: "blue",
};
let circ = {
  x: 360,
  y: 320,
  radius: 40,
  speed: 5,
  color: "orange",
};
// draw red rect
ctx.fillStyle = "red";
ctx.fillRect(150, 100, 100, 50);
ctx.fill();
// draw green circle

// drawFunct
window.addEventListener("load", draw);
function draw() {
  if (mouseX >= 150 && mouseX <= 250 && mouseY <= 200 && mouseY >= 150) {
    document.body.style.backgroundColor = "red";
  } else if (Math.sqrt((mouseX - 360) ** 2 + (mouseY - 170) ** 2) < 40) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "white";
  }

  // moving blue rect
  if (
    mouseX >= rect.x &&
    mouseX <= rect.x + rect.w &&
    mouseY <= rect.y + rect.h &&
    mouseY >= rect.y
  ) {
    document.body.style.backgroundColor = "blue";
    rect.x = Math.random() * 600 < 600 && Math.random() * 600;
    rect.y = Math.random() * 400 && Math.random() * 400;
    rect.w = Math.random() * 200 > 0 && Math.random() * 200;
    rect.h = Math.random() * 200 > 0 && Math.random() * 200;
  }
  // moving yellow circle
  if (
    Math.sqrt((mouseX - circ.x) ** 2 + (mouseY - circ.y) ** 2) < circ.radius
  ) {
    document.body.style.backgroundColor = "orange";
    circ.x = Math.random() * 600 < 600 && Math.random() * 600;
    circ.y = Math.random() * 400 && Math.random() * 400;
    circ.radius = Math.random() * 100 > 0 && Math.random() * 100;
  }
  //   Draw a background
  ctx.fillStyle = "white ";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // draw green circle
  ctx.fillStyle = "green";
  ctx.arc(360, 170, 40, 0, 2 * Math.PI);
  ctx.fill();

  // draw red rect
  ctx.fillStyle = "red";
  ctx.fillRect(150, 150, 100, 50);

  // draw a blue rectangle
  ctx.fillStyle = rect.color;
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h);

  // draw yellow circle
  ctx.fillStyle = circ.color;
  ctx.beginPath();
  ctx.arc(circ.x, circ.y, circ.radius, 0, 2 * Math.PI);
  ctx.fill();
  // draw red rect
  ctx.fillStyle = "red";
  ctx.fillRect(150, 150, 100, 50);

  // loop
  requestAnimationFrame(draw);
}
document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(event) {
  console.log(event);

  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
