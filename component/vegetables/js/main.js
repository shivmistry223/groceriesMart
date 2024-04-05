document.addEventListener("DOMContentLoaded", function() {
    // Array of product objects
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
        addToCartButton.src = "../images/icons/shopping-cart.png"; // Adjust path accordingly
        addToCartButton.alt = "Add to Cart";
        addToCartButton.classList.add("add-to-cart-img"); // Assuming you have or will create CSS for this
        addToCartButton.addEventListener("click", () => addToCart(product.id));

        // Set image size
        addToCartButton.style.width = "40px"; // Set width as per your requirement
        addToCartButton.style.height = "40px"; // Set height as per your requirement
        // Set cursor to pointer
        addToCartButton.style.cursor = "pointer";

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
