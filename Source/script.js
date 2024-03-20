let produtoscarrinho = "Adicionado: "
let separador = true
let contador = true

function CriarListaProdutos(produto) {
    if (separador) {
        produtoscarrinho = produtoscarrinho + produto;
    } else {
        produtoscarrinho = produtoscarrinho + ", " + produto;
    }
    separador = false;
}

function AdcProdSacola() {
    document.getElementById("sacola").innerHTML = produtoscarrinho
}

function MensagemConfirma() {
    if (contador) {
        alert("Seu produto foi adicionado ao carrinho!")
    }
    contador = false
}

function adicionarproduto(nomeproduto) {
    CriarListaProdutos(nomeproduto)
    AdcProdSacola()
    MensagemConfirma()
}

function MensagemBemVindo() {
    alert("Seja Bem vindo(a) à Digital Games PlayStation!")
}

var botaoMidiaFisica = document.getElementById("btnFisica");
var botaoMidiaDigital = document.getElementById("btnDigital");

function MidiaSelecionada(event) {
    var botaoClicado = event.target;
    if (botaoClicado === botaoMidiaFisica) {
        botaoMidiaFisica.classList.add("btnMidiaSelec");
        botaoMidiaDigital.classList.remove("btnMidiaSelec");
    } else if (botaoClicado === botaoMidiaDigital) {
        botaoMidiaDigital.classList.add("btnMidiaSelec");
        botaoMidiaFisica.classList.remove("btnMidiaSelec");
    }
}

botaoMidiaFisica.addEventListener("click", MidiaSelecionada);
botaoMidiaDigital.addEventListener("click", MidiaSelecionada);