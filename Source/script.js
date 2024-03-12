let produtoscarrinho = "Adicionado: "
let separador = true

function adicionarproduto(nomeproduto) {
    if (separador) {
        produtoscarrinho = produtoscarrinho + nomeproduto;
    }
    if (separador === false) {
        produtoscarrinho = produtoscarrinho + ", " + nomeproduto;
    } 
    separador = false;
    document.getElementById("sacola").innerHTML= produtoscarrinho 
    alert(nomeproduto + " foi adicionado ao carrinho!")
} 