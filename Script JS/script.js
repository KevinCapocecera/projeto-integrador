/* Quando o usuário clica no botão,
alterna entre esconder e mostrar o conteúdo do dropdown */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Feche o menu dropdown se o usuário clicar fora dele
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function adicionarProduto() {
    let descricao = 0; 
    
    descricao = document.getElementById("descricao").textContent;
    console.log(descricao);

    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];

    produtos.push(descricao);

    localStorage.setItem('carrinho', JSON.stringify(produtos));

}

function carregarCarrinho() {
    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    let lista = document.getElementById('lista-carrinho');
    lista.innerHTML = "";

    produtos.forEach(descricao => {
        let item = document.createElement('li');

        item.textContent = descricao;

        lista.appendChild(item);

    })

}

carregarCarrinho();


function remover() {
    var rem = document.getElementById("lista-carrinho");
    rem.removeChild(rem.lastElementChild);

    let produtos = JSON.parse(localStorage.getItem('carrinho')) || [];
    produtos.pop();     

    localStorage.setItem('carrinho', JSON.stringify(produtos));

    carregarCarrinho();

}