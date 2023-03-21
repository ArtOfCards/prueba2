const statistical = require('statistical-js');
import * as mathigon from '@mathigon/fermat';
import { DarkModeToggle } from 'dark-mode-toggle';
import * as ss from 'simple-statistics';

document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();

    let opcionMedia = document.getElementById("media").checked;
    let opcionMediana = document.getElementById("mediana").checked;
    let opcionModa = document.getElementById("moda").checked;
    let opcionDesviacion = document.getElementById("desviacion").checked;

    if(opcionMedia == true){ operacionMean(resultado());
    } else{ document.getElementById("respuesta").innerHTML= "";}
    if(opcionMediana == true){operacionMedian(resultado());}
    if(opcionModa == true){operacionMode(resultado());}
    if(opcionDesviacion == true){operacionSTD(resultado());}

    tipoDato();

});
function resultado(){
    const datos = document.getElementById("ingresoDatos").value;
    console.log(datos.split(","));
    let arregloDatos=datos.split(',');
    let arregloDatosConvertida=arregloDatos.map(function(item){return parseInt(item)});

    return arregloDatosConvertida;
}
function operaciones(array){
    let min = statistical.methods.min(array);
    let variances = statistical.methods.variance(array); 
}
function operacionSTD(array){
    let std = statistical.methods.stdDeviation(array);
    document.getElementById("respuesta").innerHTML+= (  "<br> la desviación es: "+ std.toFixed(2));
}
function operacionMedian(array){
    let median1 = statistical.methods.median(array);
    document.getElementById("respuesta").innerHTML+= (  "<br> la mediana es: "+ median1.toFixed(2));
}
function operacionMode(array){
    let mode1 = statistical.methods.mode(array);
    document.getElementById("respuesta").innerHTML+= (  "<br> la moda es: "+ mode1);
}
function operacionMean(array){
    let mean = ss.mean(array);
    document.getElementById("respuesta").innerHTML= (  "la media es: "+ mean.toFixed(2));
}

function tipoDato(){
    const datos = document.getElementById("ingresoDatos").value;
    console.log(datos.split(","));
    let arregloDatos = datos.split(',');
    
    for (var i = 0; i < arregloDatos.length; i++) {
        if(isNumber(arregloDatos[i])== true){
            console.log(arregloDatos[i]);
            console.log("es cuantitativo");
        }else{
            console.log(arregloDatos[i]);
            console.log("es cualitativo");
        }
      }
}
const isNumber = n => (typeof(n) === 'number' || n instanceof Number || (typeof(n) === 'string' && !isNaN(n))) && isFinite(n);


