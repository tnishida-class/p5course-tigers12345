// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  // noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
if ((i+j) % 2==0) {
  noFill();
}
else{
  fill(100,100,100);
}
      rect(size*i,size*j,size,size);


      if ((i+j)%2==0){
        noStroke()

      }
      else if (j<=2) {
        fill(255,0,0);

      }


      else if (5<=j){
        fill(0,0,0);


      }
      else  if(2<=j<=5){
        noStroke();
      }
      ellipse((size)*(i+1/2),(size)*(j+1/2),size/1.1);

    }
  }
}
