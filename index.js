var notas;
var promedios;
var suma=0;
var nnotas= parseInt(prompt("ingrese la cantidad de notas a promediar: "))

for(i=0; i < nnotas; i++){
    var notas= parseInt(prompt("ingresar nota " + (1 + i)));
    suma= suma + notas;
}
promedio = suma / nnotas;

alert("tu promedio es: " + promedio)