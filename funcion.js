let boton = document.getElementById("no");
let oculto = document.getElementById("sex")
let imagen = document.getElementById("img")
inicio()
function inicio(){
 oculto.style.display = "none"
 imagen.style.display = "none"
}

// Añade un evento de click al botón
boton.addEventListener("mouseover", function() {
  // Genera una posición aleatoria para el botón
  var posicionX = Math.floor(Math.random() * window.innerWidth);
  var posicionY = Math.floor(Math.random() * window.innerHeight);

  // Actualiza las propiedades CSS del botón
  boton.style.position = "absolute";
  boton.style.left = posicionX + "px";
  boton.style.top = posicionY + "px";
});


let boton2 = document.getElementById("si")

boton2.addEventListener("click", nextpag)

function nextpag(){
    let boton2= document.getElementById("si")
    let boton = document.getElementById("no")
    let h1 = document.getElementById("elh")

    boton2.style.display = "none"
    boton.style.display = "none"
    h1.innerHTML = "Te amo mi vida❤️❤️❤️"
oculto.style.display = "block"
imagen.style.display = "block"
}