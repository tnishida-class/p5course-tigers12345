// 最終課題を制作しよう




let tris;

function setup(){
  createCanvas(windowWidth, windowHeight);
  tris = [];
}

function draw(){
  background(0, 0, 0);
  for(let i = 0; i < tris.length; i++){
    let r = tris[i];
    triangle(r.x, r.y, r.x*1.3,r.y*1.3,r.x+100,r.y+100);
    r.x += r.vx;
    r.y += r.vy;
    for(let m=0; m<255; m++)
    fill(random(m),random(m),random(m));
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 2){
    const r = { x: mouseX, y: mouseY, vx: dx, vy: dy };
    tris.push(r);

  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
