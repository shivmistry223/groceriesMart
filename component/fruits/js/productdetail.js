const products = [
    { 
        id: "f1",
        name: "Apple, Gala, Sold in singles, 0.13 - 0.18 kg",
        price: "$0.98 each",
        image: "fruit_images/apple.jpg",
        origin: "USA",
        expiredate:"29/04/2024",
        vitamins:"C, B1, B2, B3, B5, B6",
        weight: " around 200 Gm"
    },
    { 
        id: "f2",
        name: "Healthy Market Organic Avocados, Pack of 4",
        price: "$5.98 per Bag",
        image: "fruit_images/avocado.jpg",
        origin: "Canada",
        expiredate:"19/04/2024",
        vitamins:"K , B9, C, A",
        weight: "around 800 gm"
    },
    {
        id : "f3",
        name: "Organic Banana, Sold in singles",
        price: "0.85 per piece",
        image: "fruit_images/banana.jpg",
        origin: "Canada",
        expiredate:"10/04/2024",
        vitamins:"C, B2, B6",
        weight: "0.15 - 0.24 kg"
    },
    { 
        id: "f4",
        name: "Blackberries, 170 g",
        price: "$4.98 per container",
        image: "fruit_images/blackberries box.jpg",
        origin: "Canada",
        expiredate:"30/04/2024",
        vitamins:"A, C, B12, B6",
        weight: "170 gm"
    },
    { 
        id : "f6",
        name: "Great Value Dragon Fruit",
        price: "$1.98 each",
        image: "fruit_images/dragonfruit.jpg",
        origin: "India",
        expiredate:"18/04/2024",
        vitamins:"B2, B6",
        weight: "400-500 Gm"
    },
    {
        id : "f7",
        name: "Black or Red Seedless Grapes, 1 Bag",
        price: "$3.58 per Bag",
        image: "fruit_images/grapes.jpg",
        origin: "China",
        expiredate:"10/04/2024",
        vitamins:"B6",
        weight: " 1 Kg"
    },
    { 
        id : "f8",
        name: "Kiwis, 1.3 lbs",
        price: "$1.48 each",
        image: "fruit_images/kiwi.jpg",
        origin: "India",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "1.3 lbs"
    },
    {
        id: "f9", 
        name: "Indian kesar mango",
        price: "$12.52 per box",
        image: "fruit_images/mango.jpg",
        origin: "India",
        expiredate:"18/05/2024",
        vitamins:"A, B12, B6",
        weight: "10 lbs"
    },
    {
        id: "f10",
        name: "Orange, Seedless, Sold in singles",
        price: "$1.23 each",
        image: "fruit_images/orange.jpg",
        origin: "India",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "0.25 - 0.28 kg"
    },
    { 
        id : "f11",
        name: "pamegrates",
        price: "$2.16 per lb",
        image: "fruit_images/pamegrates.jpg",
        origin: "USA",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "400gm"
    },
    { 
        id: "f12",
        name: "Pears",
        price: "$1.68 per lb",
        image: "fruit_images/pears.jpg"
    },
    {
        
        id: "f13",
        name: "Pineapple, Golden Jumbo",
        price: "$2.78 each",
        image: "fruit_images/pinapple.jpg",
        weight: "2.05-2.29 kg each"
    },
    { 
        id: "f14",
        name: "Plums",
        price: "$0.98 per lb",
        image: "fruit_images/plum.jpg",
        origin: "India",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "2 lb"
    },
    { 
        id: "f15",
        name: "stawberries box",
        price: "$3.98 per box",
        image: "fruit_images/stawberries.jpg"
    },
    {
        id: "f5",
        name: "Freshi Market Watermelon",
        price: "$2.98 per lb",
        image: "fruit_images/watermelon.jpg"
    }
   
];
    

document.addEventListener("DOMContentLoaded", function() {
    // Get the product details from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productJson = urlParams.get('productId');

    if (productJson) {
        const id = JSON.parse(decodeURIComponent(productJson)).id;
        const product = products.find((obj) => obj.id === id)

        // Display the product details on the page
        const productNameElement = document.getElementById("product-name");
        const productPriceElement = document.getElementById("product-price");
        const productImageElement = document.getElementById("product-image");
        const productWeight = document.getElementById("product-weight");
        const productVitamins = document.getElementById("product-vitamins");
        const productOrigin = document.getElementById("product-origin");
        const productExpiredate = document.getElementById("product-Expiredate");
        const productdescription = document.getElementById("product-description");


        productNameElement.textContent = product.name || "Product Name";
        productPriceElement.textContent = product.price || "Price not available";
        productImageElement.src = product.image || "";
        productImageElement.alt = product.name || "Product Image";

        // Populate other details if available
        if (product.origin) {
            productOrigin.textContent = product.origin;
        } else {
            productOrigin.textContent = "origin not specified";
        }
        if (product.expiredate) {
            productExpiredate.textContent = product.expiredate;
        } else {
            productExpiredate.textContent = "date is not specified";
        }

        if (product.weight) {
            productWeight.textContent = product.weight;
        } else {
            productWeight.textContent = "Weight not specified";
        }

        if (product.vitamins) {
            productVitamins.textContent = product.vitamins;
        }else{
            productVitamins.textContent = "not data found";
        }
        if (product.description) {
            productdescription.textContent = product.description;
        }else{
            productdescription.textContent = "not data found";
        }

        createAddToCartDiv(id);        
            
    } else {
        // Handle case where product details are not available
        alert("Oops! something went wrong!");
        window.history.back();
        console.error("Product details not found in URL parameters.");
    }
});


const createAddToCartDiv = (id) => {
    // Create quantity-selector div
    const quantitySelectorDiv = document.createElement('div');
    quantitySelectorDiv.className = 'quantity-selector';
  
    // Create label element
    const quantityLabel = document.createElement('label');
    quantityLabel.for = 'quantity' + id;
    quantityLabel.textContent = 'Quantity: ';
  
    // Create input element
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.id = 'quantity' + id;
    quantityInput.name = 'quantity';
    quantityInput.value = '1';
    quantityInput.min = '1';
    quantityInput.max = '10';
  
    // Append label and input to quantity-selector div
    quantitySelectorDiv.appendChild(quantityLabel);
    quantitySelectorDiv.appendChild(quantityInput);
  
    // Create add-to-cart button
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-to-cart';
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.addEventListener("click", () => addToCart(id));
  
    // Create addCartDiv
    const addCartDiv = document.createElement('div');
    addCartDiv.className = 'addCartDiv';
  
  
    // Append quantity-selector and add-to-cart button to addCartDiv
    addCartDiv.appendChild(quantitySelectorDiv);
    addCartDiv.appendChild(addToCartBtn);
  
    document.getElementsByClassName('product-details')[0].appendChild(addCartDiv)
  
  }
  
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


