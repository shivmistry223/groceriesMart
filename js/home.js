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

  alert("Item has been added to cart")
  window.location.href = "component/cart/index.html"
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
  setCarouselData(VEGETABLES, "#product3");
  setCarouselData(FRUITS, "#product4");
  $(".cart").click(function () {
    const productId = $(this).data("product-id");
    addCart(productId);
  });

  //setSlick();
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
