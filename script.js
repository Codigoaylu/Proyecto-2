document.addEventListener("click", function(event){
    let boton = event.target.dataset.boton;
    let elemento = event.target;

    if(boton){  
    let audioBoton = document.getElementById(boton);
    audioBoton.currentTime=0;
    audioBoton.play();
    elemento.classList.add("mystyle")

    }
      
});





/*
document.addEventListener("click", function(event){
    let boton = event.target.dataset.boton;
    if(boton){  
    let sonido = document.getElementById(boton);
    sonido.currentTime=0;
    sonido.play();
    fondo();
    }
            
});

function fondo(){
    let boton = document.querySelector("button[data-boton]");
    console.log(boton);
    boton.style.backgroundColor="red";
}
*/


/*
function myFunction() {
    let boton = event.target.dataset.boton;
    document.getElementById("boton").classList.add("mystyle");
};

document.addEvent

/*
function playbombo(){

    let sonido = document.getElementById("bombo");
    sonido.currentTime = 0;
    sonido.play();

};

function playcrash(){

    let sonido = document.getElementById("crash");
    sonido.currentTime = 0.1;
    sonido.play();

};

function playhithat(){

    let sonido = document.getElementById("hit-hat");
    sonido.currentTime = 0.1;
    sonido.play();

};

function playredoblante(){

    let sonido = document.getElementById("redoblante");
    sonido.currentTime = 0.1;
    sonido.play();

};


function playtom1(){

    let sonido = document.getElementById("tom1");
    sonido.currentTime = 0.1;
    sonido.play();

};


function playtom2(){

    let sonido = document.getElementById("tom2");
    sonido.currentTime = 0.1;
    sonido.play();

};

function playtom3(){

    let sonido = document.getElementById("tom3");
    sonido.currentTime = 0.1;
    sonido.play();

};

function playtom4(){

    let sonido = document.getElementById("tom4");
    sonido.currentTime = 0.1;
    sonido.play();

};
*/