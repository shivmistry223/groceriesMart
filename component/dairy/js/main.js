document.addEventListener("DOMContentLoaded", function() {
    // Array of product objects
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
    function saveProduct(product) {
        console.log("Product saved:", product);
    }

    // Function to display product details
    function displayProductDetails(product) {
        // Create a modal or navigate to a new page to display product details
        window.location.href = "productdetail.html?product=" + encodeURIComponent(JSON.stringify(product));
        // You can customize this function to display product details in a modal or navigate to a new page
    }

    // Loop through products array and generate HTML for each product
    products.forEach(product => {
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
        label.setAttribute('for', 'quantity');
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

        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("add-to-cart");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => addToCart(product.id));

        const saveButton = document.createElement("button");
        saveButton.classList.add("save");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => saveProduct(product));

        buttonsDiv.appendChild(addToCartButton);
        buttonsDiv.appendChild(saveButton);

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
});
