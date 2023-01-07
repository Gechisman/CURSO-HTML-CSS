// window.swiper = new Swiper({
//     el:'.slider__contenedor', //Contenedor del slider (donde va a estar el slider)
//     slideClass: 'slider__slide',//Nombre de cada uno de los slides
//     createElements: true, //Para que nos genere el resto del código HTML
//     loop: true, //Para que se cree un loop y no se acaben las imágenes
//     pagination: true, //Para que abajo me salga cuantas imagenes hay
//     navigation: true //Para mostrar flechas a los lados
//     autoplay:{ //Para que cambie de foto autimaticamente cada 3s
//        delay: 3000
//     },
// });
var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});