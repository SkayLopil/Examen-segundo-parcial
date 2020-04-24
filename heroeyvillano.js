class Villano{
 constructor(){
   //posicion del personaje 
   this.x = 367;
   this.y = height/2;
   this.velx = 4;
   this.dir = 0.125;
   //Imagenes 
   this.img = [];//array
   this.frame = 0;
   for(var i = 0; i < 11; i++){
     this.img[i] = loadImage("zombie_"+ i +".gif");
   }
 }
  mostrar(){
   push();
   translate(this.x, this.y);
   scale(this.dir,0.125);
   imageMode(CENTER);
   image(this.img[this.frame], 0, 0); 
   pop();
    }
  derecha(){
    this.frame++;
    this.x = this.x + this.velx;
    this.dir = 0.125;
    if(this.frame > 10){
    this.frame = 0; 
    }
  }
  izquierda(){
    this.dir = -0.125;
    this.x = this.x - this.velx;
    this.frame++;
    if(this.frame > 10){
    this.frame = 0; 
    }
  }
  abajo(){
   this.y = this.y + this.velx; 
  }
  arriba(){
   this.y = this.y - this.velx; 
  }
}

class Ayudante{
 constructor(){
   //posicion del personaje 
   this.x = random(60,375);
   this.y = random(25,375)
   //this.velx = 4;
   //this.dir = 0.125;
   //Imagenes 
   this.img = [];//array
   this.frame = 0;
   for(var i = 0; i < 1; i++){
     this.img[i] = loadImage("zombie_"+ i +".gif");
   }
 }
  mostrar(){
   //push();
   translate(this.x, this.y);
   scale(this.dir,0.125);
   //imageMode(CENTER);
   image(this.img[this.frame], 0, 0); 
   //pop();
    }
}

class Heroe{
 constructor(){
   //posicion del personaje 
   this.x = 30;
   this.y = height/2;
   this.velx = 4;
   this.dir = 0.125;
   //Imagenes 
   this.img = [];//array
   this.frame = 0;
   for(var i = 0; i < 11; i++){
     this.img[i] = loadImage("luigui_"+ i +".gif");
   }
 }
  mostrar(){
   push();
   translate(this.x, this.y);
   scale(this.dir,0.125);
   imageMode(CENTER);
   image(this.img[this.frame], 0, 0); 
   pop();
    }
  derecha(){
    this.frame++;
    this.x = this.x + this.velx;
    this.dir = 0.125;
    if(this.frame > 10){
    this.frame = 0; 
    }
  }
  izquierda(){
    this.dir = -0.125;
    this.x = this.x - this.velx;
    this.frame++;
    if(this.frame > 10){
    this.frame = 0; 
    }
  }
  arriba(){
    this.y = this.y - this.velx; 
  }
  abajo(){
     this.y = this.y + this.velx; 
  }
  disparar(){
    
  }
}

class Proyectil{
  constructor(){
    this.x = 30;
    this.y = 60;
    this.vel = 8;
    this.speed = 7;
    this.size = 5;
  }
  mostrar(){
    push();
    ellipseMode(CENTER);
    fill(255,0,0);
    ellipse(this.x,height/2,10,10);
    pop();
  }
  mover(){
    this.x = this.x + this.vel;
  }
}
