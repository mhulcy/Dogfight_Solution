function rollDefense(defense){
    var dodgeAmount = 0;
    for(var i = 0; i < defense; i++){
        var side = Math.random()
        var random = Math.ceil((Math.random()*9)+1);
        if(random <= 4){
            dodgeAmount++;
        }
    }
    return dodgeAmount;
}

function rollOffense(offense){
    var hitAmount = 0;
    for(var i = 0; i < offense; i++){
        var side = Math.random();
        var random = Math.ceil((Math.random()*9)+1);
        if(random <= 4){
            hitAmount++;
        }
    }
    return hitAmount;
}