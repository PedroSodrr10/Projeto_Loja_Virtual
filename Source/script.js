let produtoscarrinho = "Adicionado: "

function adicionarproduto(nomeproduto) {
    produtoscarrinho = produtoscarrinho + ", " + nomeproduto;
    document.getElementById("sacola").innerHTML= produtoscarrinho 
    alert(nomeproduto + " foi adicionado ao carrinho!")
} 