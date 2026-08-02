/* ==========================================
   MATH RACING
   OBJECT.JS
========================================== */


// ==========================
// KONTAINER OBJEK
// ==========================

const objectContainer =
document.getElementById("objectContainer");


// ==========================
// DATA OBJEK
// ==========================

const objectTypes = [

    {
        type:"coin",
        icon:"⭐"
    },

    {
        type:"question",
        icon:"❓"
    },

    {
        type:"obstacle",
        icon:"🚧"
    }

];


// ==========================
// LIST OBJEK AKTIF
// ==========================

let gameObjects = [];

let objectSpawn = true;


// ==========================
// MEMBUAT OBJEK
// ==========================

function createObject(){


    if(!gameRunning) return;



    let random =
    objectTypes[
        Math.floor(
            Math.random()*objectTypes.length
        )
    ];



    let object =
    document.createElement("div");



    object.className =
    "gameObject " + random.type;



    object.innerHTML =
    random.icon;



    // posisi horizontal acak

    let position =
    Math.floor(
        Math.random()*70
    ) + 15;



    object.style.left =
    position + "%";



    object.style.top =
    "-70px";



    objectContainer.appendChild(object);



    let data = {

        element:object,

        type:random.type,

        y:-70,

        speed:gameSpeed

    };


    gameObjects.push(data);


}



// ==========================
// UPDATE OBJEK
// ==========================

function updateObjects(){



    gameObjects.forEach(
    function(obj,index){


        obj.y += obj.speed;



        obj.element.style.top =
        obj.y + "px";



        // hapus jika keluar layar

        if(obj.y > window.innerHeight){


            obj.element.remove();


            gameObjects.splice(index,1);


        }



    });


}



// ==========================
// PEMBUATAN OBJEK OTOMATIS
// ==========================

setInterval(
function(){

    if(gameRunning && objectSpawn){

        createObject();

    }

},1200);



// ==========================
// HAPUS SEMUA OBJEK
// ==========================

function clearObjects(){


    gameObjects.forEach(
    function(obj){

        obj.element.remove();

    });


    gameObjects=[];


}
