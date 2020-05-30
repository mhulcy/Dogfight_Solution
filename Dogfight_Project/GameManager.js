function setState(turn){
    switch(turn){
        case 0:
            turn = bot1;
            
            break;
        case 1:
            turn = bot2;
            
            break;
        case 2:
            turn = player;
            
            break;
    }
    return turn;
}