'use strict';
const products = [
  {
    id: 15,
    name: 'Party Ware Gown',
  price: 1430,
   image: '/assets/dress2.PNG',
    categories: ['Women'],
  },
  {
        id: 1,
       name: 'Formal Shirt',
        price: 1500,
        image: '/assets/shirt-1.PNG',
        categories: ['Men'],
      },

      {
        id: 29,
        name: 'Sneakers',
      price: 2000,
       image: '/assets/shoes1.PNG',
        categories: ['Shoe'],
      },
    

        {
          id: 4,
          name: 'Casual Shirt',
          price: 1300,
          image: '/assets/shirt-3.PNG',
          categories: ['Men'],
        },

        {
          id: 5,
          name: 'Party Wear Saree',
          price: 4500,
          image: '/assets/saree1.PNG',
          categories: ['Women'],
        },

        {
          id: 8,
          name: 'panjabi',
          price: 1500,
          image: '/assets/panjabi1.PNG',
          categories: ['Men'],
        },

        {
          id: 9,
          name: 'Apple Watch',
        price: 6000,
         image: '/assets/appleWatch.PNG',
          categories: ['Electronics'],
        },
        {
          id: 10,
          name: 'BookShelf',
        price: 1400,
         image: '/assets/bookshelf.PNG',
          categories: ['Home Decor'],
        },
        {
          id: 11,
          name: 'Borqua',
        price: 1500,
         image: '/assets/borqua1.PNG',
          categories: ['Women'],
        },
        {
          id: 3,
          name: 'Casual Shirt',
          price: 1000,
          image: '/assets/shirt-3.PNG',
          categories: ['Men'],
        },
        {
          id: 7,
          name: 'Party Wear Saree',
          price: 3500,
          image: '/assets/saree3.PNG',
          categories: ['Women'],
        },
        {
          id: 19,
          name: 'Shirt & Pant',
        price: 1350,
         image: '/assets/kid3.PNG',
          categories: ['Kids'],
        },
        {
          id: 12,
          name: 'Abaya',
        price: 1900,
         image: '/assets/borqua2.PNG',
          categories: ['Women'],
        },
        {
          id: 13,
          name: 'CeraVe Moisturizer',
        price: 2200,
         image: '/assets/CeraVe.PNG',
          categories: ['Skin Care'],
        },
        {
          id: 14,
          name: 'Gown',
        price: 1500,
         image: '/assets/dress1.PNG',
          categories: ['Women'],
        },
        {
          id: 19,
          name: 'Party Frock',
        price: 1350,
         image: '/assets/kid2.PNG',
          categories: ['Kids'],
        },    
        {
          id: 17,
          name: 'Gown',
        price: 1500,
         image: '/assets/dress4.PNG',
          categories: ['Women'],
        },
        
        
        {
          id: 24,
          name: 'dell laptop',
        price: 85000,
         image: '/assets/laptop1.PNG',
          categories: ['Electronics'],
        },
        
        {
          id: 23,
          name: 'Panjabi for kid',
        price: 1000,
         image: '/assets/kid6.PNG',
          categories: ['Kids'],
        },
        
        {
          id: 25,
          name: 'macFoundation',
        price: 3500,
         image: '/assets/macFoundation.PNG',
          categories: ['Make Up'],
        },
        {
          id: 6,
          name: 'Party Wear Saree',
          price: 5000,
          image: '/assets/saree2.PNG',
          categories: ['Women'],
        },
        {
          id: 20,
          name: 'Shirt-Pant',
        price: 1400,
         image: '/assets/kid3.PNG',
          categories: ['Kids'],
        },
        {
          id: 26,
          name: 'LipStick set',
        price: 650,
         image: '/assets/handaiyan.PNG',
          categories: ['Make Up'],
        },
        {
          id: 16,
          name: 'Kurti',
        price: 1050,
         image: '/assets/dress3.PNG',
          categories: ['Women'],
        },
        {
          id: 27,
          name: 'Maskara',
        price: 600,
         image: '/assets/maskara.PNG',
          categories: ['Make Up'],
        },
        {
          id: 28,
          name: 'Ordinary Sirum',
        price: 2000,
         image: '/assets/ordinary.PNG',
          categories: ['Skin Care'],
        },
        
        
        {
          id: 21,
          name: 'Shirts',
        price: 1550,
         image: '/assets/kid4.PNG',
          categories: ['Kids'],
        },
        {
          id: 31,
          name: 'Shoes',
        price: 1500,
         image: '/assets/shoes3.PNG',
          categories: ['Shoe'],
        },
        {
          id: 32,
          name: 'Snail96',
        price: 1800,
         image: '/assets/snail96.PNG',
          categories: ['Skin Care'],
        },
        {
          id: 33,
          name: 'Samsung Tv',
        price: 40000,
         image: '/assets/tv1.PNG',
          categories: ['Electronics'],
        },
        {
          id: 34,
          name: 'SWall Hanging',
        price: 350,
         image: '/assets/wallHanging.PNG',
          categories: ['Home Decor'],
        },
        
        {
          id: 22,
          name: 'Ramper',
        price: 1500,
         image: '/assets/kid5.PNG',
          categories: ['Kids'],
        },
        {
          id: 30,
          name: 'Party Shoes',
        price: 1200,
         image: '/assets/shoes2.PNG',
          categories: ['Shoe'],
        },
        {
          id: 2,
      name: 'Casual Shirt',
      price: 1200,
      image: '/assets/shirt-2.PNG',
      categories: ['Men'],
      },
  
        {
          id: 35,
          name: 'WoodenCave',
        price: 400,
         image: '/assets/woodenCave.PNG',
          categories: ['Home Decor'],
        },
        {
          id: 18,
          name: 'Dress for kids',
        price: 900,
         image: '/assets/kid1.PNG',
          categories: ['Kids'],
        },
];


