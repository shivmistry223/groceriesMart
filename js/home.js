const $carousel = $(".carousel");
const $slides = $(".carousel-slide");
let currentIndex = 0;

const VEGETABLES = [
  {
    id: "v1",
    name: "Bitterground",
    img: "./component/vegetables/vegetable_image/bitterground.jpg",
    price: 1.79,
  },

  {
    id: "v2",
    name: "Cabbage",
    img: "./component/vegetables/vegetable_image/cabbage.jpg",
    price: 2.79,
  },
  {
    id: "v3",
    name: "Carrtos",
    img: "./component/vegetables/vegetable_image/CARROTS_resized.jpg",
    price: 1.99,
  },
  {
    id: "v4",
    name: "Cauliflower",
    img: "./component/vegetables/vegetable_image/cauliflower.jpg",
    price: 1.89,
  },
  {
    id: "v5",
    name: "Chilli",
    img: "./component/vegetables/vegetable_image/CHLLI_resized.jpg",
    price: 1.49,
  },
  {
    id: "v6",
    name: "Corriander",
    img: "./component/vegetables/vegetable_image/CORRIANDER.jpg",
    price: 2.79,
  },
  {
    id: "v7",
    name: "Garlic",
    img: "./component/vegetables/vegetable_image/GARLIC.jpg",
    price: 1.79,
  },
  {
    id: "v8",
    name: "Ginger",
    img: "./component/vegetables/vegetable_image/ginger.jpg",
    price: 1.79,
  },
];

const FRUITS = [
  {
    id: "f1",
    name: "Gala Apple",
    img: "./component/fruits/fruit_images/apple.jpg",
    price: 1.59,
  },

  {
    id: "f2",
    name: "Organic Avacados(4 pack)",
    img: "./component/fruits/fruit_images/avocado.jpg",
    price: 6.98,
  },
  {
    id: "f3",
    name: "Banana Manzano",
    img: "./component/fruits/fruit_images/banana.jpg",
    price: 0.29,
  },
  {
    id: "f4",
    name: "Blackberries",
    img: "./component/fruits/fruit_images/blackberries box.jpg",
    price: 7.47,
  },
  {
    id: "f5",
    name: "Watermelon, Sold in singles",
    img: "./component/fruits/fruit_images/watermelon.jpg",
    price: 5.99,
  },
  {
    id: "f6",
    name: "Dragonfruits",
    img: "./component/fruits/fruit_images/dragonfruit.jpg",
    price: 2.99,
  },
  {
    id: "f7",
    name: "Green & Black grapes",
    img: "./component/fruits/fruit_images/grapes.jpg",
    price: 2.99,
  },
  {
    id: "f8",
    name: "Godlen Kiwi",
    img: "./component/fruits/fruit_images/kiwi.jpg",
    price: 1.59,
  },
];

const DAIRY = [
  {
    id: "d1",
    name: "Sealtest Homogenized",
    img: "./component/dairy/dairy_images/MILK1.png",
    price: 6.89,
  },
  {
    id: "d2",
    name: "Natrel Fine-filtered 2% Milk, 2 L",
    img: "./component/dairy/dairy_images/Chocolate Milk.png",
    price: 5.38,
  },
  {
    id: "d3",
    name: "Sealtest 1% Buttermilk, 1 L",
    img: "./component/dairy/dairy_images/Buttermilk.png",
    price: 2.47,
  },
  {
    id: "d4",
    name: "Gay Lea Salted Butter, 454 g, 1 lb",
    img: "./component/dairy/dairy_images/butter.png",
    price: 4.87,
  },
  {
    id: "d5",
    name: "Great Value Unsalted Butter, 454 g",
    img: "./component/dairy/dairy_images/Butter Unsalted.png",
    price: 5.48,
  },
  {
    id: "d6",
    name: "Brar's Malai Paneer, 375 g",
    img: "./component/dairy/dairy_images/Paneer.png",
    price: 5.97,
  },
  {
    id: "d7",
    name: "Great Value Old Cheddar Cheese, 400 g",
    img: "./component/dairy/dairy_images/Cheese.png",
    price: 4.44,
  },
  {
    id: "d8",
    name: "Great Value Pizza Mozzarella Cheese, 400 g",
    img: "./component/dairy/dairy_images/Cheese2.png",
    price: 5.98,
  },
];

