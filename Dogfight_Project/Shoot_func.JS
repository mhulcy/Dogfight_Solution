function area(x1, y1, x2, y2, pointx, pointy){
    return Math.abs((x1*(y2-pointy) + x2*(pointy-y1)+ 
    pointx*(y1-y2))/2.0);
}





function Shoot(x, y, angle, pointx, pointy){
let x1, x2, y1, y2;
switch(Math.round(angle)){
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
 /* Calculate area of triangle ABC */
  A = area (x1, y1, x2, y2, x, y); 
       
 /* Calculate area of triangle PBC */  
   A1 = area (x, y, x2, y2, pointx, pointy); 
 
 /* Calculate area of triangle PAC */  
   A2 = area (x1, y1, x, y, pointx, pointy); 
 
 /* Calculate area of triangle PAB */   
   A3 = area (x1, y1, x2, y2, pointx, pointy); 
 /* Check if sum of A1, A2 and A3 is same as A */
  if(Math.round(A) === Math.round(A1 + A2 + A3)){
      console.log('true');
      return true;
  }
  else{
      console.log('false');
      console.log(A);
      console.log(A1+A2+A3);
      return false;
  }

  }