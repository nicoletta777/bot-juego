const outfits = [
  "https://i.pinimg.com/564x/a1.jpg",
  "https://i.pinimg.com/564x/b2.jpg",
  "https://i.pinimg.com/564x/c3.jpg"
];

function cambiarOutfit(index) {
  document.getElementById("personaje").src = outfits[index];
}
