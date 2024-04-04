document.addEventListener("DOMContentLoaded", function() {
    // Array of product objects
const products = [
        { 
            id: "f1",
            name: "Apple, Gala, Sold in singles, 0.13 - 0.18 kg",
            price: "$0.98 each",
            image: "fruit_images/apple.jpg",
            origin: "USA",
            expiredate: "29/04/2024",
            vitamins: "C, B1, B2, B3, B5, B6",
            weight: " around 200 Gm",
            description: "Crisp and sweet Gala apples, perfect for snacking or adding to salads. High in vitamin C and various B vitamins for a healthy immune system and metabolism."
        },
        { 
            id: "f2",
            name: "Healthy Market Organic Avocados, Pack of 4",
            price: "$5.98 per Bag",
            image: "fruit_images/avocado.jpg",
            origin: "Canada",
            expiredate: "19/04/2024",
            vitamins: "K , B9, C, A",
            weight: "around 800 gm",
            description: "Organic avocados, rich in healthy fats, vitamins, and minerals. Great for making guacamole, salads, or adding to sandwiches. High in vitamin K, B9, C, and A for overall health and well-being."
        },
        {
            id : "f3",
            name: "Organic Banana, Sold in singles",
            price: "0.85 per piece",
            image: "fruit_images/banana.jpg",
            origin: "Canada",
            expiredate: "15/04/2024",
            vitamins: "C, B2, B6",
            weight: ", 0.15 - 0.24 kg",
            description: "Organic bananas, rich in potassium, vitamin C, and B vitamins. Perfect for snacking or adding to smoothies. High in vitamin C, B2, and B6 for energy and immunity."
        },
        { 
            id: "f4",
            name: "Blackberries, 170 g",
            price: "$4.98 per container",
            image: "fruit_images/blackberries box.jpg",
            origin: "Canada",
            expiredate: "30/04/2024",
            vitamins: "A, C, B12, B6",
            weight: "170 gm",
            description: "Juicy blackberries, packed with antioxidants and vitamins. Great for snacking, baking, or adding to yogurt. High in vitamin A, C, B12, and B6 for eye health and immunity."
        },
        { 
            id : "f6",
            name: "Great Value Dragon Fruit",
            price: "$1.98 each",
            image: "fruit_images/dragonfruit.jpg",
            origin: "India",
            expiredate: "28/04/2024",
            vitamins: "B2, B6",
            weight: "400-500 Gm",
            description: "Exotic dragon fruit, known for its vibrant color and unique flavor. Rich in vitamins B2 and B6, great for skin health and energy production."
        },
        {
            id : "f7",
            name: "Black or Red Seedless Grapes, 1 Bag",
            price: "$3.58 per Bag",
            image: "fruit_images/grapes.jpg",
            origin: "China",
            expiredate: "30/04/2024",
            vitamins: "B6",
            weight: " 1 Kg",
            description: "Seedless grapes, perfect for snacking or adding to fruit salads. Rich in vitamin B6, great for metabolism and brain health."
        },
        { 
            id : "f8",
            name: "Kiwis, 1.3 lbs",
            price: "$1.48 each",
            image: "fruit_images/kiwi.jpg",
            origin: "India",
            expiredate: "22/04/2024",
            vitamins: "A, B12, B6",
            weight: "1.3 lbs",
            description: "Delicious kiwis, packed with vitamin C and antioxidants. Great for boosting immunity and improving digestion. High in vitamin A, B12, and B6 for eye health and metabolism."
        },
        {
            id: "f9", 
            name: "Indian Kesar Mango",
            price: "$12.52 per box",
            image: "fruit_images/mango.jpg",
            origin: "India",
            expiredate: "28/05/2024",
            vitamins: "A, B12, B6",
            weight: "10 lbs",
            description: "Sweet and fragrant Indian Kesar mangoes, known for their rich flavor and smooth texture. High in vitamin A, B12, and B6 for eye health, immunity, and metabolism."
        },
        {
            id: "f10",
            name: "Orange, Seedless, Sold in singles",
            price: "$1.23 each",
            image: "fruit_images/orange.jpg",
            origin: "India",
            expiredate: "22/04/2024",
            vitamins: "A, B12, B6",
            weight: "0.25 - 0.28 kg",
            description: "Juicy seedless oranges, perfect for juicing or snacking. Rich in vitamin A, B12, and B6 for immune support and skin health."
        },
        { 
            id : "f11",
            name: "Pomegranates",
            price: "$2.16 per lb",
            image: "fruit_images/pamegrates.jpg",
            origin: "USA",
            expiredate: "24/04/2024",
            vitamins: "C, B12, B6",
            weight: "400gm",
            description: "Nutrient-rich pomegranates, packed with antioxidants and vitamins. Great for heart health and immune support. High in vitamin C, B12, and B6."
        },
        { 
            id: "f12",
            name: "Pears",
            price: "$1.68 per lb",
            image: "fruit_images/pears.jpg",
            origin: "Canada",
            expiredate: "15/05/2024",
            vitamins: "C, B2, B6",
            weight: "400gm",
            description: "Sweet and juicy pears, perfect for snacking or adding to salads. High in vitamin C, B2, and B6 for immune support and energy."
        },
        {
            id: "f13",
            name: "Pineapple, Golden Jumbo",
            price: "$2.78 each",
            image: "fruit_images/pinapple.jpg",
            origin: "Canada",
            expiredate: "12/05/2024",
            vitamins: "C, B12, B6",
            weight: "2.05-2.29 kg each",
            description: "Juicy golden jumbo pineapples, bursting with tropical flavor. Great for making refreshing drinks, desserts, or adding to fruit salads. High in vitamin C, B12, and B6 for immune support and digestion."
        },
        { 
            id: "f14",
            name: "Plums",
            price: "$0.98 per lb",
            image: "fruit_images/plum.jpg",
            origin: "Japan",
            expiredate: "17/05/2024",
            vitamins: "A, C, B2",
            weight: "1 lb",
            description: "Sweet and succulent plums, perfect for snacking or adding to desserts. High in vitamin A, C, and B2 for eye health and immunity."
        },
        { 
            id: "f15",
            name: "Strawberries Box",
            price: "$3.98 per box",
            image: "fruit_images/stawberries.jpg",
            origin: "USA",
            expiredate: "17/05/2024",
            vitamins: "A, B12, B6",
            weight: "1 lb",
            description: "Juicy strawberries, packed with antioxidants and vitamins. Great for snacking, baking, or adding to salads. High in vitamin A, B12, and B6 for eye health and immune support."
        },
        {
            id: "f5",
            name: "Freshi Market Watermelon",
            price: "$2.98 per lb",
            image: "fruit_images/watermelon.jpg",
            origin: "India",
            expiredate: "17/05/2024",
            vitamins: "A, B2, B6,C",
            weight: "2 lb",
            description: "Sweet and refreshing watermelon, perfect for hot summer days. Great for hydrating and packed with vitamins A, B2, B6, and C for overall health and well-being."
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
