let produtoscarrinho = "Adicionado: "
let midia = ""
let separador = true
let contador = true

function criarListaProdutos(produto) {
    if (separador) {
        produtoscarrinho = produtoscarrinho + produto + midia;
    } else {
        produtoscarrinho = produtoscarrinho + ", " + produto + midia;
    }
    separador = false;
}

function capturaMidia(midiacapturada) {
    midia = " - " + midiacapturada
}

function adcProdSacola() {
    document.getElementById("sacola").innerHTML = produtoscarrinho
}

function mensagemConfirma() {
    if (contador) {
        alert("Seu produto foi adicionado ao carrinho!")
    }
    contador = false
}

function adicionarproduto(nomeproduto) {
    if (midia == "") {
        alert("Selecione uma mídia do jogo!")
    } else {
        criarListaProdutos(nomeproduto)
        adcProdSacola()
        mensagemConfirma()
    } 
}

function mensagemBemVindo() {
    alert("Seja Bem vindo(a) à Digital Games PlayStation!")
}

function destacaBotao(button) {
    var buttons = document.getElementsByClassName('btnmidia1');
    buttons = document.getElementsByClassName('btnmidia2');
    button.classList.add('btnMidiaSelec');
}

function desmarcaBotao(button) {
    button.classList.remove('btnMidiaSelec');
}


