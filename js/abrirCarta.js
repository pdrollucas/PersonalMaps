//Abrir clicando no título
const cartas = document.querySelectorAll(".carta");
const cartaInstrucao = document.querySelector(".carta-instrucoes")

function esconderCartasExceto(cartaExibida) {
    cartas.forEach(carta => {
        if (carta !== cartaExibida) {
            carta.style.display = "none";
        }
    });
    cartaInstrucao.style.display = "grid";
}

for (let i = 1; i <= cartas.length; i++) {
    const btn = document.querySelectorAll(`#btn${i}`);

    btn.forEach(b => {
        b.addEventListener('click', function () {
            const cartaExibida = document.querySelector(`.carta-${i}`);
            if (cartaExibida.style.display === "none") {
                esconderCartasExceto(cartaExibida);
                cartaExibida.style.display = "grid";
                cartaInstrucao.style.display = "none"
            } else {
                esconderCartasExceto();
            }
        });
    });
}

//Abrir colocando no box
const containers = document.querySelectorAll(".container-soltar")

containers.forEach((container) => {
    container.addEventListener('drop', dropImage)
})

function dropImage(e){
    e.preventDefault();
    e.target.append(beingDragged)
    abrirCarta(e.target)
}

function abrirCarta(container){
    const cartaNumero = container.getAttribute('data-container');
    const cartaExibida = document.querySelector(`.carta-${cartaNumero}`);
    if (cartaExibida) {
        esconderCartasExceto(cartaExibida);
        cartaExibida.style.display = "grid";
        cartaInstrucao.style.display = "none";
    }
}