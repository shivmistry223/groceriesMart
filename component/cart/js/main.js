const VEGETABLES = [
  {
    id: "v1",
    name: "Bitterground",
    img: "../vegetables/vegetable_image/bitterground.jpg",
    price: 1.79,
  },

  {
    id: "v2",
    name: "Cabbage",
    img: "../vegetables/vegetable_image/cabbage.jpg",
    price: 2.79,
  },
  {
    id: "v3",
    name: "Carrtos",
    img: "../vegetables/vegetable_image/CARROTS_resized.jpg",
    price: 1.99,
  },
  {
    id: "v4",
    name: "Cauliflower",
    img: "../vegetables/vegetable_image/cauliflower.jpg",
    price: 1.89,
  },
  {
    id: "v5",
    name: "Chilli",
    img: "../vegetables/vegetable_image/CHLLI_resized.jpg",
    price: 1.49,
  },
  {
    id: "v6",
    name: "Corriander",
    img: "../vegetables/vegetable_image/CORRIANDER.jpg",
    price: 2.79,
  },
  {
    id: "v7",
    name: "Garlic",
    img: "../vegetables/vegetable_image/GARLIC.jpg",
    price: 1.79,
  },
  {
    id: "v8",
    name: "Ginger",
    img: "../vegetables/vegetable_image/ginger.jpg",
    price: 1.79,
  },
{
    id : "v9",
    name: "Corn",
    price: 3.98,
    img: "../vegetables/vegetable_image/CORN.jpg",
},
{ 
    id : "v10",
    name: "pappers",
    price: 2.98,
    img: "../vegetables/vegetable_image/pappers.jpg"
},
{
    id : "v11",
    name: "Onion Bag",
    price: 2.98,
    img: "../vegetables/vegetable_image/ONION_BAG.jpg"
},
{ 
    id : "v12",
    name: "Tomatoes",
    price: 1.98,
    img: "../vegetables/vegetable_image/TOMATOES.jpg"
},
{ 
    id : "v13",
    name: "Egg Plant",
    price: 1.98,
    img: "../vegetables/vegetable_image/eggplant.jpg"
},
{ 
    id: "v7",
    name: "Garlic",
    price: 2.98,
    img: ".../vegetables/vegetable_image/GARLIC.jpg"
},
{
    
    id: "v14",
    name: "Potato Bag",
    price: 2.98,
    img: ".../vegetables/vegetable_image/patatoes.jpg"
},
{ 
    id: "v15",
    name: "Randish",
    price: 1.98,
    img: ".../vegetables/vegetable_image/randish.jpg"
},
{ 
    id: "v16",
    name: "Lime",
    price: 2.98,
    img: ".../vegetables/vegetable_image/lemon.jpg"
},
{
    id: "v17",
    name: "Sweet Potatoes",
    price: 2.98,
    img: ".../vegetables/vegetable_image/sweet_patatoes.jpg"
},
{
    id: "v18",
    name: "Green Pea",
    img: ".../vegetables/vegetable_image/greenpeas.jpg",
    price: 1.49
},
  {
    id: "f1",
    name: "Gala Apple",
    img: "../fruits/fruit_images/apple.jpg",
    price: 1.59,
  },

  {
    id: "f2",
    name: "Organic Avacados(4 pack)",
    img: "../fruits/fruit_images/avocado.jpg",
    price: 6.98,
  },
  {
    id: "f3",
    name: "Banana Manzano",
    img: "../fruits/fruit_images/banana.jpg",
    price: 0.29,
  },
  {
    id: "f4",
    name: "Blackberries",
    img: "../fruits/fruit_images/blackberries box.jpg",
    price: 7.47,
  },
  {
    id: "f5",
    name: "Watermelon, Sold in singles",
    img: "../fruits/fruit_images/watermelon.jpg",
    price: 5.99,
  },
  {
    id: "f6",
    name: "Dragonfruits",
    img: "../fruits/fruit_images/dragonfruit.jpg",
    price: 2.99,
  },
  {
    id: "f7",
    name: "Green & Black grapes",
    img: "../fruits/fruit_images/grapes.jpg",
    price: 2.99,
  },
  {
    id: "f8",
    name: "Godlen Kiwi",
    img: "../fruits/fruit_images/kiwi.jpg",
    price: 1.59,
  },
  {
    id: "f9", 
    name: "Indian kesar mango",
    price: 12.52,
    img: "../fruits/fruit_images/mango.jpg"
},
{
    id: "f10",
    name: "Orange, Seedless, Sold in singles",
    price: 1.23,
    img: "../fruits/fruit_images/orange.jpg"
},
{ 
    id : "f11",
    name: "pamegrates",
    price: 2.16,
    img: "../fruits/fruit_images/pamegrates.jpg"
},
{ 
    id: "f12",
    name: "Pears",
    price: 1.68,
    img: "../fruits/fruit_images/pears.jpg"
},
{
    
    id: "f13",
    name: "Pineapple, Golden Jumbo",
    price: 2.78,
    img: "../fruits/fruit_images/pinapple.jpg"
},
{ 
    id: "f14",
    name: "Plums",
    price: 0.98,
    img: "../fruits/fruit_images/plum.jpg"
},
{ 
    id: "f15",
    name: "stawberries box",
    price: 3.98,
    img: "../fruits/fruit_images/stawberries.jpg"
}
];

