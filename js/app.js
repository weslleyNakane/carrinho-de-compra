//para comecar com tudo zerado no carrinho
let totalgeral= 0;
document.getElementById("lista-produtos").innerHTML= `` ;
document.getElementById("valor-total").innerHTML =  ``;


function adicionar (){
    //recuperar valores nome do produto,quantidade e valor
    let produto = document.getElementById("produto").value;
    //spli serve para pegar um texto e ignorar o restante apartir do caracter informado e da posicao partindo de 0
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade= document.getElementById("quantidade").value;
     //calcular o preco e o nosso subtotal
    let valorTotal =  quantidade * valorUnitario ;

    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos");
    //fazendo com que os intens adicionados no carrinho nao sejam substituidos pelos novos clicados
    carrinho.innerHTML = carrinho.innerHTML +`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;


    //atualizar o valor total
    totalgeral=totalgeral + valorTotal;
    let valorDoCarrinho = document.getElementById("valor-total");
    valorDoCarrinho.textContent= `R$ ${totalgeral}`;
    //para zerar o contador cada vez que adicionar um item no carrinho 
    document.getElementById("quantidade").value = ``;


    //limpar campos

}

function limpar(){
   
document.getElementById("lista-produtos").innerHTML= `` ;
document.getElementById("valor-total").innerHTML = ``;

}