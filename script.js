// Seleccionar elemento de HTML - DOM

const slider = document.querySelector('.slider');
const sliderImg = document.querySelectorAll('.Slider-Img');
const btnNext = document.querySelector('.Bt-next');
const btnPrev = document.querySelector('.Bt-prev');


// Variables de Iteradora y Longitud
let posicionImg = 0;
const longitud = sliderImg.length;

// Funcion Actualizar Slider
function actualizarSlider() {
    const desplazarImg = posicionImg * -1263;
    slider.style.transform = `translateX(${desplazarImg}px)`;
}

//Funcion para adelantar Imagen
function btnAdelantar() {
    console.log(posicionImg)
    if (posicionImg < longitud - 1) {
        posicionImg++
        actualizarSlider();
    } else {

        //posicionImg = 0;
        //slider.style.transform = `translateX(${posicionImg}px)`;

        // Transición hacia la última imagen y luego reiniciar a la primera
        //posicionImg++;
        //actualizarSlider();

        // Espera que la transición termine y reinicia la posición sin salto
        setTimeout(() => {
            slider.style.transition = 'none'; // Deshabilita la transición temporalmente
            posicionImg = 0; // Vuelve a la primera posición
            actualizarSlider(); // Actualiza a la primera imagen sin transición

            // Reactiva la transición para movimientos normales
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }, 500); // Espera el tiempo de la transición (0.5s en este caso)


    }

}

// Funcion para retroceder Imagen
function btnRetroceder() {
    if (posicionImg > 0) {
        posicionImg--
    } else {
        //posicionImg = longitud - 1
        // Ir a la última imagen
        slider.style.transition = 'none'; // Desactiva la transición
        posicionImg = longitud - 1;
        actualizarSlider();

        // Reactivar la transición para el movimiento normal
        setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease-in-out';
        }, 50);


    }
    actualizarSlider();
}

btnNext.addEventListener('click', btnAdelantar);
btnPrev.addEventListener('click', btnRetroceder);

setInterval(btnAdelantar, 3000);



