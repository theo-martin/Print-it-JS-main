const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
//ci-dessus se trouve le tableau slides contenant les différentes bannières et les tagline
//ci dessous se trouve les déclarations des constantes et des variables 
const imgbanner = document.querySelector("img.banner-img");
const btnarrowright = document.querySelector(".arrow_right");
const btnarrowleft = document.querySelector(".arrow_left");
const tagLine = document.querySelector("#banner p")
const dots =document.querySelectorAll(".dot")
let i = 0;

btnarrowright.addEventListener("click", () => { // Écouteur d'événement du click de la flèche droite
 i= (i === slides.length -1  ? i=0 : i+1);// si i === taille tableau -1 --> i=0 sinon i+1(un tableau ce li à partir de 0 donc -1 pour valeur réelle)
 imgbanner.src = `./assets/images/slideshow/${slides[i].image}`;// met à jour l'image de la bannière 
 tagLine.innerHTML = slides[i].tagLine;// met à jour la tagline avec la valeur correspondant à l'image
 dots.forEach(dot => dot.classList.remove("dot_selected"))// pour chaque point, exécuter fonction dot qui enlève la classe dot_selected
 dots[i].classList.add('dot_selected'); // ajoute la classe dot-selected à la valeur de i correspondant à l'image et à la tagline
});

btnarrowleft.addEventListener("click", () => { // ecouteur d'événement du click de la fleche gauche
  i = (i === 0 ? i = slides.length -1 : i - 1 ) //si i===0 --> i = taille tableau - 1 sinon i - 1   (? = condition  true :false )
  imgbanner.src = `./assets/images/slideshow/${slides[i].image}`; // met à jour l'image de la bannière 
  tagLine.innerHTML = slides[i].tagLine; // met à jour la tagline avec la valeur correspondant à l'image
  dots.forEach(dot => dot.classList.remove("dot_selected"))// pour chaque point, exécuter fonction dot qui enlève la classe dot_selected
  dots[i].classList.add('dot_selected');// ajoute la classe dot-selected à la valeur de i correspondant à l'image et à la tagline
});