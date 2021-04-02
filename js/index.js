// INDEX ####################################################3

const logoJuan = document.querySelector('.logo-juan');



window.addEventListener('load', () => {

    animarLogo();

});

function animarLogo() {
    logoJuan.classList.add('animacion');

    setTimeout(() => {
        window.location.href = './interfaz.html'
    }, 2500);
}