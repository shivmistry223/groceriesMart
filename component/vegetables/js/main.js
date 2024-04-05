import {VEGETABLES_LIST} from '../../../js/Products_List.js'

document.addEventListener("DOMContentLoaded", function() {
    // Array of product objects

    const productContainer = document.getElementById("product-container");

    function addToCart(id) {
        var quantity = $("#quantity" + id).val();
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
        window.location.href = "../cart/index.html";
      }

    // Function to handle saving product
    function saveProduct(id) {
            if ($('#' + id).attr("src") === '../../images/icons/heartfill.png') {
                $('#' + id).attr("src", '../../images/icons/heart.png');
              } else {
                $('#' + id).attr("src", '../../images/icons/heartfill.png');
              }
            let likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
            if (likedProducts.includes(id)) {
                likedProducts = likedProducts.filter(productId => productId !== id);
                localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
            } 
            else {
                likedProducts.push(id);
                localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
            }
    }

    // Function to display product details
    function displayProductDetails(product) {
        // Create a modal or navigate to a new page to display product details
        window.location.href = "productdetail.html?productId=" + encodeURIComponent(JSON.stringify({"id" : product.id}));
    }

    // Loop through products array and generate HTML for each product
    VEGETABLES_LIST.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Product Image";
        productImage.classList.add("product-image");

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productName = document.createElement("h2");
        productName.classList.add("product-name");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price;

        
        const quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity-selector');

        const label = document.createElement('label');
        label.setAttribute('for', 'quantity'+product.id);
        label.textContent = 'Quantity: ';

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', 'quantity'+product.id);
        input.setAttribute('name', 'quantity');
        input.setAttribute('value', '1');
        input.setAttribute('min', '1');
        input.setAttribute('max', '10');


        quantityContainer.appendChild(label);
        quantityContainer.appendChild(input);


        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");
        const addToCartButton = document.createElement("img");
        addToCartButton.src = '../../images/icons/add-cart.png'; 
        addToCartButton.alt = "Add to Cart";
        addToCartButton.classList.add("add-to-cart-img"); 
        addToCartButton.addEventListener("click", () => addToCart(product.id));

        const heartIcon = document.createElement("img");
        heartIcon.classList.add("heartIcon");
        heartIcon.id = 'heartIcon' + product.id
        heartIcon.src = "../../images/icons/heart.png";
        heartIcon.alt = "Like Image";
        heartIcon.addEventListener("click", () => saveProduct(heartIcon.id));

        buttonsDiv.appendChild(addToCartButton);
        buttonsDiv.appendChild(heartIcon);

        productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(quantityContainer);
        productInfo.appendChild(buttonsDiv);

        productDiv.appendChild(productImage);
        productDiv.appendChild(productInfo);

        // Add click event listener to display product details
        productImage.addEventListener("click", () => displayProductDetails(product));

        productContainer.appendChild(productDiv);
    });
    setHeartIcons();
});


const setHeartIcons = ()=>{
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
    likedProducts.forEach(productId => {
        $('#' + productId).attr('src','../../images/icons/heartfill.png');    });
}