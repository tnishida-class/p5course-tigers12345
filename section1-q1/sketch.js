// 練習問題：神戸市のマーク
function setup(){
  createCanvas(500, 500);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(22,131,46);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);

  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
strokeWeight(15);
stroke(14,47,146);
  arc(320,150,100,100,QUARTER_PI * 6, QUARTER_PI * 8 + PI);
  strokeWeight(15);
  stroke(22,131,46);
    arc(315,150,80,80,QUARTER_PI * 4, QUARTER_PI * 5 + PI);
    strokeWeight(25);
    strokeCap(SQUARE);
    stroke(196,0,0);
    arc(280, 160, 20, 10, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
    arc(280, 160, 20, 10, QUARTER_PI * 3, QUARTER_PI * 3 + PI);

    fill(blue);
    noStroke();
    ellipse(300,100,100,100);
    fill(255);
    ellipse(293,93,80,80);
    fill(green);
    ellipse(291.93,75,75);
      fill(255);
    ellipse(289,93,70,70);



}