let carts = [];
let selectedCategory = null;
// function isProductExistInCart(productId){
//   const productIndex = carts.findIndex(function(product){
 
//     if(product.id === productId){ 
//       return true;
//     }
//     else{
//       return false;
//     }
//   });

//   if(productIndex=== -1){
//     return false;
//   }
//   return true;
// }

function isProductExistInCart(productId){
return carts.findIndex( (product) => product.id ===productId) !== -1 ; //ternary operator
}

function removeProductFromCart(productId){
  const productIndex = carts.findIndex(function(product) {
    return product.id == productId;
  });
  if(productIndex===-1){
    alert('Product is not in the cart.');
    return;
  }
  carts.splice(productIndex,1);
  renderCart(); //re-render cart.product remove korar por DOM khali korte hobe
}


function renderCart(){
  const cartItemList = document.getElementById('cart-items');
  cartItemList.innerHTML ='';
  carts.forEach(function (product){
    const cartItemListElement =document.createElement('li');
    cartItemListElement.innerText = `${product.name} - ${product.price}x ${1}`;

  const removeBtn = document.createElement('button');
  removeBtn.innerText ='Remove';
removeBtn.classList.add('text-red-500','ml-2');
removeBtn.addEventListener('click',function() {
  removeProductFromCart(product.id);
});
cartItemListElement.appendChild(removeBtn);

    cartItemList.appendChild(cartItemListElement);
  })
}

function getProductImageElement({productImage, productName}){
  
  const productImageElement = document.createElement('img');
  productImageElement.src = productImage;
  productImageElement.alt = productName;
  productImageElement.classList.add('w-full','mb-4');
  return productImageElement;
}

function getProductNameElement(productName){
 const productNameElement = document.createElement('h3');
 productNameElement.innerText =productName;
 productNameElement.classList.add('text-lg','font-semibold');
 return productNameElement;
}

function getProductPriceElement(productPrice){
  const productPriceElement = document.createElement('h3');
  productPriceElement.textContent =`${productPrice}`;
  productPriceElement.classList.add('text-grey-700');
  return productPriceElement;
 }

 function getAddToCartButton(product){
  const addToCartToBtn = document.createElement('button');
  addToCartToBtn.textContent = 'Add to Cart';
  addToCartToBtn.classList.add(
    'bg-blue-500',
    'hover:bg-blue-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'mt-2'
  );

  addToCartToBtn.addEventListener('click', function() {
  if(isProductExistInCart(product.id)){
    alert('This product is already in the cart.');
    return;
  }
    carts.push(product);
  renderCart();
  })

  return addToCartToBtn;
 }

function getProductCart(product){

  const cart =document.createElement('div');
  cart.classList.add('bg-white', 'p-4','rounded','shadow');

  const productImage = getProductImageElement({
    productImage: product.image,
    productName: product.name,
    
  });
  cart.appendChild(productImage);

  const productName = getProductNameElement(product.name);
  cart.appendChild(productName);

  const productPrice = getProductPriceElement(product.price);
  cart.appendChild(productPrice);

  const addToCartButton = getAddToCartButton(product);
  cart.appendChild(addToCartButton);
  
  return cart;
}


function renderProducts(){
const productListContainer = document.getElementById('product-list');
productListContainer.innerHTML ='';

let categorizedProducts = products;
if(selectedCategory){
  categorizedProducts = products.filter(function (product) {
return product.categories.includes(selectedCategory);
  });
}
categorizedProducts.forEach(function (product) {
 const productCart = getProductCart(product);
 productListContainer.appendChild(productCart);
});
}

function getProductCategories(){
  const productCategories = products.map(function(product){
    return product.categories;
  });
  
  const categoryFlatList = productCategories.flat();
  const uniqueCategories = new Set(categoryFlatList);
  return [...uniqueCategories];
}

function renderCategories(){
  const categoryContainer =document.getElementById('category-filters');
  categoryContainer.innerHTML='';

  const categories = getProductCategories();
  categories.forEach(function(category){
    const categoryBtn =document.createElement('button');
    categoryBtn.innerText = category
    categoryBtn.classList.add(
      'bg-gray-200',
      'hover:bg-gray-300',
      'text-gray-800',
      'font-semibold',
      'py-2',
      'px-4',
      'rounded',
      'mr-2'
    );
    categoryBtn.addEventListener('click',function(){
    selectedCategory = category;
    renderProducts();
    });
    categoryContainer.appendChild(categoryBtn);
  });
}

renderProducts();
renderCategories();

const clearFilterBtn =document.getElementById('clear-filters-btn');
clearFilterBtn.addEventListener('click',function(){
  selectedCategory = null;
  renderProducts();
})

const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click',function(){
  carts=[];
  renderCart();
});


