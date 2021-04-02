//encabezado #######################################

const mensaje = document.querySelector('#mensaje');
const btnMensaje = document.querySelector('#btnMensaje');

//contenido ########################################

const contenido = document.querySelector('#contenido');
const logo = document.querySelector('.logo');
const spinner = document.querySelector('.spinner');
const cardTtest = document.querySelectorAll('.card-test');

//Nav #############################################
const test = document.querySelector('#test');

// global ########################################

const windowLocation = window.location.href;

//Preguntas ###########################################################
const testDespresion = document.querySelector('.test-despresion');
const play = document.querySelector('#play');
const play2 = document.querySelector('#play2');
const introduccion = document.querySelector('.introduccion');
const preguntas = document.querySelectorAll('.pregunta');

// Botones de respuesta del Test #################################################
const respuestas = document.querySelector('.respuestas');
const si = document.querySelectorAll('.si');
const no = document.querySelectorAll('.no');
const aveces = document.querySelectorAll('.aveces');
console.log(si);

let resultado = 0;
//Evens Listeners #####################################

document.addEventListener('DOMContentLoaded', eventListeners);


function eventListeners() {
    if (windowLocation.includes('interfaz.html')) {
        // document.addEventListener('DOMContentLoaded', saludo);
        test.addEventListener('click', paginaTest);
    }

    btnMensaje.addEventListener('click', () => mensaje.remove());

    if (windowLocation.includes('test.html')) {
        const depresionBtn = document.querySelector('.depresion');
        depresionBtn.addEventListener('click', runTest);
    }
    if (windowLocation.includes('depresion.html')) {
        play.addEventListener('click', runDepresion);
        play2.addEventListener('click', runDepresion);
        if (si) {
            si.forEach(e => {
                e.addEventListener('click', runDepresion);
                e.addEventListener('click', function() {
                    contador(si);
                });
            });
        }
        if (no) {
            no.forEach(e => {
                e.addEventListener('click', runDepresion);
                e.addEventListener('click', function() {
                    contador(no);
                });
            });
        }
        if (aveces) {
            aveces.forEach(e => {
                e.addEventListener('click', runDepresion);
                e.addEventListener('click', function() {
                    contador(aveces);
                });
            });
        }

    }

}

// funciones ################################################

function saludo() {
    mensaje.style.display = 'flex';
}

function paginaTest() {
    iniciarTest();
}


function star() {
    setTimeout(() => {
        spinner.style.display = 'block';
    }, 0);
    setTimeout(() => {
        spinner.style.display = 'none';
    }, 500);
}

function url(url) {
    setTimeout(() => {
        window.location.href = `${url}`;
    }, 500);
}

function displayOff(tag) {
    tag.style.display = 'none';
}



// Test ###############################################

function iniciarTest() {
    displayOff(logo);
    star();
    url('./test.html');
}


function runTest() {
    cardTtest.forEach(cards => {
        cards.style.display = 'none';
    });
    star();
    url('./depresion.html');
}


let cicloDelTest = 0;

function runDepresion() {

    introduccion.style.display = 'none';
    star();
    ejecucionTest(cicloDelTest);
    // respuestaBtn();
    cicloDelTest += 1;

}


function ejecucionTest(vuelta) {


    let vueltaAnterior = vuelta - 1;
    let vueltas = vuelta;

    if (vuelta <= 12) {
        if (vuelta >= 1) {
            preguntas[vueltaAnterior].remove();
            // preguntas[vueltaAnterior].style.display = 'none';
        }
        setTimeout(() => {
            preguntas[vueltas].style.display = 'block'
        }, 500);
        console.log(vuelta);

    } else {
        while (contenido.firstChild) {
            contenido.removeChild(contenido.firstChild);

        }
        mostrarResultado(resultado);
    }

}

function contador(valor) {
    switch (valor) {
        case si:
            resultado += 2;
            break;

        case no:
            resultado += 0;
            break;

        case aveces:
            resultado += 1;
            break;
        default:
            break;
    }
    console.log('estamos listos');
    console.log('el resultado es', resultado);
}

function mostrarResultado(resultado) {


    let total = document.createElement('div');
    total.classList.add('total', 'style-depresion', 'centrar-contenido');

    if (resultado >= 20) {
        total.innerHTML = `
        <span>Riesgo ALTO</span>
        <br>
        Podrías padecer depresión, de igual forma, es necesario que consultes a un profesional de la salud para que te diagnostique objetivamente). 
        `;
    } else if (resultado >= 12 && resultado <= 19) {
        total.innerHTML = `
        <span>Riesgo MODERADO</span>
        <br>
        Pudieras estar pasando por una situación difícil en tu vida. Debes cuidar tus emociones y abrirte con las demás personas si necesitas un consejo o ayuda. 
        `;
    } else if (resultado >= 6 && resultado <= 11) {
        total.innerHTML = `
        <span>Riesgo LEVE</span>
        <br>
        Tienes un vaivén de emociones. Es normal a veces tener una crisis, lo importante es que no la dejes crecer. 
        `;
    } else if (resultado >= 1 && resultado <= 6) {
        total.innerHTML = `
        <span>Riesgo BAJO</span>
        <br>
        Sentirse triste o a veces incómodo (a) es algo natural de la vida. Tus emociones están para protegerte y siempre te avisan sobre tu estado mental. Deja que fluyan para luego regresar a la normalidad.  
        `;
    }

    contenido.appendChild(total);

    setTimeout(() => {
        while (contenido.firstChild) {
            contenido.removeChild(contenido.firstChild);
        }

        let finalmente = document.createElement('div');
        finalmente.classList.add('total', 'style-depresion', 'centrar-contenido');
        finalmente.innerHTML = `
        La salud mental y la física no son estables. Hay momentos en los que requerimos la atención de un médico y un psicólogo ante alteraciones del cuerpo y de la mente. No está mal requerir de sus servicios ya que estás en pro de tu salud integral.
        Recuerda cuidar tu cuerpo y convertir tu mente en tu mejor aliada en tu camino de la vida. <br>
        Muchas gracias y un abrazo <br>


        `;
        contenido.appendChild(finalmente);

    }, 15000);

    setTimeout(() => {
        url('./index.html');
    }, 35000);

}