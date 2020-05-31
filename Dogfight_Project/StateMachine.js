
function StateMachine(){
switch(State){
    case 0:    
        while(!stillTurn  && !gameOver){
            //if(!Plane.isStillTurn()){
                
            //}
            Plane;
        }
        //console.log('player');
        State = 1;
        break;
    case 1:
        while(!stillTurn && !gameOver){
            //if(!Bot1.isStillTurn()){

            //}
            Plane;
        }
        //console.log('bot1');
        State = 2;
        break;
    case 2:
        while(!stillTurn && !gameOver){
            //if(!Bot2.isStillTurn()){

            //}
            Plane;
        }
        //console.log('bot2');
        State = 0;
        break;
}

if(gameOver){
    
}
}