var player1;
var player2;
var balas = [];
var ayudantes = [];

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  player1 = new Villano(); //jugador 1
  player2 = new Heroe();  //jugador 2
  for(var i = 0; i < 1; i++){
   balas[i] = new Proyectil(); 
  }
 /*for(var j = 0; j <= 30; i++){
  ayudantes[j] = new Ayudante();
  }*/
}

function draw() {
  background(0);
  player1.mostrar();
  if(keyCode == 74){
  player1.izquierda();
  }
  if(keyCode == 76){
    player1.derecha();
  }
  if(keyCode == 75){
    player1.abajo();
  }
  if(keyCode == 73){
     player1.arriba();
  }
  //jugador numero 2
  player2.mostrar();
  if(keyCode == 68){
    player2.izquierda();
  }
  if(keyCode == 65){
    player2.derecha();
  }
  if(keyCode == 87){
    player2.arriba();
  }
  if(keyCode == 83){
    player2.abajo();
  }
  
  for(var i = 0; i < balas.length; i++){
   balas[i].mostrar(); 
  balas[i].mover();
    }
  //for(var k = 0; k < ayudantes.length; k++){
   // ayudantes[k].mostrar();
    //obstaculos[k].mover();
   //} 
}

function mousePressed(){
  var ba = new Proyectil();
  balas.push(ba);
}
