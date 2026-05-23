//Parámetros de la Grilla.
let columnas = 3;
let filas = 3;
let espaciadoX = 120;
let espaciadoY = 120;
let inicioX = 80;
let inicioY = 180;

//Variable de Interacción
let d = 120;
let offsetY = 12;
let modo = 1;

//Paleta de Color
let paleta1;
let paleta2;
let paleta3;

function setup() {
  createCanvas(400, 600);
  noStroke();
  
  //lista de paletas
  paleta1 = [color(30, 120), color(90, 120), color(200, 150)];
  paleta2 = [color(255, 230, 0, 180), color(230, 30, 30, 180), color(0, 80, 180, 180)];
  paleta3 = [color(0, 174, 239, 150), color(236, 0, 140, 150), color(255, 242, 0, 150)]
  
}

function draw() {
  background(230);
  
//Mapeo de coordenadas convirtiendo el mouse a valores
  offsetY = map(mouseX, 0, width, 5, 80);
  d = map(mouseY, 0, height, 20, 150);
  
//Escenario 1 Monocromatico
  if (modo === 1) {
    background (130); 
    EllipseORG(paleta1);
  }
//Escenario 2 Bauhaus
  else if (modo === 2) {
    background (255, 240, 200);
    EllipseORG(paleta2); 
  }
//Escenario 3 CMYK
  else if (modo === 3){
    background (250,248,240);
    EllipseORG(paleta3);
  }

}
//Generar grilla 3x3, aplicando mezcla para efecto translucido
function EllipseORG(lista) {
  blendMode(MULTIPLY);
  
  for(let i = 0; i < columnas; i ++) {
    let x = inicioX + (i * espaciadoX);
    
    for(let j = 0; j < filas; j++) {
      let y = inicioY + (j * espaciadoY);
      
      //Aplicación de color por fila
      fill(lista[j]);
      //Dibujado de capas desfasadas
      circle(x, y - offsetY, d);
      circle(x, y, d);
      circle(x, y + offsetY, d);
    
    }
  } 
  blendMode(BLEND);
}

//Selección de visualidad de escenarios
function keyPressed () {
  if (key === '1') {
    modo = 1;
  } else if (key === '2') {
    modo = 2;
  } else if (key === '3') {
    modo = 3;
  }
}