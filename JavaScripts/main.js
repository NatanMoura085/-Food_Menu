// Acessando os elementos HTML do menu
const categoryList = document.querySelector('.category-list');
const menuItems = document.querySelectorAll('.menu-item');
const qtyButtons = document.querySelectorAll('.qty button');
const removeButtons = document.querySelectorAll('.remove');
const subTotal = document.querySelector('.info div:nth-child(1) span:nth-child(2)');
const total = document.querySelector('footer span:nth-child(2)');

// Inicializando variáveis de estado
let currentCategory = 'pizza';
let cartItems = [];
let cartTotal = 0;

// Função para atualizar a categoria atual e ocultar os itens de outras categorias
function updateCategory(category) {
  currentCategory = category;
  menuItems.forEach(item => {
    if (item.classList.contains(category)) {
      item.style.display = 'table-row';
    } else {
      item.style.display = 'none';
    }
  });
}

// Adicionando um ouvinte de eventos para cada botão de categoria
categoryList.addEventListener('click', event => {
  if (event.target.tagName === 'IMG' || event.target.tagName === 'P') {
    const category = event.target.parentNode.getAttribute('data-category');
    updateCategory(category);
  }
});

// Função para atualizar a quantidade de itens no carrinho
function updateQty(item, qty) {
  const qtySpan = item.querySelector('.qty span');
  const price = parseFloat(item.querySelector('.money').textContent.replace('R$ ', ''));
  const totalSpan = item.querySelector('td:nth-child(4)');
  const id = item.dataset.id;

  // Atualiza a quantidade no carrinho
  const existingItem = cartItems.find(item => item.id === id);
  if (existingItem) {
    existingItem.qty = qty;
  } else {
    cartItems.push({ id, qty, price });
  }

  // Atualiza a exibição da quantidade e do total na tabela
  qtySpan.textContent = qty;
  totalSpan.textContent = `R$ ${(qty * price).toFixed(2)}`;

  // Atualiza o subtotal e o total do carrinho
  cartTotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  subTotal.textContent = `R$ ${cartTotal.toFixed(2)}`;
  total.textContent = `R$ ${(cartTotal).toFixed(2)}`;
}

// Adicionando um ouvinte de eventos para cada botão de quantidade
qtyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentNode.parentNode.parentNode;
    const qtySpan = item.querySelector('.qty span');
    let qty = parseInt(qtySpan.textContent);
    if (button.id === 'btn-minus') {
      qty = Math.max(0, qty - 1);
    } else {
      qty++;
    }
    updateQty(item, qty);
  });
});

// Função para remover um item do carrinho
function removeItem(item) {
  const id = item.dataset.id;
  const existingItem = cartItems.find(item => item.id === id);
  if (existingItem) {
    cartItems = cartItems.filter(item => item.id !== id);
  }
  item.remove();
  cartTotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  subTotal.textContent = `R$ ${cartTotal.toFixed(2)}`;
  total.textContent = `R$ ${(cartTotal).toFixed(2)}`;
}

// Adicionando um ouvinte de
// eventos para cada botão de remover
removeButtons.forEach(button => {
    button.addEventListener('click', () => {
    const item = button.parentNode.parentNode;
    removeItem(item);
    });
    });
    
    // Função para exibir uma mensagem de confirmação de pedido e limpar o carrinho
    function placeOrder() {
    if (cartItems.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
    }
    const confirm = window.confirm(`Você tem certeza que deseja realizar o pedido no valor de R$ ${cartTotal.toFixed(2)}?`);
    if (confirm) {
    alert('Pedido realizado com sucesso!');
    cartItems = [];
    cartTotal = 0;
    subTotal.textContent = `R$ ${cartTotal.toFixed(2)}`;
    total.textContent = `R$ ${cartTotal.toFixed(2)}`;
    menuItems.forEach(item => {
    item.querySelector('.qty span').textContent = '0';
    item.querySelector('td:nth-child(4)').textContent = 'R$ 0.00';
    });
    }
    }
    
    // Adicionando um ouvinte de eventos para o botão de realizar pedido
    const orderButton = document.querySelector('#order-button');
    orderButton.addEventListener('click', placeOrder);

    