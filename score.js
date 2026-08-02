/* ==========================================
   MATH RACING
   SCORE.JS
========================================== */


// ==========================
// DATA GAME
// ==========================

let score = 0;

let life = 3;

let level = 1;

let distance = 0;


// ==========================
// ELEMENT HUD
// ==========================

const scoreText =
document.getElementById("score");


const lifeText =
document.getElementById("life");


// ==========================
// TAMBAH SKOR
// ==========================

function addScore(point){


    score += point;


    updateScore();


}



// ==========================
// KURANGI NYAWA
// ==========================

function reduceLife(){


    life--;


    updateScore();



    // efek mobil terkena

    player.classList.add("hit");



    setTimeout(function(){

        player.classList.remove("hit");

    },400);



    if(life <= 0){

        gameOver();

    }


}



// ==========================
// UPDATE TAMPILAN
// ==========================

function updateScore(){


    if(scoreText){

        scoreText.innerHTML =
        score;

    }



    if(lifeText){

        lifeText.innerHTML =
        life;

    }


}



// ==========================
// TAMBAH LEVEL
// ==========================

function increaseLevel(){


    level++;


    gameSpeed += 1;


}



// ==========================
// GAME OVER
// ==========================

function gameOver(){


    stopEngine();



    clearObjects();



    alert(

    "GAME OVER\n\n" +

    "Skor kamu : " + score

    );



    window.location.href =
    "hasil.html";


}



// ==========================
// RESET SCORE
// ==========================

function resetScore(){


    score = 0;

    life = 3;

    level = 1;

    distance = 0;


    updateScore();


}



// ==========================
// BONUS
// ==========================

function collectCoin(){


    addScore(10);


}



// ==========================
// BENAR MENJAWAB SOAL
// ==========================

function correctAnswer(){


    addScore(50);


}



// ==========================
// SALAH MENJAWAB
// ==========================

function wrongAnswer(){


    reduceLife();


}