let totalPrice = 0;
function main() {
  if(!localStorage.getItem('orderno') || parseInt(localStorage.getItem('orderno')) == 3)
    localStorage.setItem('orderno',0);
  getData();
  $(".remove").click(function() {
    const itemId = $(this).data("product-id");
    removeCart(itemId);
  });
}

function getData() {
  const DATA = JSON.parse(localStorage.getItem("cart"));
  let cartItem = "";

  if ( !DATA || DATA.length == 0) {
    $("#title").text("Your Cart is Empty");
    $("#cart").hide();
  } else {
    $("#title").text("Your Cart");

    DATA.forEach(element => {
      // VEGETABLES.find(ele => ele.id == element.id);
      element = {...VEGETABLES.find(ele => ele.id == element.id), quantity: element.quantity};
      const itemTotalPrice = Math.round(element.price * element.quantity * 100)/100;
      totalPrice += itemTotalPrice;
      totalPrice = Math.round(totalPrice*100)/100;
      cartItem += `<div class="cart-item">
          <div class="left">
            <div class="img">
              <img src="${element.img}" alt="">
            </div>
            <div class="details">
              <h2>${element.name}</h2>
              <p
              data-product-id=${element.id} 
              >$ ${element.price}/lb</p>
            </div>
          </div>
          <div class="right">
            <div class="increment">
              <button id= "decrementBtn" class="mainButton" onclick = "decrementItems('${element.id}',${element.price})">-</button>
              <span id="itemCount${element.id}">${element.quantity}</span>
              <button id="incrementBtn" class="mainButton" onclick="incrementItems('${element.id}',${element.price})">+</button>
            </div>
            <div class="price">
              <h2>Total</h2>
              <p id= "totalPrice${element.id}" class="totalPrice">${itemTotalPrice} $</p>
            </div>
            <button class="remove" data-product-id="${element.id}">Remove</button>
          </div>
        </div>`;
    });

    $("#cart").append(cartItem);
    $("#totalBill").text("$ " + totalPrice);
  }
}

main();

const incrementItems = (id,price) =>{
  let itemQuantity = $(".increment #itemCount"+id).text();
  $(".increment #itemCount"+id).text(++itemQuantity);
  $(".right .price #totalPrice"+id).text((price * itemQuantity).toFixed(2) + " $");
  totalPrice += price
  totalPrice = Math.round(totalPrice * 100)/100;
  $("#totalBill").text("$ " + totalPrice);
  updateLocalStorageItem(id, {"quantity" : itemQuantity});
}

const decrementItems = (id,price) =>{
  let itemQuantity = $(".increment #itemCount"+id).text();
  if (itemQuantity > 1) {
    $(".increment #itemCount"+id).text(--itemQuantity);
    $(".right .price #totalPrice"+id).text((price * itemQuantity).toFixed(2) + " $");
    totalPrice -= price
    totalPrice = Math.round(totalPrice * 100)/100;
    $("#totalBill").text("$ " + totalPrice);
    updateLocalStorageItem(id, {"quantity" : itemQuantity});
  }
}
const removeCart = (id) =>{
  if(confirm("Are you sure to remove item?")){
    var currData = JSON.parse(localStorage.getItem("cart"));
    var updatedData = currData.filter((item) => item.id != id)
    localStorage.setItem("cart", JSON.stringify(updatedData));
    location.reload()
  }
}

const updateLocalStorageItem = (id, updatedData) => {
  const data = JSON.parse(localStorage.getItem('cart'));
  const itemIndex = data.findIndex(item => item.id === id);

  if (itemIndex !== -1) {
    data[itemIndex] = {
      ...data[itemIndex],
      ...updatedData
    };

    localStorage.setItem('cart', JSON.stringify(data));
  }
}


const checkOutItems = ()=>{
  $("#checkoutModel").modal('show');
}

$('#checkoutForm').on('submit', function (e) {
  e.preventDefault();
  $("#checkoutModel").remove();
  let orders = localStorage.getItem("orderItems");
  if(!orders)
    orders = {};
  else
    orders = JSON.parse(orders);
  if(parseInt(localStorage.getItem('orderno')) == 0)
    orders.order1 = localStorage.getItem('cart');
  else if(parseInt(localStorage.getItem('orderno')) == 1)
    orders.order2 = localStorage.getItem('cart');
  else
    orders.order3 = localStorage.getItem('cart');

  localStorage.setItem('orderno',parseInt(localStorage.getItem('orderno')) + 1);

  localStorage.setItem('orderItems',JSON.stringify(orders));
  localStorage.removeItem('cart');
  window.location.reload();
  window.location.href = "./order.html"
});

