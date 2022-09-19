// INSETO VARIABLES  CON NOMBRES Y ID PARA PODER VISUALISAR LOS CAMBIOS EN HTML....
var boton = document.getElementById("boton")
var boton2 = document.getElementById("reset")
var fondo = document.getElementById("fondo")
var nombre = document.getElementById("nombre")
// INSERTO MISCOLORES 
let colores = ["silver","gray","white","maroon",
"red","purple","fuchsia","green","lime","olive",	
"yellow","navy","blue","teal","aqua","antiquewhite",
"aquamarine","azure","beige","bisque","blanchedalmond",
"blueviolet	","brown","burlywood","cadetblue","chartreuse",		
"chocolate","coral","cornflowerblue","cornsilk","crimson",		
"darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen",		
"darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange",	
"darkorchid	","darkred","darksalmon	","darkseagreen","darkslateblue",		
"darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink",	
"deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite",	
"forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow",		
"grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender",
"lavenderblush","lawngreen"	,"lemonchiffon","lightblue	","lightcoral","lightcyan",	
"lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink",	
"lightsalmon","lightseagreen","lightskyblue","lightslategray",	"lightslategrey",		
"lightsteelblue","lightyellow","limegreen"];

let random = 0;
// CREO UNA FUNCION QUE AL MOMENTO DE HACER CLIK CUMPLE LO QUE ESTA ADENTRO DE ESA FUNCION..
boton.addEventListener("click", ()=>{

    random= Math.floor(Math.random()*colores.length);
    document.getElementById("fondo").style.background = colores[random];
    document.getElementById("nombre").textContent=colores[random];

  
});
// INSERTO OTRA FUNCION PARA REINICIAR MIS COLORES ..
boton2.addEventListener("click", ()=>{
  
    nombre.innerHTML = "EMPEZAMOS DE NUEVO";
    document.body.style.background = "#303134";

  
});
