// Selecione todos os links da lista de categoria
const categoryLinks = document.querySelectorAll('.category-list a');

// Adicione um ouvinte de eventos de clique a cada link da categoria
categoryLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Obtenha o tipo de comida correspondente a partir do atributo 'data-category'
    const category = link.parentNode.dataset.category;

    // Selecione todos os itens do menu e oculte-os
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.style.display = 'none';
    });

    // Selecione os itens do menu correspondentes ao tipo de comida e exiba-os
    const categoryItems = document.querySelectorAll('.menu-item.' + category);
    categoryItems.forEach(item => {
      item.style.display = 'block';
    });
  });
});


// Seleciona os elementos do DOM
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const money = document.getElementsByClassName('.money')
const numElement = document.getElementById('num');

// Define o valor inicial do número exibido
let num = 0;
let mona = 720;

// Adiciona um listener de evento de clique no botão de subtração
btnMinus.addEventListener('click', function() {
  // Verifica se o número atual é maior que zero antes de diminuí-lo
  if (num > 0) {
    num--;
    numElement.textContent = num;
   
  }
});

// Adiciona um listener de evento de clique no botão de adição
btnPlus.addEventListener('click', function() {
  num++;
  numElement.textContent = num;

});
