// ITERATION 1
let result = 0;
function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');

  result = price * quantity;
  subtotal.textContent = price * quantity;
  //console.log(result)
  return result;
}

function calculateAll() {
  let cardTotal = 0;
  let totalValue = document.querySelector('#total-value span');
  const allProduct = document.querySelectorAll('.product');

  allProduct.forEach(oneProduct => {
    updateSubtotal(oneProduct)
    cardTotal += result;
    // console.log('result =', result)
    // console.log('cardtotal =', cardTotal)
    totalValue.textContent = cardTotal;
  });
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5
const createButton = document.querySelector('#create.btn');

createButton.addEventListener('click', createProduct())

function createProduct() {
  const newName = document.querySelector('#newProductName').textContent;
  const newPrice = document.querySelector('#newProductPrice').value;
  const cartTable = document.querySelector('tbody');

  const newRow = cartTable.createElement('tr')
  newRow.className = 'product'
  const newProductName = newRow.createElement('name')
  const newProductPrice = newRow.createElement('price')



  //const newDiv = document.createElement("div");

  // and give it some content
  //const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  //newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  //const currentDiv = document.getElementById("div1");
  //document.body.insertBefore(newDiv, currentDiv);


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
