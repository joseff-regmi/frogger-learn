class Partile{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.radius = Math.random()*20 + 1;
        this.directionX = Math.random()*1 - 0.5;
        this.directionY = Math.random()*1 - 0.5;
    }

    draw(){
        ctx3.fillStyle = 'rgba(150, 150, 150, 1)';
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx3.fill();
        ctx3.closePath();
    }

    update(){
        this.x += this.directionX;
        this.y += this.directionY;
    }
}

function handelParticles(){
    for(let i = 0; i < particlesArrray.length; i++){
        particlesArrray[i].update();
        particlesArrray[i].draw();
    }

    if((keys[37] || keys[38] || keys[39] || keys[40]) && frogger.y > 100 && particlesArrray.length < 200){
        for(let i = 0; i < 10; i++){
            particlesArrray.unshift(new Partile(frogger.x, frogger.y))
        }
    }
}