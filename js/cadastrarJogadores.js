const btnProximaEtapa = document.querySelector("#btn-proximaEtapa")
const containerCadastro = document.querySelector(".container-cadastro")
const containerCadastro2 = document.querySelector(".container-cadastro-2")
const btnVoltar = document.querySelector("#btn-voltar")

const dado = document.querySelector(".dado")
dado.style.display = "none"

btnProximaEtapa.addEventListener("click", () => {
    containerCadastro.style.display = "none"
    containerCadastro2.style.display = "flex"
})

btnVoltar.addEventListener("click", () => {
    containerCadastro.style.display = "flex"
    containerCadastro2.style.display = "none"
})


/* Receber dados */
const btnProxEtapa = document.querySelector("#btn-proximaEtapa")
const btnProxJogador = document.querySelector("#proxJogador");
const btnComecar = document.querySelector("#comecar")

let numJog = 0;
const nomes = [];
const personagens = [];
let i = 0;

btnProxEtapa.addEventListener("click", () => {
    numJog = parseInt(document.getElementById("numeroDeJogadores").value);
    //document.getElementById("btn-proximaEtapa").disabled = true;
    document.getElementById("nomeDoJogador").focus();
})

btnProxJogador.addEventListener("click", () => {
    const nome = document.getElementById("nomeDoJogador").value;
    const personagem = document.getElementById("opcoes").value;
    nomes[i] = nome;
    personagens[i] = personagem;
    i++;
    document.getElementById("nomeDoJogador").value = "";
    document.getElementById("opcoes").selectedIndex = 0;
    document.getElementById("nomeDoJogador").focus();
    if (i >= numJog) {
        alert("Todos os jogadores cadastrados!")
        /*document.getElementById("btn-proximaEtapa").disabled = true;
        document.getElementById("btn-voltar").disabled = true;
        document.getElementById("nomeDoJogador").disabled = true;
        document.getElementById("opcoes").disabled = true;
        document.getElementById("btn-comecar").disabled = false;*/
    }
})

const header = document.querySelector("header")

btnComecar.addEventListener("click", () => {
    i = 0;
    containerCadastro2.style.display = "none"
    containerCadastro.style.display = "none"
    header.style.display = "none"
    dado.style.display = "flex"
    document.addEventListener('keydown', function (e){
        if (i < numJog) {
            if(e.key === 'D' || e.key === 'd'){
                alert(`Vez de ${nomes[i]} - ${personagens[i]}`);
                i = (i + 1) % numJog;
            } else {
                alert("Tecla não identifacada")
            }
        } else {
            alert("Fechou o jogo");
        }
    })
})