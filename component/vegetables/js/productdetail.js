const products = [
    { 
        id: "v3",
        name: "Carrots",
        price: "$1.98 each",
        image: "./vegetable_image/CARROTS_resized.jpg",
        origin: "India",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "200 Gm"
    },
    { 
        id: "v2",
        name: "cabbage",
        price: "$2.98 per cluster",
        image: "./vegetable_image/cabbage.jpg",
        origin: "USA",
        expiredate:"18/04/2024",
        vitamins:"B1 , B6",
        weight: "1 Kg"
    },
    {
        id : "v9",
        name: "Corn",
        price: "3.98 per cluster",
        image: "./vegetable_image/CORN.jpg",
        origin: "Rassia",
        expiredate:"02/04/2024",
        vitamins:"C, B2, B6",
        weight: "800 Gm"
    },
    { 
        id: "v6",
        name: "Corriander",
        price: "$1.98 each",
        image: "./vegetable_image/CORRIANDER.jpg",
        origin: "Canada",
        expiredate:"30/03/2024",
        vitamins:"A, C, B12, B6",
        weight: "100 Gm"
    },
    { 
        id : "v10",
        name: "pappers",
        price: "$2.98 per cluster",
        image: "./vegetable_image/pappers.jpg",
        origin: "India",
        expiredate:"15/04/2024",
        vitamins:"B2, B6",
        weight: "700 Gm"
    },
    {
        id : "v11",
        name: "Onion Bag",
        price: "$2.98 per cluster",
        image: "./vegetable_image/ONION_BAG.jpg",
        origin: "China",
        expiredate:"12/05/2024",
        vitamins:"B6",
        weight: " 10 Kg"
    },
    { 
        id : "v12",
        name: "Tomatoes",
        price: "$1.98 each",
        image: "./vegetable_image/TOMATOES.jpg",
        origin: "India",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "200gm"
    },
    {
        id: "v4", 
        name: "Cauliflower",
        price: "$2.98 per cluster",
        image: "./vegetable_image/cauliflower.jpg",
        origin: "India",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "200gm"
    },
    {
        id: "v8",
        name: "Ginger",
        price: "$2.98 per cluster",
        image: "./vegetable_image/ginger.jpg",
        origin: "India",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "200gm"
    },
    { 
        id : "v13",
        name: "Egg Plant",
        price: "$1.98 each",
        image: "./vegetable_image/eggplant.jpg",
        origin: "India",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "200gm"
    },
    { 
        id: "v7",
        name: "Garlic",
        price: "$2.98 per cluster",
        image: "./vegetable_image/GARLIC.jpg"
    },
    {
        
        id: "v14",
        name: "Potato Bag",
        price: "$2.98 per cluster",
        image: "./vegetable_image/patatoes.jpg"
    },
    { 
        id: "v15",
        name: "Randish",
        price: "$1.98 each",
        image: "./vegetable_image/randish.jpg",
        origin: "India",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "200gm"
    },
    { 
        id: "v16",
        name: "Lime",
        price: "$2.98 per cluster",
        image: "./vegetable_image/lemon.jpg"
    },
    {
        id: "v17",
        name: "Sweet Potatoes",
        price: "$2.98 per cluster",
        image: "./vegetable_image/sweet_patatoes.jpg"
    },
    {
        id: "v1",
        name: "Bitterground",
        image: "./vegetable_image/bitterground.jpg",
        price: "$1.79 per lb",
    },
    {
        id: "v5",
        name: "Chilli",
        image: "./vegetable_image/CHLLI_resized.jpg",
        price: "$1.49 per lb",
    }
    ,
    {
        id: "v18",
        name: "Green Pea",
        image: "./vegetable_image/greenpeas.jpg",
        price: "$1.49 per lb",
    }
   
];

document.addEventListener("DOMContentLoaded", function() {
    // Get the product details from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productJson = urlParams.get('productId');
    if (productJson) {
        const id = JSON.parse(decodeURIComponent(productJson)).id;
        const product = products.find((obj) => obj.id === id);

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

        createAddToCartDiv(id)
            
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

