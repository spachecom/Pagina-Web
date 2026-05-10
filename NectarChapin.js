function scrollToProducts() {
  document.getElementById("productos").scrollIntoView({
    behavior: "smooth"
  });
}

/* SLIDER DE FONDO */

const hero = document.querySelector(".hero");

const images = [
  "img/vino.jpeg",
  "img/Jalea.jpeg",
  "img/jugo.jpeg",
  "img/LOGO .jpeg"
];

let current = 0;

function changeBackground() {
  hero.style.backgroundImage =
  `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${images[current]}')`;
  current++;

  if(current >= images.length){
    current = 0;
  }
}

/* Primera imagen */
changeBackground();

/* Cambia cada 3 segundos */
setInterval(changeBackground, 3000);