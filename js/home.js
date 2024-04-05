import {VEGETABLES_LIST, FRUITS_LIST, DAIRY_LIST, BAKERY_LIST} from './Products_List.js'

const $carousel = $(".carousel");
const $slides = $(".carousel-slide");
let currentIndex = 0;


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
  setCarouselData(VEGETABLES_LIST, "#product1");
  setCarouselData(FRUITS_LIST, "#product2");
  setCarouselData(DAIRY_LIST, "#product3");
  setCarouselData(BAKERY_LIST, "#product4");
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
  console.log(VEGETABLES_LIST);
});
