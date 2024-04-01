/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag); // função que exibe, mas não tem retorno
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); // texto será convertido em voz também
}

exibirMensagemInicial();

function verificarChute() { // função sem parâmetro e sem retorno
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
    console.log(chute == numeroSecreto); 

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    
    else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!')
    } 
    
    else {
        exibirTextoNaTela('p', 'O número secreto é maior!')
    }

    tentativas++
    //ou
    //tentativas = tentativas + 1

    limparCampo()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt((Math.random() * numeroLimite + 1));
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); // includes verifica se já apareceu na lista, se sim, retorna um novo numero.
    }
    else {
        listaNumerosSorteados.push(numeroEscolhido)  // add item ao final da lista
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}