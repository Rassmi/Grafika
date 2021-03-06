var ctx    = canvas.getContext('2d');
var width  = canvas.width; // size
var center = width/2;      // center

let iterations = 0;

function draw(read) {
	iterations = read;
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.resetTransform();
    ctx.clearRect(0, 0, 500, 500);
    // Draw border
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(500, 0);
    ctx.lineTo(500, 500);
    ctx.lineTo(0, 500);
    ctx.closePath();
    ctx.stroke();
    // step = 5
    drawF(iterations);
  }
}
 // Recursive draw
  function drawF(step) {
    if (step > 0) {
      step--;
      if (step == iterations - 1) ctx.fillStyle = "magenta";
      ctx.save();
      if (step == iterations - 1) ctx.fillStyle = "green";
      ctx.save();
      if (step == iterations - 1) ctx.fillStyle = "blue";
      ctx.save();
      if (step == iterations - 1) ctx.fillStyle = "red";

      ctx.transform(-0.5, 0, 0, -0.5, 250, 250);
      drawF(step);
      ctx.restore();
      ctx.transform(0.5, 0, 0, 0.5, 250, 0);
      drawF(step);
      ctx.restore();
      ctx.transform(0, 0.5, 0.5, 0, 250, 250);
      drawF(step);
      ctx.restore();
      ctx.transform(0, 0.25, 0.25, 0, 125, 375);
      drawF(step);
    } else drawT();
  }

  function drawT() {
    ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(500,0);
		ctx.lineTo(500,500);
		ctx.lineTo(125,500);
		ctx.lineTo(125,375);
		ctx.lineTo(250,375);
		ctx.lineTo(250,250);
		ctx.lineTo(0,250);
    ctx.fill();
  }
const step = 0.01;
function animate1() {
  let t = 0;
  ctx.resetTransform();

  function animation()
  {
    requestAnimationFrame(animation);
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      ctx.save();
      ctx.fillStyle = "red";
      ctx.clearRect(0, 0, 500, 500);
	  
	  ctx.beginPath();
	  ctx.moveTo(0, 0);
	  ctx.lineTo(500, 0);
	  ctx.lineTo(500, 500);
	  ctx.lineTo(0, 500);
      ctx.closePath();
	  ctx.stroke();
	  
	  ctx.translate((1 - t) * 0 + 250 * t, (1 - t) * 0 + 250 * t)
	  ctx.scale((1 - t) * 1 + 0.5 * t, (1 - t) * 1 +  0.5 * t);
	  ctx.rotate((1 - t) * 0 + t * -Math.PI);
	  
      drawF(0);
      ctx.restore();

      if (t < 1) {
        t += step;
      }
    }
  }
  animation();
}
function animate2() {
  let t = 0;
  ctx.resetTransform();

  function animation()
  {
    requestAnimationFrame(animation);
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      ctx.save();
      ctx.fillStyle = "blue";
      ctx.clearRect(0, 0, 500, 500);
	  
	  ctx.beginPath();
	  ctx.moveTo(0, 0);
	  ctx.lineTo(500, 0);
	  ctx.lineTo(500, 500);
	  ctx.lineTo(0, 500);
      ctx.closePath();
	  ctx.stroke();

	  ctx.translate((1 - t) * 0 + 250 * t, (1 - t) * 0 + 0 * t)
	  ctx.scale((1 - t) * 1 + 0.5 * t, (1 - t) * 1 + 0.5 * t);
	  
      drawF(0);
      ctx.restore();

      if (t < 1) {
        t += step;
      }
    }
  }
  animation();
}
function animate3() {
  let t = 0;
  ctx.resetTransform();

  function animation()
  {
    requestAnimationFrame(animation);
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      ctx.save();
      ctx.fillStyle = "green";
      ctx.clearRect(0, 0, 500, 500);
	  
	  ctx.beginPath();
	  ctx.moveTo(0, 0);
	  ctx.lineTo(500, 0);
	  ctx.lineTo(500, 500);
	  ctx.lineTo(0, 500);
      ctx.closePath();
	  ctx.stroke();
	  

      ctx.translate((1 - t) * 0 + 250 * t, (1 - t) * 0 + 250 * t)
      ctx.rotate((1 - t) * 0 + t * -Math.PI/2);
      ctx.scale((1 - t) * 1 + -0.5 * t, (1 - t) * 1 + 0.5 * t);
      drawF(0);
	  
      ctx.restore();

      if (t < 1) {
        t += step;
      }
    }
  }
  animation();
}
function animate4() {
  let t = 0;
  ctx.resetTransform();

  function animation()
  {
    requestAnimationFrame(animation);
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      ctx.save();
      ctx.fillStyle = "magenta";
      ctx.clearRect(0, 0, 500, 500);    
	  
	  ctx.beginPath();
	  ctx.moveTo(0, 0);
	  ctx.lineTo(500, 0);
	  ctx.lineTo(500, 500);
	  ctx.lineTo(0, 500);
      ctx.closePath();
	  ctx.stroke();

      ctx.translate((1 - t) * 0 + 125 * t, (1 - t) * 0 + 375 * t)
      ctx.rotate((1 - t) * 0 + t * -Math.PI/2);
      ctx.scale((1 - t) * 1 + -0.25 * t, (1 - t) * 1 + 0.25 * t);

      drawF(0);
      ctx.restore();

      if (t < 1) {
        t += step;
      }
    }
  }
  animation();
}
