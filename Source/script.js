let carrinho = "Adicionado: ";
let mediaSelecionada = "";
let separadorNecessario = true;
let contadorMensagens = true;

function adicionarProdutoAoCarrinho(produto) {
    if (separadorNecessario) {
        carrinho += produto + mediaSelecionada;
    } else {
        carrinho += ", " + produto + mediaSelecionada;
    }
    separadorNecessario = false;
}

function selecionarMidia(midia) {
    mediaSelecionada = " - " + midia;
}

function atualizarSacola() {
    document.getElementById("sacola").innerHTML = carrinho;
}

function exibirMensagemConfirmacao() {
    if (contadorMensagens) {
        alert("Seu produto foi adicionado ao carrinho!");
        contadorMensagens = false;
    }
    
}

function adicionarProduto(nomeProduto) {
    if (mediaSelecionada == "") {
        alert("Selecione uma mídia do jogo!");
    } else {
        adicionarProdutoAoCarrinho(nomeProduto);
        atualizarSacola();
        exibirMensagemConfirmacao();
    } 
}

function exibirMensagemBemVindo() {
    alert("Seja bem-vindo(a) à Digital Games PlayStation!");
}

function destacaBotao(button) {
    var buttons = document.getElementsByClassName('btnmidia1');
    buttons = document.getElementsByClassName('btnmidia2');
    button.classList.add('btnMidiaSelec');
}

function desmarcaBotao(button) {
    button.classList.remove('btnMidiaSelec');
}


