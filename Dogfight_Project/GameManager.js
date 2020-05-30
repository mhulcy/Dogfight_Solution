var t = player;
while(true){
    t = setState(t);
}

function setState(turn){
    switch(turn){
        case player:
            turn = bot1;
            break;
        case bot1:
            turn = bot2;
            break;
        case bot2:
            turn = player;
            break;
    }
    return turn;
}