/* ==========================================
   MATH RACING
   GAME.JS
   MAIN CONTROLLER
========================================== */


// ==========================
// ELEMENT
// ==========================

const timerText =
document.getElementById("timer");


const actionButton =
document.getElementById("actionButton");
document
.getElementById("startButton")
.addEventListener(
"click",
function(){

    startGame();

    this.style.display="none";

});


// ==========================
// TIMER GAME
// ==========================

let gameTime = 120;

let gameTimer;



// ==========================
// START GAME
// ==========================

function startGame(){


    resetScore();

    resetPlayer();

    clearObjects();


    gameTime = 120;


    updateTimer();



    startEngine();



    startTimer();


}



// ==========================
// TIMER
// ==========================

function startTimer(){


    gameTimer =
    setInterval(function(){


        gameTime--;


        updateTimer();



        if(gameTime <=0){


            endGame();


        }


    },1000);


}



// ==========================
// UPDATE TIMER
// ==========================

function updateTimer(){


    if(timerText){

        timerText.innerHTML =
        gameTime;

    }


}



// ==========================
// COLLISION
// ==========================

function checkCollision(){



    let playerBox =
    player.getBoundingClientRect();



    gameObjects.forEach(
    function(obj,index){


        let objectBox =
        obj.element.getBoundingClientRect();



        if(

            playerBox.left <
            objectBox.right &&

            playerBox.right >
            objectBox.left &&

            playerBox.top <
            objectBox.bottom &&

            playerBox.bottom >
            objectBox.top

        ){



            handleObject(obj);



            obj.element.remove();


            gameObjects.splice(index,1);


        }


    });


}



// ==========================
// HASIL TABRAKAN
// ==========================

function handleObject(obj){



    if(obj.type==="coin"){


        collectCoin();


    }



    if(obj.type==="question"){


        stopEngine();


        showQuestion();



    }



    if(obj.type==="obstacle"){


        reduceLife();


    }


}



// ==========================
// TOMBOL AKSI
// ==========================

if(actionButton){


    actionButton.addEventListener(
    "click",
    function(){


        showQuestion();


    });


}



// ==========================
// SELESAI
// ==========================

function endGame(){


    clearInterval(gameTimer);


    stopEngine();


    clearObjects();



    localStorage.setItem(
        "lastScore",
        score
    );



    window.location.href =
    "hasil.html";


}



// ==========================
// START OTOMATIS
// ==========================

window.onload=function(){


    startGame();


};
