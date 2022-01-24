function animate(){
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    handelParticles();
    frogger.draw();
    frogger.update();
    ctx1.drawImage(background2, 0, 0, canvas1.width, canvas1.height)
    handleObstacles();
    ctx3.drawImage(grass, 0, 0, canvas1.width, canvas1.height)
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('keydown', function(e){
    keys = [];
    keys[e.keyCode] = true;
    if(keys[37] || keys[38] || keys[39] || keys[40]){
        frogger.jump();
    }
})

window.addEventListener('keyup', function(e){
    delete keys[e.keyCode];
    frogger.moving = false;
})


 function scored(){
     score ++;
     gameSpeed += 0.5;
     frogger.x = canvas3.width/2 - frogger.width/2;
     frogger.y = canvas3.height - frogger.height - 40;
}
