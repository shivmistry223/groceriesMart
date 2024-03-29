document.addEventListener("DOMContentLoaded", function() {
    // Array of product objects
    const products = [
        { 
            name: "Cucumber",
            price: "$1.98 each",
            image: "vegetable_image/CARROTS_resized.jpg",
            origin: "India",
            expiredate:"12/04/2024",
            vitamins:"A, B12, B6",
            weight: "200 Gm"
        },
        { 
            name: "cabbage",
            price: "$2.98 per cluster",
            image: "vegetable_image/cabbage.jpg",
            origin: "USA",
            expiredate:"18/04/2024",
            vitamins:"B1 , B6",
            weight: "1 Kg"
        },
        {
            name: "Corn",
            price: "3.98 per cluster",
            image: "vegetable_image/CORN.jpg",
            origin: "Rassia",
            expiredate:"02/04/2024",
            vitamins:"C, B2, B6",
            weight: "800 Gm"
        },
        { 
            name: "Corriander",
            price: "$1.98 each",
            image: "vegetable_image/CORRIANDER.jpg",
            origin: "Canada",
            expiredate:"30/03/2024",
            vitamins:"A, C, B12, B6",
            weight: "100 Gm"
        },
        { 
            name: "pappers",
            price: "$2.98 per cluster",
            image: "vegetable_image/pappers.jpg",
            origin: "India",
            expiredate:"15/04/2024",
            vitamins:"B2, B6",
            weight: "700 Gm"
        },
        {
            name: "Onion Bag",
            price: "$2.98 per cluster",
            image: "vegetable_image/ONION_BAG.jpg",
            origin: "China",
            expiredate:"12/05/2024",
            vitamins:"B6",
            weight: " 10 Kg"
        },
        { 
            name: "Tomatoes",
            price: "$1.98 each",
            image: "vegetable_image/TOMATOES.jpg",
            origin: "India",
            expiredate:"12/04/2024",
            vitamins:"A, B12, B6",
            weight: "200gm"
        },
        { 
            name: "Cauliflower",
            price: "$2.98 per cluster",
            image: "vegetable_image/cauliflower.jpg",
            origin: "India",
            expiredate:"12/04/2024",
            vitamins:"A, B12, B6",
            weight: "200gm"
        },
        {
            name: "Red Cluster Tomatoes",
            price: "$2.98 per cluster",
            image: "vegetable_image/ginger.jpg",
            origin: "India",
            expiredate:"12/04/2024",
            vitamins:"A, B12, B6",
            weight: "200gm"
        },
        { 
            name: "English Cucumber",
            price: "$1.98 each",
            image: "vegetable_image/eggplant.jpg",
            origin: "India",
            expiredate:"12/04/2024",
            vitamins:"A, B12, B6",
            weight: "200gm"
        },
        { 
            name: "Red Cluster Tomatoes",
            price: "$2.98 per cluster",
            image: "vegetable_image/GARLIC.jpg"
        },
        {
            name: "Red Cluster Tomatoes",
            price: "$2.98 per cluster",
            image: "vegetable_image/patatoes.jpg"
        },
        { 
            name: "English Cucumber",
            price: "$1.98 each",
            image: "vegetable_image/randish.jpg",
            origin: "India",
            expiredate:"12/04/2024",
            vitamins:"A, B12, B6",
            weight: "200gm"
        },
        { 
            name: "Red Cluster Tomatoes",
            price: "$2.98 per cluster",
            image: "vegetable_image/lemon.jpg"
        },
        {
            name: "Red Cluster Tomatoes",
            price: "$2.98 per cluster",
            image: "vegetable_image/sweet_patatoes.jpg"
        },
       
    ];

    const productContainer = document.getElementById("product-container");
    const cartItems = [];

    // Function to handle adding product to cart
    function addToCart(product) {
        cartItems.push(product);
        console.log("Product added to cart:", product);
        // You can add further logic here, like updating UI to reflect the cart items
    }

    // Function to handle saving product
    function saveProduct(product) {
        console.log("Product saved:", product);
        // You can add further logic here, like displaying a confirmation message
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

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("add-to-cart");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => addToCart(product));

        const saveButton = document.createElement("button");
        saveButton.classList.add("save");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => saveProduct(product));

        buttonsDiv.appendChild(addToCartButton);
        buttonsDiv.appendChild(saveButton);

        productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(buttonsDiv);

        productDiv.appendChild(productImage);
        productDiv.appendChild(productInfo);

        // Add click event listener to display product details
        productDiv.addEventListener("click", () => displayProductDetails(product));

        productContainer.appendChild(productDiv);
    });
});
