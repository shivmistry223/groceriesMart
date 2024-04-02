document.addEventListener("DOMContentLoaded", function() {
    // Array of product objects
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
