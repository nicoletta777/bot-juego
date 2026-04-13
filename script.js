const outfits = [
  "https://i.pinimg.com/1200x/ba/1a/67/ba1a67cd4f68d7194dd520b547dd1b30.jpg",
  "https://i.pinimg.com/736x/f3/07/94/f307944066e8efd5e5dc81c8e490b53a.jpg",
  "https://i.pinimg.com/736x/fe/dc/d7/fedcd7d68c8113ce33f66217a3fd10ce.jpg",
  "https://i.pinimg.com/736x/d1/4c/e3/d14ce31339a298fe2b7b148b49d917a6.jpg",
  "https://i.pinimg.com/736x/5b/3f/a8/5b3fa8d9400c4d03c3a178e3a898ca29.jpg",
  "https://i.pinimg.com/736x/4b/c0/8a/4bc08aa62175fe09c7aa89c0f091773e.jpg"
];

let contador = 0;
let total = 0;
let actual = 0;

// seleccionar outfit
function seleccionar(elemento, index) {
  actual = index;

  document.getElementById("personaje").style.opacity = 0;

  setTimeout(() => {
    document.getElementById("personaje").src = outfits[index];
    document.getElementById("personaje").style.opacity = 1;
  }, 200);

  document.querySelectorAll(".item").forEach(item => item.classList.remove("active"));
  elemento.classList.add("active");
}

// botones next
function siguiente() {
  actual = (actual + 1) % outfits.length;
  actualizarVista();
}

function anterior() {
  actual = (actual - 1 + outfits.length) % outfits.length;
  actualizarVista();
}

function actualizarVista() {
  document.getElementById("personaje").src = outfits[actual];
}

// comprar
function comprar(precio) {
  contador++;
  total += precio;

  document.getElementById("contador").textContent = contador;
  document.getElementById("total").textContent = total;

  mostrarMensaje("Added to your closet 💅");
}

// finalizar compra
function finalizarCompra() {
  mostrarMensaje("Purchase completed 🛍️✨");
}

// mensaje
function mostrarMensaje(texto) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;

  setTimeout(() => {
    mensaje.textContent = "";
  }, 2000);
}