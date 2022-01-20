var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var boton2 = document.getElementById("rainbow");
boton.addEventListener("click",dibujoPorClick);
boton2.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width; 


function dibujarLinea(color, xinicial,yinicial,xfinal,yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var colorin = boton2.value;
    var l = 0;
    var yi, xf;
    var espacio = ancho / lineas;
    
    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea (colorin, 0, yi, xf, 300);
        console.log("Linea " + l);
    }
    
    dibujarLinea("colorcito", 1, 1, 1, 299);
    dibujarLinea("colorcito", 1, 299, 299, 299);

}