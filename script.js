var bothot = document.getElementById("bothot");
var hottext= document.getElementById("hot");
var bothom = document.getElementById("bothom");
var homtext= document.getElementById("hom");
var botfli = document.getElementById("botfli");
var flitext= document.getElementById("fli");
var botbus = document.getElementById("botbus");
var bustext= document.getElementById("bus");
var botlog = document.getElementById("botlog");
var logtext= document.getElementById("log");


//botton hoteles//

bothot.addEventListener("click",function(){
    hottext.classList.remove("hotels");
    homtext.classList.add("home");
    if(flitext.classList.contains("flights")){

    }else{
        flitext.classList.add("flights");
    }

    if(bustext.classList.contains("buses")){

    }else{
        bustext.classList.add("buses");
    }

    if(logtext.classList.contains("login")){

    }else{
        logtext.classList.add("login");
    }


});

//botton home//

bothom.addEventListener("click",function(){
    hottext.classList.add("hotels");
    homtext.classList.remove("home");

    if(flitext.classList.contains("flights")){

    }else{
        flitext.classList.add("flights");
    }
    
    if(bustext.classList.contains("buses")){

    }else{
        bustext.classList.add("buses");
    }

    if(logtext.classList.contains("login")){

    }else{
        logtext.classList.add("login");
    }
});

//botton flights// 

botfli.addEventListener("click",function(){;
    homtext.classList.add("home");
    flitext.classList.remove("flights");
    if(hottext.classList.contains("hotels")){

    }else{
        hottext.classList.add("hotels");
    }

    if(bustext.classList.contains("buses")){

    }else{
        bustext.classList.add("buses");
    }

    if(logtext.classList.contains("login")){

    }else{
        logtext.classList.add("login");
    }
});

//botton bus// 

botbus.addEventListener("click",function(){;
    bustext.classList.remove("buses")
    homtext.classList.add("home");
    if(hottext.classList.contains("hotels")){

    }else{
        hottext.classList.add("hotels");
    }

    if(flitext.classList.contains("flights")){

    }else{
        flitext.classList.add("flights");
    }

    if(logtext.classList.contains("login")){

    }else{
        logtext.classList.add("login");
    }
});

//botton login// 

botlog.addEventListener("click",function(){;
    logtext.classList.remove("login")
    homtext.classList.add("home");
    if(hottext.classList.contains("hotels")){

    }else{
        hottext.classList.add("hotels");
    }

    if(flitext.classList.contains("flights")){

    }else{
        flitext.classList.add("flights");
    }

    if(bustext.classList.contains("buses")){

    }else{
        bustext.classList.add("buses");
    }
});



//imagenes//

window.addEventListener("load",function(){
    var imagenes =[];

    imagenes[0]="imagen1.jpg";
    imagenes[1]="imagen2.jpg";
    imagenes[2]="imagen3.jpg";

    var indiceimagenes = 0;
    var tiempo = 3000;

    function cambiarimagenes(){

        document.slider.src = imagenes[indiceimagenes];

        if (indiceimagenes<imagenes.length-1){
            indiceimagenes++;
        } else{
            indiceimagenes=0;
        }
    };
    setInterval(cambiarimagenes, tiempo);
});
