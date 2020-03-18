class Drop{

    constructor(){

        this.x = random(width);
        this.y = random(500, -500);
        this.z = random(0, 10);
        this.yspeed = map(this.z, 0, 10, 1, 20);

    }

    fall(){

        this.y = this.y + this.yspeed;
        this.grav = map(this.z, 0, 10, 0, 0.9);
        this.yspeed = this.yspeed + this.grav;

        if(this.y > height){

            this.y = random(-200, -100);
            this.yspeed = map(this.z, 0, 20, 4, 10);   
    
        }
    
    }

    display(){

        var thick = map(this.z, 0, 10, 1, 3);
        strokeWeight(thick);
        stroke("red");
        line(this.x, this.y, this.x, this.y + 20);

    }
   
}