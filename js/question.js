/* ==========================================
   MATH RACING
   QUESTION.JS
   Operasi Bilangan Bulat
========================================== */


// ==========================
// DATA SOAL
// ==========================

let questions = [

    {
        question:"(-8) + 15 = ?",
        answers:["7","-7","23","-23"],
        correct:0
    },

    {
        question:"12 - (-9) = ?",
        answers:["3","21","-21","-3"],
        correct:1
    },

    {
        question:"(-6) × 7 = ?",
        answers:["42","-42","13","-13"],
        correct:1
    },

    {
        question:"(-48) ÷ 6 = ?",
        answers:["8","-8","-42","42"],
        correct:1
    },

    {
        question:"15 + (-4) × 3 = ?",
        answers:["33","3","-27","27"],
        correct:1
    }

];


// ==========================
// ELEMENT HTML
// ==========================

const questionPopup =
document.getElementById("questionPopup");


const questionText =
document.getElementById("questionText");


const answerButtons =
document.querySelectorAll(
"#answers button"
);


const questionTimer =
document.getElementById("questionTime");



// ==========================
// VARIABEL
// ==========================

let currentQuestion;

let questionTime;

let questionInterval;



// ==========================
// TAMPILKAN SOAL
// ==========================

function showQuestion(){


    let random =
    Math.floor(
        Math.random()*questions.length
    );


    currentQuestion =
    questions[random];



    questionPopup.classList.remove("hide");



    questionText.innerHTML =
    currentQuestion.question;



    answerButtons.forEach(
    function(button,index){


        button.innerHTML =
        currentQuestion.answers[index];


    });



    startQuestionTimer();


}



// ==========================
// TIMER SOAL
// ==========================

function startQuestionTimer(){


    questionTime = 15;


    questionTimer.innerHTML =
    questionTime;



    questionInterval =
    setInterval(function(){


        questionTime--;



        questionTimer.innerHTML =
        questionTime;



        if(questionTime <=0){


            clearInterval(questionInterval);


            closeQuestion();


            wrongAnswer();


        }



    },1000);


}



// ==========================
// CEK JAWABAN
// ==========================

answerButtons.forEach(
function(button,index){


    button.addEventListener(
    "click",
    function(){


        checkAnswer(index);


    });


});



// ==========================
// PEMERIKSAAN
// ==========================

function checkAnswer(index){


    clearInterval(questionInterval);



    if(index === currentQuestion.correct){


        correctAnswer();



        alert("✅ BENAR +50 POIN");


    }

    else{


        wrongAnswer();



        alert("❌ SALAH");


    }



    closeQuestion();


}



// ==========================
// TUTUP SOAL
// ==========================

function closeQuestion(){


    questionPopup.classList.add("hide");


}



// ==========================
// SOAL CAMPURAN ACAK
// ==========================

function generateQuestion(){


    let a =
    Math.floor(Math.random()*20)-10;


    let b =
    Math.floor(Math.random()*20)-10;



    let result =
    a+b;



    return {

        question:
        `${a} + (${b}) = ?`,

        answer:result

    };


}
