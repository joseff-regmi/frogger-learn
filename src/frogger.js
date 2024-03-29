class Frogger {
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        this.x = canvas3.width/2 - this.width;
        this.y = canvas3.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }

    update(){
        if(keys[38]){ //up
            if(this.moving === false){
                this.y -= grid;
                this.moving = true;
            }
        }

        if(keys[40]){ // down
            if(this.moving === false && this.y < canvas3.height - this.height * 2){
                this.y += grid;
                this.moving = true;
            }
        }

        if(keys[37]){ // left
            if(this.moving === false && this.x > this.width){
                this.x -= grid;
                this.moving = true;
            }
        }

        if(keys[39]){ // right
            if(this.moving === false && this.x < canvas3.width - this.width*2){
                this.x += grid;
                this.moving = true;
            }
        }

        if(this.y < 0) scored()
    }

    draw(){
        ctx2.fillStyle = 'green';
        ctx2.fillRect(this.x, this.y, this.width, this.height);
    }

    jump(){
        console.log('jumped')
    }
}

const frogger = new Frogger();