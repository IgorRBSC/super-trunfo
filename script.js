
let cartas = [
    {
        nome: "Dragão",
        atributos: {
            ataque: 9,
            defesa: 7,
            magia: 5
        }
    },
    {
        nome: "Cavaleiro",
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 4
        }
    },
    {
        nome: "Feiticeiro",
        atributos: {
            ataque: 5,
            defesa: 4,
            magia: 10
        }
    }
];

let cartaMaquina, cartaJogador;

function sortearCarta() {
    let numeroMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroMaquina];

    let numeroJogador;
    do {
        numeroJogador = parseInt(Math.random() * 3);
    } while (numeroJogador === numeroMaquina);

    cartaJogador = cartas[numeroJogador];

    let opcoes = document.getElementById("opcoes");
    let opcoesTexto = "";
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type="radio" name="atributo" value="${atributo}">${atributo}<br>`;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    let radioAtributo = document.getElementsByName("atributo");
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let resultado = document.getElementById("resultado");
    if (!atributoSelecionado) {
        resultado.innerHTML = "Por favor, selecione um atributo!";
        return;
    }

    let valorJogador = cartaJogador.atributos[atributoSelecionado];
    let valorMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorJogador > valorMaquina) {
        resultado.innerHTML = "Você venceu!";
    } else if (valorJogador < valorMaquina) {
        resultado.innerHTML = "Você perdeu!";
    } else {
        resultado.innerHTML = "Empate!";
    }
}
