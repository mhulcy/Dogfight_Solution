
class Plane{
    constructor(x, y, angle, health, firePower) {
        this.x =x;
        this.y = y;
        this.angle = angle;
        this.health = health;
        this.firePower = firePower;
    }
       takeDamage(damageReceived){
           this.health -= damageReceived;
    }



}