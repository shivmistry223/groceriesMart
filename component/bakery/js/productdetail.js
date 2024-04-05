const products = [
    {
        id: "b1",
        name: "Your Fresh Market All Butter Croissants, 6 croissants",
        price: "$4.97",
        image: "baakery_images/Croissants.png",
        vitamins: "Vitamin A, Vitamin B, Vitamin E",
        weight: "270 g",
        origin: "France",
        expiredate: "2024-07-01",
        description: "Delicious and flaky all-butter croissants, perfect for breakfast or as a snack. Made with high-quality ingredients for a rich and indulgent flavor."
      },
      {
        id: "b2",
        name: "Wonder White Sliced Bread",
        price: "$2.97",
        image: "baakery_images/white bread.png",
        vitamins: "Iron, Folic Acid",
        weight: "675 g",
        origin: "USA",
        expiredate: "2024-06-15",
        description: "Soft and fluffy sliced white bread that's perfect for sandwiches or toast. Made with enriched flour for added nutrients."

      },
      {
        id: "b3",
        name: "Dempster’s® White Sliced Bread",
        price: "$3.57",
        image: "baakery_images/D_white bread.png",
        vitamins: "Iron, Folic Acid",
        weight: "675 g",
        origin: "Canada",
        expiredate: "2024-06-20",
        description: "Classic white sliced bread from Dempster’s®, perfect for making sandwiches or enjoying with your favorite spreads."
      },
      {
        id: "b4",
        name: "CHIPS AHOY! Original Chocolate Chip Cookies, Resealable Pack",
        price: "$3.48",
        image: "baakery_images/chips ahoy.png",
        vitamins: "Iron, Calcium",
        weight: "258 g",
        origin: "USA",
        expiredate: "2024-07-05",
        description: "Enjoy the soft and chunky goodness of CHIPS AHOY! Soft Chunky Original Cookies. Packed with chunks of chocolate in every bite, these cookies are a delight for all ages."
      },
      {
        id: "b5",
        name: "CHIPS AHOY! Soft Chunky Original Cookies",
        price: "$3.48",
        image: "baakery_images/chips ahoy2.png",
        vitamins: "Iron, Calcium",
        weight: "290 g",
        origin: "USA",
        expiredate: "2024-07-10",
        description: "Enjoy the soft and chunky goodness of CHIPS AHOY! Soft Chunky Original Cookies. Packed with chunks of chocolate in every bite, these cookies are a delight for all ages."
      },
      {
        id: "b6",
        name: "OREO",
        price: "$3.48",
        image: "baakery_images/oreo.png",
        vitamins: "Iron, Calcium",
        weight: "Varies",
        origin: "Global",
        expiredate: "2024-07-03",
        description: "Iconic OREO cookies with a delicious creamy filling sandwiched between two chocolate wafers. Perfect for dunking in milk or enjoying as a sweet treat."
    },
      {
        id: "b7",
        name: "Your Fresh Market Apple Turnovers, 6 pieces",
        price: "$4.97",
        image: "baakery_images/turnovers.png",
        vitamins: "Vitamin C",
        weight: "504 g",
        origin: "Canada",
        expiredate: "2024-06-25",
        description: "Indulge in the sweet and tangy flavor of Your Fresh Market Apple Turnovers. Made with crisp apples and flaky pastry, these turnovers are a delightful dessert or snack."
      },
      {
        id: "b8",
        name: "Banana Bread Chocolate Chip, 8 Pack",
        price: "$4.47",
        image: "baakery_images/Banana bread.png",
        vitamins: "Vitamin B6, Vitamin C",
        weight: "Varies",
        origin: "Mexico",
        expiredate: "2024-06-18",
        description: "Satisfy your sweet cravings with our Banana Bread Chocolate Chip. Made with ripe bananas and studded with chocolate chips, it's a perfect blend of flavors."
      },
      {
        id: "b9",
        name: "Your Fresh Market Baked 10' Pumpkin Pie, 10 inch",
        price: "$4.97",
        image: "baakery_images/Pumpkin pie.png",
        vitamins: "Vitamin A, Vitamin C",
        weight: "900 g",
        origin: "Canada",
        expiredate: "2024-06-30",
        description: "Celebrate the flavors of fall with Your Fresh Market Baked Pumpkin Pie. Made with real pumpkin and a blend of spices, it's a comforting and delicious dessert for any occasion."
      },
      {
        id: "b10",
        name: "two-bite® Brownies",
        price: "$6.00",
        image: "baakery_images/Brownies.png",
        vitamins: "Iron",
        weight: "608 g",
        origin: "USA",
        expiredate: "2024-07-02",
        description: "Indulge in the rich and fudgy taste of two-bite® Brownies. Perfectly sized for snacking, these brownies are sure to satisfy your sweet tooth."
      },
      {
        id: "b11",
        name: "Killer Brownie Kitchen Sink Brownies",
        price: "$5.97",
        image: "baakery_images/Brownies2.png",
        vitamins: "Iron",
        weight: "269 g",
        origin: "USA",
        expiredate: "2024-07-07",
        description: "Get ready for a chocolate overload with Killer Brownie Kitchen Sink Brownies. Packed with chocolate chips, nuts, and caramel, these brownies are a decadent treat for any occasion."
      },
      {
        id: "b12",
        name: "Almond Cake Rusk",
        price: "$4.97",
        image: "baakery_images/Almond Cake.png",
        vitamins: "Calcium",
        weight: "750 g",
        origin: "India",
        expiredate: "2024-06-22",
        description: "Enjoy the perfect crunch with our Almond Cake Rusk. Made with premium quality almonds and baked to perfection, these rusks are great for dipping in tea or coffee."
      },
      {
        id: "b13",
        name: "Your Fresh Market Chocolate Fudge Cake",
        price: "$6.00",
        image: "baakery_images/cake.png",
        vitamins: "Iron, Calcium",
        weight: "450 g",
        origin: "Canada",
        expiredate: "2024-06-28",
        description: "Indulge your sweet tooth with Your Fresh Market Chocolate Fudge Cake. Rich, moist, and decadent, this cake is sure to satisfy any chocolate craving."
      },
      {
        id: "b14",
        name: "Quaker Blueberry Buttermilk Flavour Muffin Mix",
        price: "$5.47",
        image: "baakery_images/muffins.png",
        vitamins: "Iron",
        weight: "900 g",
        origin: "USA",
        expiredate: "2024-06-29",
        description: "Bake up delicious blueberry muffins with Quaker Blueberry Buttermilk Flavour Muffin Mix. Made with real blueberries and buttermilk flavor, these muffins are perfect for breakfast or snacking."
      },
      {
        id: "b15",
        name: "Betty Crocker Red Velvet Cupcakes with cream cheese flavoured frosting",
        price: "$3.97",
        image: "baakery_images/Red velvet cupcakes.png",
        vitamins: "Iron, Calcium",
        weight: "465 g",
        origin: "Canada",
        expiredate: "2024-06-23",
        description: "Treat yourself to the rich and velvety taste of Betty Crocker Red Velvet Cupcakes. Topped with creamy cream cheese frosting, these cupcakes are a decadent delight for any occasion."
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
  const addToCartButton = document.createElement("img");
  addToCartButton.src = '../../images/icons/add-cart.png'; 
  addToCartButton.alt = "Add to Cart";
  addToCartButton.classList.add("add-to-cart-img"); 
  addToCartButton.addEventListener("click", () => addToCart(id));

  // Create addCartDiv
  const addCartDiv = document.createElement('div');
  addCartDiv.className = 'addCartDiv';


  // Append quantity-selector and add-to-cart button to addCartDiv
  addCartDiv.appendChild(quantitySelectorDiv);
  addCartDiv.appendChild(addToCartButton);

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



