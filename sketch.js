function setup() {
  createCanvas(600, 600);
  //dimensione dello sfondo
  angleMode(DEGREES)
  //userò gli angoli in gradi e non radianti
  noLoop()
  //ferma il loop 
}

function draw() {
  background(173, 216, 230); 
  //inserisco uno sfondo azzurrino chiaro
  fill(80,120,40);
  noStroke();
  rect(0,450, 600, 300);
  
  translate (width/2,height/2+200);
  //sposto l'origine al centro del mio schermo
  ramo(80);
  //branch è una funzione che accetta len come parametro
  //ora sto dicendo alla funzione ramo di crearne uno lungo 100
  
  
}

//funzione per creare i rami 
//len è la lunghezza del ramo corrente 
function ramo(lung) {
  push()
  if (lung>10) 
    {
  stroke(70,40,20) //colore marrone
  strokeWeight(map(lung,10,80,1,15))
  //crea una proprorzione, 10-100 è la lunghezza del ramo, che viene proporzionata allo spessore 1-15
  line(0,0,0,-lung) //dal punto mi disegna un "ramo" verso l'alto di lunghezza len
  translate(0,-lung) //sposta il punto di applicazione in cima
  rotate(random(-20,-30)) //rotazione di 30 gradi 
  ramo(lung * random(0.7, 0.9)) //moltiplico la lunghezza del ramo per un numero minore di zero --> si rimpicciolisce 
  rotate(random(50,60))
  ramo(lung * random(0.7, 0.9)) //random, varia ogni volta che ricarico
}
  //faccio le foglie
  else {
    //inserisco tre variabili per RGB, in modo che le foglie siano sempre diverse casualmente 
    var r = 80 + random (-20,20)
    var g = 120 + random (-20,+20)
    var b = 40 + random (-20,20)
    fill(r,g,b,150) //150 è la sfocatura 
    noStroke()
    
    beginShape() //creo una forma complessa, con poligono personalizzati 
    for (var i=45; i<135; i++) { //inserisco la variabile i, che sarebbero i gradi, da 45 a 135
      var rad = 13 //raggio di cerchio 15 fisso
      var x = rad*cos(i) //calcolo così la coordinata x
      var y = rad*sin(-i) //calcolo così la coordinata y
      vertex(x,y) //definisco tantissimi "vertici" 
    }
    for (var i=135; i>40; i--) { //facciola la stessa cosa di sopra ma ripercorro al contrario 
      var rad = 13
      var x = rad*cos(i)
      var y = rad*sin(-i) +20 //sposto leggermente sul basso 
      vertex(x,y)

    } //il primo for crea la parte superiore, il secondo quella inferiore. 

  endShape(close) //i fa unire il primo con l'ultimo vertice 


  }
  pop()
  //creo una bolla 

}

