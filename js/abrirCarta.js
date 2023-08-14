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
