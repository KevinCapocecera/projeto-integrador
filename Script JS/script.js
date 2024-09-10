/* Quando o usuário clica no botão,
alterna entre esconder e mostrar o conteúdo do dropdown */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Feche o menu dropdown se o usuário clicar fora dele
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Código do Carrinho
function adicionarProduto() {
  // Obter o elemento que contém o preço
  let productItem = document.querySelector(".product-item");

  // Obter o valor da quantidade do campo de entrada
  let quantidade = parseInt(
    document.getElementById("produto-quantidade").value,
    10
  );

  // Obter o preço do atributo de dados
  let precoUnitario = parseFloat(productItem.getAttribute("data-preco"));

  // Calcular o preço total
  let precoTotal = quantidade * precoUnitario;

  // Criar uma descrição com quantidade, preço unitário e preço total
  let descricao = `Quantidade: ${quantidade}, Preço Unitário: R$${precoUnitario.toFixed(
    2
  )}, Preço Total: R$${precoTotal.toFixed(2)}`;

  console.log(descricao); // Para depuração: verifique no console se a descrição está correta

  // Obter produtos do localStorage ou criar um array vazio se não existirem produtos
  let produtos = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Adicionar a descrição ao array de produtos
  produtos.push(descricao);

  // Salvar o array atualizado de volta no localStorage
  localStorage.setItem("carrinho", JSON.stringify(produtos));
}

function carregarCarrinho() {
  let produtos = JSON.parse(localStorage.getItem("carrinho")) || [];
  let lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";

  produtos.forEach((descricao) => {
    let item = document.createElement("li");

    item.textContent = descricao;

    lista.appendChild(item);
  });
}

carregarCarrinho();

function remover() {
  var rem = document.getElementById("lista-carrinho");
  rem.removeChild(rem.lastElementChild);

  let produtos = JSON.parse(localStorage.getItem("carrinho")) || [];
  produtos.pop();

  localStorage.setItem("carrinho", JSON.stringify(produtos));

  carregarCarrinho();
}
