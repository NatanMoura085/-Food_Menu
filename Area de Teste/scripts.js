// const btnMinus = document.getElementById("btn-minus");
// const btnPlus = document.getElementById("btn-plus");
// const num = document.getElementById("num");

// btnMinus.addEventListener("click", function() {
//   let val = parseInt(num.textContent);
//   if (val > 1) {
//     val--;
//     num.textContent = val;
//   }
// });

// btnPlus.addEventListener("click", function() {
//   let val = parseInt(num.textContent);
//   val++;
//   num.textContent = val;
// });

// const modal = document.getElementById('modal-info');
// const modalNome = document.getElementById('modal-info-nome');
// const modalPreco = document.getElementById('modal-info-preco');
// const modalClose = document.getElementById('modal-close');

// // exibir modal com informações do produto
// function showModal(produto) {
//   modalNome.textContent = produto.nome;
//   modalPreco.textContent = produto.preco.toFixed(2);
//   modal.classList.add('show');
// }

// // ocultar modal
// function hideModal() {
//   modal.classList.remove('show');
// }

// // adicionar evento de clique às tags tr
// const trs = document.querySelectorAll('tbody tr');
// trs.forEach(tr => {
//   const id = tr.dataset.id;
//   tr.addEventListener('click', event => {
//     event.preventDefault();
//     fetch(`${url}/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         showModal(data);
//       })
//       .catch(error => console.error(error));
//   });
// });

// // adicionar evento de clique ao botão Fechar do modal
// modalClose.addEventListener('click', event => {
//   hideModal();
// });

const content = document.getElementsByTagName(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.oninput = () => {
  content.innerHTML = "";

  items
    .filter((item) =>
      item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
};

function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