const BAKERY = [
  {
    id: "b1",
    name: "All Butter Croissants, 6 croissants, 270 g",
    img: "./component/bakery/baakery_images/Croissants.png",
    price: 4.97,
  },
  {
    id: "b2",
    name: "Wonder White Sliced Bread, 675 g",
    img: "./component/bakery/baakery_images/white bread.png",
    price: 2.97,
  },
  {
    id: "b3",
    name: "Dempster’s® White Sliced Bread, 675 g",
    img: "./component/bakery/baakery_images/D_white bread.png",
    price: 3.57,
  },
  {
    id: "b4",
    name: "CHIPS AHOY!",
    img: "./component/bakery/baakery_images/chips ahoy.png",
    price: 3.48,
  },
  {
    id: "b5",
    name: "CHIPS AHOY!",
    img: "./component/bakery/baakery_images/chips ahoy2.png",
    price: 3.48,
  },
  {
    id: "b6",
    name: "Oreo",
    img: "./component/bakery/baakery_images/oreo.png",
    price: 3.48,
  },
  {
    id: "b7",
    name: "Apple Turnovers, 6 pieces, 504 g",
    img: "./component/bakery/baakery_images/turnovers.png",
    price: 4.97,
  },
  {
    id: "b8",
    name: "Banana Bread Chocolate Chip, 8 Pack",
    img: "./component/bakery/baakery_images/Banana bread.png",
    price: 4.47,
  },
];

function showSlide(index, $slides, $carousel) {
  if (index < 0) {
    currentIndex = $slides.length - 1;
  } else if (index >= $slides.length) {
    currentIndex = 0;
  }

  $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
}

const autoAdvanceInterval = 3000; // Change slide every 3 seconds

setInterval(function () {
  currentIndex++;
  showSlide(currentIndex, $slides, $carousel);
}, autoAdvanceInterval);

function addCart(id) {
  var quantity = $("#" + id).val();
  var myObj = { id, quantity };
  var currData = JSON.parse(localStorage.getItem("cart"));

  if (currData) {
    var currObj = currData.find((obj) => obj.id == id);

    if (currObj) {
      currObj.quantity = parseInt(currObj.quantity) + parseInt(quantity);
      const currIndex = currData.findIndex((obj) => obj.id == id);
      currData[currIndex] = currObj;
    } else {
      currData.push(myObj);
    }
    localStorage.setItem("cart", JSON.stringify(currData));
  } else {
    var myObjStr = JSON.stringify([myObj]);
    localStorage.setItem("cart", myObjStr);
  }

  alert("Item has been added to cart");
  window.location.href = "component/cart/index.html";
}

function setCarouselData(ITEM = [], id) {
  let carouselHtml = ``;
  let cartIcon = "./images/icons/add-cart.png";
  ITEM.forEach((item, index) => {
    carouselHtml += `<div class="product-slide">
    <img
      src="${item.img}"
      alt="Image 3"
      class="caro-image"
    />
     <div class="detail-container">
      <div class="price-container">
        <h3>${item.name}</h3>
        <p>$${item.price}/lb</p>
        <div class="quantity-container">
          <input
            type="number"
            name="q"
            id=${item.id}
            value="1"
            min="1"
            max="10"
          />
        </div>
      </div>
      <img
        src="${cartIcon}"
        alt="add-cart"
        class="cart"
        data-product-id="${item.id}"
      />
    </div>
  </div>`;
  });

  $(id).append(carouselHtml);
}

function setData() {
  setCarouselData(VEGETABLES, "#product1");
  setCarouselData(FRUITS, "#product2");
  setCarouselData(DAIRY, "#product3");
  setCarouselData(BAKERY, "#product4");
  $(".cart").click(function () {
    const productId = $(this).data("product-id");
    addCart(productId);
  });

  setSlick();
}

function setSlick() {
  $(".product").slick({
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

$(document).ready(function () {
  setData();
});
