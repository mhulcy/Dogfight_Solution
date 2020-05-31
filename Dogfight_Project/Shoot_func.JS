function Shoot(x, y, angle){
let x1, x2, y1, y2;
switch(math.round(angle)){
case 0:
    x1 = x-200;
    x2 = x+200;
    y1 = y-200;
    y2= y-200;
    break;
case 45:
    x1 = x;
    x2 = x+ 200*Math.sqrt(2);
    y1 = y - 200*Math.sqrt(2);
    y2 = y;
    break;
case 90:
    x1 = x+200;
    x2 = x+200;
    y1 = y-200;
    y2 = y+200;
    break;
case 135:
    x1 = x + 200*Math.sqrt(2);
    x2 = x;
    y1 = y;
    y2 = y + 200*Math.sqrt(2);
    break;
case 180:
    x1 = x-200;
    x2 = x+200;
    y1 = y+200;
    y2 = y+200;
    break;
case 225:
    x1 = x- 200*Math.sqrt(2);
    x2 = x;
    y1 = y;
    y2 = y + 200*Math.sqrt(2);
case 270:
    x1 = x-200;
    x2 = x-200;
    y1 = y-200;
    y2 = y+200;
    break;
case 315:
    x1 = x;
    x2 = x - 200*Math.sqrt(2);
    y1 = y - 200*Math.sqrt(2);
    y2 = 0;
    break;
}
}