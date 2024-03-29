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
  ];
  
function main(){

  getData()
  $(".remove").click(function(){
    const itemId = $(this).data("product-id")
    removeCart(itemId)
  })
}

function getData(){
    const DATA = JSON.parse(localStorage.getItem("cart"));
    let cartItem = ``;
    let totalPrice = 0;
    
    if(DATA.length == 0){
      $("#title").text("Your Cart is Empty")
      $("#cart").hide()
    }else{
      $("#title").text("Your Cart")
    

    DATA.forEach(element => {
      totalPrice += Math.round((VEGETABLES.find((obj) => obj.id == element.id).price * element.quantity * 100))/100;
        cartItem +=   `<div class="cart-item">
        <div class="left">
          <div class="img">
            <img src="${VEGETABLES.find((obj) => obj.id == element.id).img}" alt="">
          </div>
          <div class="details">
            <h2>${VEGETABLES.find((obj) => obj.id == element.id).name}</h2>
            <p
            data-product-id=${element.id} 
            >$ ${VEGETABLES.find((obj) => obj.id == element.id).price}/lb</p>
          </div>
        </div>
        <div class="right">
          <div class="increment">
            <button id="decrement" class="mainButton">-</button>
            <span id="total">${element.quantity}</span>
            <button id="increment" class="mainButton">+</button>
          </div>
          <div class="price">
            <h2>Total</h2>
            <p id="totalPrice">${Math.round((VEGETABLES.find((obj) => obj.id == element.id).price * element.quantity * 100))/100} $</p>
          </div>
          <button class="remove" data-product-id="${element.id}">Remove</button>
        </div>
      </div>`
    });
    
    $("#cart").append(cartItem)
    $("#totalBill").text("$ " + totalPrice)
  }

}

$("#decrement").click(function(){
    const total = $("#total").text();
    if(total <= 1){

        $("#total").text(1)
    }else{

        $("#total").text(total - 1)
    }
})

$("#increment").click(function(){
    let total = $("#total").text();
    total++;
    $("#total").text(total)
})

function removeCart(id){
  if(confirm("Are you sure to remove item?")){
    var currData = JSON.parse(localStorage.getItem("cart"));
    var updatedData = currData.filter((item) => item.id != id)
    localStorage.setItem("cart", JSON.stringify(updatedData));
    location.reload()
  }
}

main()