const products = [
    { 
        id: "d1",
        name: "Sealtest Homogenized Milk 3.25 percent, ",
        price: "$6.89",
        image: "dairy_images/MIlk1.png",
        origin: "Canada",
        expiredate:"12/04/2024",
        vitamins:"A, B12, B6",
        weight: "4 L bag"
    },
    { 
        id: "d2",
        name: "Natrel Fine-filtered 2 percent Milk",
        price: "$5.38",
        image: "dairy_images/Chocolate Milk.png",
        origin: "USA",
        expiredate:"18/04/2024",
        vitamins:"B1 , B6",
        weight: "2 L"
    },
    {
        id : "d3",
        name: "Sealtest Buttermilk 1 percent",
        price: "$2.47",
        image: "dairy_images/Buttermilk.png",
        origin: "Rassia",
        expiredate:"10/04/2024",
        vitamins:"C, B2, B6",
        weight: "1 L"
    },
    { 
        id: "d4",
        name: "Gay Lea Salted Butter",
        price: "$4.87",
        image: "dairy_images/butter.png",
        origin: "Canada",
        expiredate:"30/05/2024",
        vitamins:"A, C, B12, B6",
        weight: "454 Gm"
    },
    { 
        id : "d5",
        name: "Great Value Unsalted Butter",
        price: "$5.48",
        image: "dairy_images/Butter Unsalted.png",
        origin: "India",
        expiredate:"15/05/2024",
        vitamins:"B2, B6",
        weight: "454 Gm"
    },
    {
        id : "d6",
        name: "Brar's Malai Paneer",
        price: "$5.97",
        image: "dairy_images/Paneer.png",
        origin: "Canada",
        expiredate:"23/05/2024",
        vitamins:"B6",
        weight: " 500 gm"
    },
    { 
        id : "d7",
        name: "Great Value Old Cheddar Cheese",
        price: "$4.44",
        image: "dairy_images/Cheese.png",
        origin: "USA",
        expiredate:"22/05/2024",
        vitamins:"A, B12, B6",
        weight: "400 gm"
    },
    {
        id: "d8", 
        name: "Great Value Pizza Mozzarella Cheese",
        price: "$5.98",
        image: "dairy_images/Cheese2.png",
        origin: "USA",
        expiredate:"28/05/2024",
        vitamins:"A, B12, B6",
        weight: "400 gm"
    },
    {
        id: "d9",
        name: "Great Value Lactose Free Marble Cheddar Cheese",
        price: "$4.44",
        image: "dairy_images/Lactos free cheese.png",
        origin: "India",
        expiredate:"28/04/2024",
        vitamins:"A, B12, B6",
        weight: "400 gm"
    },
    { 
        id : "d10",
        name: "Astro Original Plain Yogurt 2 percent",
        price: "$3.28",
        image: "dairy_images/yogurt1.png",
        origin: "Canada",
        expiredate:"22/04/2024",
        vitamins:"A, B12, B6",
        weight: "750 gm"
    },
    { 
        id: "d11",
        name: "Liberté Greek 0% Yogurt, Plain, High Protein",
        price: "$5.94",
        image: "dairy_images/Greek Yogurt.png",
        weight: " 750 gm"
    },
    {
        
        id: "d12",
        name: "BRAR'S PURE DESI GHEE",
        price: "$22.97",
        image: "dairy_images/Ghee.png",
        weight: " 450 gm"
    },
    { 
        id: "d13",
        name: "Sealtest Table Cream 18 percent",
        price: "$4.98",
        image: "dairy_images/cream.png",
        origin: "Canada",
        expiredate:"19/04/2024",
        vitamins:"A, B12, B6",
        weight: " 1 L"
    },
    { 
        id: "d14",
        name: "Great Value Whipped Topping",
        price: "$3.48",
        image: "dairy_images/Whipped Topping.png"
    },
    {
        id: "d15",
        name: "GoldEgg Golden D Vitamin D Enriched Large Eggs",
        price: "$8.83",
        image: "dairy_images/Eggs.png"
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
  


