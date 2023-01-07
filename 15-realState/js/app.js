
//Document se refiere al documento html, window es la ventana
//Dentro de los '' va el nombre de la clase
const imagenes = document.querySelectorAll('.propiedad__imagen') 

window.addEventListener('scroll', () =>{ //Cuando yo hago scroll, hace...
    
    const scroll = this.scrollY / -20;//Toma el valor del scroll. / -20 Para que los valores no cambien tan rápido y para que este un poco más arriba del borde
    
    imagenes.forEach((imagen) => { //Itera 1 vez por cada imagen que haya. Imagen es una variable temporal
        imagen.style.backgroundPositionY = `${scroll}px`; //.style te trae toda la info del css. Con el = le asigno el valor a ese css. Me concatena el valor con las unidades(px)
        
    });
});