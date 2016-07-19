//2016 07 19
//taller p5.js
// lienzo de un color solido y elipse que sigue al mouse

//en javascript tenemos variables y funciones

//variables
//una variable es un lugar en la memoria del computador
//donde podemos almacenar datos
//declarar significa una variable
//declarar se hace solo una vez
var diametro;
//luego de declarar, podemos darle valores
//asignar significa darle un valor a la variable
//se puede hacer cuantas veces quiera
//la variable siempre va a tener un valor actual
//que va a ser igual a la ultima asignacion
diametro=100;
//manera corta de  declarar y asignar un valor inicial
var X=100;
//asignarle otro valor
x=50;



//funcion setup, corre una vez y al principio
function setup() {
  //crea un lienzo donde dibujar
  //createCanvas(dimHorizontal, dimVertical);
  createCanvas(800, 600)
  //pinta el fondo del lienzo
  //background(red,green,blue);
  background(0, 255, 0);
}
//funcion draw, corre despues de setup,60 veces por segundo

function draw() {
  //definimos el estilo de la elipse
  
  
  
  estiloElipse();

  
  
  //elipse en el lienzo
  //ellipse(posHorizontal, posVertical, width, height)
  ellipse(mouseX, mouseY, 100, 100);
  
}

//mousePressed()se ejecuta cuando
//el mouse es presionado
function mousePressed(){
  background(0,255,0);
}


//declaracion de la funcion estiloElipse
//elige el pincel para crear elipse
function estiloElipse() {
  
  //configuracion de dibujo de la elipse
  //stroke elige el color del borde
  //stroke(red,green,blue)
 
  
   stroke(255, 0, 255); 
  //strokeweight determina el grosor del borde
  //strokeweight(px);
  strokeWeight(5);
  
  //fill()elige el color del relleno de la figura
  //fill(red, green, blue);
  fill(0,0,255);
  
}
