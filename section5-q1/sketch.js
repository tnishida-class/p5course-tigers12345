// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
}
function draw(){
  background(255);
  balloon("I love keyakizaka46",mouseX,mouseY);
}

function balloon(t,x,y){
push()
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(200,0,200);
  rect(x, y, w + p * 2+20, h + p * 2+25);
  fill(0,0,0);
  text(t, x+p, y+h + p);
  fill(0,230,0)
  triangle(x, y, x,y+10,x-10,y+10);
pop();
}
