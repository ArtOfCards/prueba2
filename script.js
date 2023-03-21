const statistical = require('statistical-js');
import * as mathigon from '@mathigon/fermat';
import { DarkModeToggle } from 'dark-mode-toggle';
import * as ss from 'simple-statistics';


document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    resultado();
    operaciones(resultado()); 
    });


function resultado(){

    const datos = document.getElementById("ingresoDatos").value;
    console.log(isNumber(datos));
    console.log(datos.split(","));
    let arregloDatos=datos.split(',');
    let arregloDatosConvertida=arregloDatos.map(function(item){return parseInt(item)});
    console.log(arregloDatos.length + "numero del arreglo");

    return arregloDatosConvertida;
    
}

function operaciones(array){


    let min = statistical.methods.min(array);
    let median1 = statistical.methods.median(array);
    let mode1 = statistical.methods.mode(array);
    let mean = ss.mean(array);
    let variances = statistical.methods.variance(array);
    let std = statistical.methods.stdDeviation(array);

    console.log(min + "minimo");
    console.log(median1 +"mediana");
    console.log(mode1 +"moda");
    console.log(mean + "media");
    console.log(variances+ "varianza");
    console.log(std + "desviación");

}



const isNumber = n => (typeof(n) === 'number' || n instanceof Number || (typeof(n) === 'string' && !isNaN(n))) && isFinite(n);


