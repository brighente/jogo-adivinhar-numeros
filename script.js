let num = document.querySelector('input#number');
let res = document.getElementById('res');
let palpites = [];
let numSecreto = 0;
let tentativas = 0;

let indiceDificuldade = [50, 100, 200, 500];
let vetDificuldades = ["Fácil", "Médio", "Difícil", "Hardcore"];
let indexAtual = 0;
let dificuldade = document.getElementById('dificuldade');


function escolherDificuldade(direcao){
    indexAtual += direcao;
    if(indexAtual < 0){
        indexAtual = vetDificuldades.length - 1;
    }
    if(indexAtual >= vetDificuldades.length){
        indexAtual = 0;
    }

    dificuldade.innerText = vetDificuldades[indexAtual];

}



function iniciar(){
    numSecreto = Math.floor(Math.random() * indiceDificuldade[indexAtual]) + 1;
    palpites = [];
    res.innerHTML = `Jogo <strong>Iniciado!</strong> Arrisque um palpite!`
}

function verificar(){
    let number = Number(num.value)
    if(numSecreto == 0){
        res.innerHTML = `<strong>[ERRO]</strong> Inicie o Jogo antes de palpitar um valor!`

    } else if(number <= 0 || number > indiceDificuldade[indexAtual]){
        res.innerHTML = `Palpite<strong> INVÁLIDO!!</strong> Número fora do range estipulado!`
    } else if(palpites.indexOf(number) != -1){
        res.innerHTML = `Número <strong>REPETIDO!</strong> Tente novamente.`
    
    
    } else {
        palpites.push(Number(number));
        num.value = '';
        num.focus();
        tentativas++;
        
        if(number > numSecreto){
            res.innerHTML = `Palpite<strong> MAIOR </strong>que o número secreto!`
        } else if(number < numSecreto){
            res.innerHTML = `Palpite<strong> MENOR </strong>que o número secreto!`
        } else {
            res.innerHTML = `<p><strong>PARABÉNS!!</strong> Você descobriu o número secreto em <strong>${tentativas} tentativas!</strong> </p>`
            res.innerHTML += `<p>Para jogar novamente, clique no botão <strong>INICIAR JOGO</strong>!</p>`
        }
    }

}


