// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]

  if(count < 50 ) {
    ellipse(width / 2, height / 2, count);
    fill(255,0,0);
  }
  else if(count=>50){
  ellipse(width / 2, height / 2, 100-count);
  fill(0,255,0)
  }
  if(keyIsDown(LEFT_ARROW)){ width -= 2; }
 if(keyIsDown(RIGHT_ARROW)){ width+= 2; }
if(keyIsDown(UP_ARROW)){count=count+1}
if(keyIsDown(DOWN_ARROW)){count=count-1/2}
  }
