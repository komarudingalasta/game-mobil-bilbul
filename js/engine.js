/* ==========================================
   MATH RACING
   ENGINE.JS
   BAGIAN 1
========================================== */


// ==========================
// STATUS GAME
// ==========================

let gameRunning = false;

let gameSpeed = 5;

let gameFrame;


// ==========================
// MULAI GAME
// ==========================

function startEngine(){

    if(gameRunning) return;

    gameRunning = true;

    gameLoop();

}



// ==========================
// LOOP UTAMA GAME
// ==========================

function gameLoop(){

    if(!gameRunning) return;


    updateGame();


    gameFrame = requestAnimationFrame(gameLoop);

}



// ==========================
// UPDATE SEMUA SISTEM
// ==========================

function updateGame(){


    // gerakan jalan

    moveRoad();


    // pergerakan objek

    updateObjects();


    // cek tabrakan

    checkCollision();


}



// ==========================
// STOP GAME
// ==========================

function stopEngine(){

    gameRunning=false;

    cancelAnimationFrame(gameFrame);

}



// ==========================
// RESET GAME
// ==========================

function resetEngine(){

    gameSpeed=5;

    score=0;

    life=3;

}
