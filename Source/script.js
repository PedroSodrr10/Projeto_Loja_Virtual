let produtoscarrinho = "Adicionado: "
let separador = true
let contador = true

function criarListaProdutos(produto) {
    if (separador) {
        produtoscarrinho = produtoscarrinho + produto;
    } else {
        produtoscarrinho = produtoscarrinho + ", " + produto;
    }
    separador = false;
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
    criarListaProdutos(nomeproduto)
    adcProdSacola()
    mensagemConfirma()
}

function mensagemBemVindo() {
    alert("Seja Bem vindo(a) à Digital Games PlayStation!")
}

function destacaBotao(button) {
    var buttons = document.getElementsByClassName('btnmidia1');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('btnMidiaSelec');
    }
    buttons = document.getElementsByClassName('btnmidia2');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('btnMidiaSelec');
    }
    button.classList.add('btnMidiaSelec');
}

function desmarcaBotao(button) {
    button.classList.remove('btnMidiaSelec');
}
