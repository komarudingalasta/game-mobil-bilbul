/* ==========================================
   MATH RACING
   PLAYER.JS
========================================== */


// ==========================
// ELEMENT PLAYER
// ==========================

const player = document.getElementById("player");


// ==========================
// POSISI MOBIL
// ==========================

let playerPosition = 50;


// batas pergerakan (%)

const minPosition = 15;

const maxPosition = 85;


// ==========================
// KECEPATAN GERAK
// ==========================

let playerMoveSpeed = 5;


// ==========================
// UPDATE POSISI MOBIL
// ==========================

function updatePlayer(){

    player.style.left = playerPosition + "%";

}



// ==========================
// GERAK KIRI
// ==========================

function moveLeft(){

    playerPosition -= playerMoveSpeed;


    if(playerPosition < minPosition){

        playerPosition = minPosition;

    }


    updatePlayer();

}



// ==========================
// GERAK KANAN
// ==========================

function moveRight(){

    playerPosition += playerMoveSpeed;


    if(playerPosition > maxPosition){

        playerPosition = maxPosition;

    }


    updatePlayer();

}



// ==========================
// KONTROL KEYBOARD
// ==========================

document.addEventListener(
"keydown",
function(event){


    if(event.key === "ArrowLeft"){

        moveLeft();

    }



    if(event.key === "ArrowRight"){

        moveRight();

    }


});



// ==========================
// KONTROL TOMBOL HP
// ==========================

const leftButton =
document.getElementById("leftButton");


const rightButton =
document.getElementById("rightButton");



if(leftButton){

    leftButton.addEventListener(
    "touchstart",
    function(){

        moveLeft();

    });


    leftButton.addEventListener(
    "click",
    function(){

        moveLeft();

    });

}



if(rightButton){

    rightButton.addEventListener(
    "touchstart",
    function(){

        moveRight();

    });


    rightButton.addEventListener(
    "click",
    function(){

        moveRight();

    });

}



// ==========================
// RESET POSISI
// ==========================

function resetPlayer(){

    playerPosition = 50;

    updatePlayer();

}



// ==========================
// START
// ==========================

updatePlayer();
