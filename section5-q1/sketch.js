// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(200,0,200);
  rect(0, 25, w + p * 2+20, h + p * 2+25);
  fill(0,0,0);
  text(t, p, h + p+30);
  fill(0,230,0)
  triangle(w + p * 2+20, 25, w + p * 2+20,h + p * 2+50,w + p * 2+20+100,h + p * 2+50);

}
