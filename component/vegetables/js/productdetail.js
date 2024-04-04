const products = [
    { 
        id: "v3",
        name: "Carrots",
        price: "$1.98 each",
        image: "./vegetable_image/CARROTS_resized.jpg",
        origin: "Germany",
        expiredate: "05/20/2024",
        vitamins: "A, K",
        weight: "200 Gm",
        description: "Fresh and crunchy carrots, perfect for salads, soups, or snacking."
    },
    { 
        id: "v2",
        name: "cabbage",
        price: "$2.98 per cluster",
        image: "./vegetable_image/cabbage.jpg",
        origin: "India",
        expiredate: "07/10/2024",
        vitamins: "K, C",
        weight: "1 Kg",
        description: "Large, green cabbage heads with tender leaves, ideal for stir-fries, coleslaw, or steaming."
    },
    {
        id : "v9",
        name: "Corn",
        price: "3.98 per cluster",
        image: "./vegetable_image/CORN.jpg",
        origin: "USA",
        expiredate: "06/15/2024",
        vitamins: "C, B1",
        weight: "800 Gm",
        description: "Fresh sweet corn on the cob, great for grilling, boiling, or roasting."
    },
    { 
        id: "v6",
        name: "Coriander",
        price: "$1.98 each",
        image: "./vegetable_image/CORRIANDER.jpg",
        origin: "Canada",
        expiredate: "04/30/2024",
        vitamins: "A, C, K",
        weight: "100 Gm",
        description: "Fragrant coriander leaves, perfect for garnishing curries, salads, or soups."
    },
    { 
        id : "v10",
        name: "Pappers",
        price: "$2.98 per cluster",
        image: "./vegetable_image/pappers.jpg",
        origin: "Japan",
        expiredate: "06/28/2024",
        vitamins: "A, C",
        weight: "700 Gm",
        description: "Colorful bell peppers, great for stuffing, roasting, or adding to stir-fries."
    },
    {
        id : "v11",
        name: "Onion Bag",
        price: "$2.98 per cluster",
        image: "./vegetable_image/ONION_BAG.jpg",
        origin: "China",
        expiredate: "06/12/2024",
        vitamins: "C, B6",
        weight: " 10 Kg",
        description: "Fresh onions in a convenient bag, perfect for cooking, salads, or pickling."
    },
    { 
        id : "v12",
        name: "Tomatoes",
        price: "$1.98 each",
        image: "./vegetable_image/TOMATOES.jpg",
        origin: "India",
        expiredate: "05/25/2024",
        vitamins: "A, C",
        weight: "200gm",
        description: "Juicy and ripe tomatoes, great for salads, sandwiches, or sauces."
    },
    {
        id: "v4", 
        name: "Cauliflower",
        price: "$2.98 per cluster",
        image: "./vegetable_image/cauliflower.jpg",
        origin: "China",
        expiredate: "05/17/2024",
        vitamins: "C, K",
        weight: "200gm",
        description: "Fresh cauliflower heads, perfect for roasting, steaming, or making cauliflower rice."
    },
    {
        id: "v8",
        name: "Ginger",
        price: "$2.98 per cluster",
        image: "./vegetable_image/ginger.jpg",
        origin: "Japan",
        expiredate: "06/05/2024",
        vitamins: "B6, C",
        weight: "200gm",
        description: "Spicy and aromatic ginger root, great for adding flavor to stir-fries, curries, or teas."
    },
    { 
        id : "v13",
        name: "Egg Plant",
        price: "$1.98 each",
        image: "./vegetable_image/eggplant.jpg",
        origin: "Canada",
        expiredate: "05/08/2024",
        vitamins: "K, C",
        weight: "200gm",
        description: "Fresh eggplant, perfect for grilling, roasting, or adding to stews and curries."
    },
    { 
        id: "v7",
        name: "Garlic",
        price: "$2.98 per cluster",
        image: "./vegetable_image/GARLIC.jpg",
        vitamins: "C",
        origin: "India",
        expiredate: "05/14/2024",
        weight: "100 Gm",
        description: "Aromatic garlic bulbs, great for flavoring sauces, marinades, or stir-fries."
    },
    {
        id: "v14",
        name: "Potato Bag",
        price: "$2.98 per cluster",
        image: "./vegetable_image/patatoes.jpg",
        vitamins: "C",
        origin: "China",
        expiredate: "05/30/2024",
        weight: "5 Kg",
        description: "Fresh potatoes in a convenient bag, perfect for frying, roasting, or mashing."
    },
    { 
        id: "v15",
        name: "Radish",
        price: "$1.98 each",
        image: "./vegetable_image/randish.jpg",
        origin: "Japan",
        expiredate: "06/10/2024",
        vitamins: "A, C",
        weight: "150 Gm",
        description: "Crisp and peppery radishes, great for salads, pickling, or adding to sandwiches."
    },
    { 
        id: "v16",
        name: "Lime",
        price: "$2.98 per cluster",
        image: "./vegetable_image/lemon.jpg",
        vitamins: "C",
        origin: "USA",
        expiredate: "07/02/2024",
        weight: "50 Gm",
        description: "Juicy limes, perfect for squeezing over dishes, making cocktails, or adding to marinades."
    },
    {
        id: "v17",
        name: "Sweet Potatoes",
        price: "$2.98 per cluster",
        image: "./vegetable_image/sweet_patatoes.jpg",
        vitamins: "A, C",
        origin: "India",
        expiredate: "06/20/2024",
        weight: "300 Gm",
        description: "Sweet and nutritious sweet potatoes, great for baking, roasting, or making fries."
    },
    {
        id: "v1",
        name: "Bitterground",
        image: "./vegetable_image/bitterground.jpg",
        price: "$1.79 per lb",
        vitamins: "A, C",
        origin: "China",
        expiredate: "05/05/2024",
        weight: "400 Gm",
        description: "Bitter melon, perfect for stir-frying, braising, or adding to soups."
    },
    {
        id: "v5",
        name: "Chilli",
        image: "./vegetable_image/CHLLI_resized.jpg",
        price: "$1.49 per lb",
        vitamins: "A, C",
        origin: "India",
        expiredate: "06/18/2024",
        weight: "100 Gm",
        description: "Spicy chili peppers, great for adding heat to dishes, sauces, or salsas."
    },
    {
        id: "v18",
        name: "Green Pea",
        image: "./vegetable_image/greenpeas.jpg",
        price: "$1.49 per lb",
        vitamins: "A, C",
        origin: "USA",
        expiredate: "05/30/2024",
        weight: "250 Gm",
        description: "Sweet and tender green peas, great for adding to salads, soups, or stir-fries."
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

