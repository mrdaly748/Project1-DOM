const totalPriceElement = document.querySelector('.total');
const productCards = document.querySelectorAll('.card-body');

function updateTotalPrice() {
  let total = 0;
  const updatedProductCards = document.querySelectorAll('.card-body');
  
  updatedProductCards.forEach(card => {
    const unitPrice = parseFloat(card.querySelector('.unit-price').innerText.replace('$', ''));
    const quantity = parseInt(card.querySelector('.quantity').innerText);
    total += unitPrice * quantity;
  });
  
  totalPriceElement.innerText = `${total} $`;
}

productCards.forEach(card => {
  const plusButton = card.querySelector('.fa-plus-circle');
  const minusButton = card.querySelector('.fa-minus-circle');
  const deleteButton = card.querySelector('.fa-trash-alt');
  const likeButton = card.querySelector('.fa-heart');
  const quantityElement = card.querySelector('.quantity');

  plusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;
    updateTotalPrice();
  });

  minusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
      quantity--;
      quantityElement.innerText = quantity;
      updateTotalPrice();
    }
  });

  deleteButton.addEventListener('click', () => {
    card.remove(); 
    updateTotalPrice(); 
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
    likeButton.style.color = likeButton.classList.contains('liked') ? 'red' : '#888';
  });
});


updateTotalPrice();
