const VEGETABLES_LIST = [
    { 
        id: "v3",
        name: "Carrots",
        price: "$1.98 each",
        image: "./vegetable_image/CARROTS_resized.jpg",
        img: "./component/vegetables/vegetable_image/CARROTS_resized.jpg",
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
        img: "./component/vegetables/vegetable_image/cabbage.jpg",
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
        img: "./component/vegetables/vegetable_image/CORN.jpg",
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
        img: "./component/vegetables/vegetable_image/CORRIANDER.jpg",
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
        img: "./component/vegetables/vegetable_image/pappers.jpg",
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
        img: "./component/vegetables/vegetable_image/ONION_BAG.jpg",
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
        img: "./component/vegetables/vegetable_image/TOMATOES.jpg",
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
        img: "./component/vegetables/vegetable_image/cauliflower.jpg",
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
        img: "./component/vegetables/vegetable_image/ginger.jpg",
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
        img: "./component/vegetables/vegetable_image/eggplant.jpg",
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
        img: "./component/vegetables/vegetable_image/GARLIC.jpg",
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
        img: "./component/vegetables/vegetable_image/patatoes.jpg",
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
        image: "./vegetable_image/patatoes.jpg",
        img: "./component/vegetables/vegetable_image/randish.jpg",
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
        img: "./component/vegetables/vegetable_image/lemon.jpg",
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
        img: "./component/vegetables/vegetable_image/sweet_patatoes.jpg",
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
        img: "./component/vegetables/vegetable_image/bitterground.jpg",
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
        img: "./component/vegetables/vegetable_image/CHLLI_resized.jpg",
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
        img: "./component/vegetables/vegetable_image/greenpeas.jpg",
        price: "$1.49 per lb",
        vitamins: "A, C",
        origin: "USA",
        expiredate: "05/30/2024",
        weight: "250 Gm",
        description: "Sweet and tender green peas, great for adding to salads, soups, or stir-fries."
    }
];

const FRUITS_LIST = [
    { 
        id: "f1",
        name: "Apple, Gala, Sold in singles, 0.13 - 0.18 kg",
        price: "$0.98 each",
        image: "fruit_images/apple.jpg",
        img: "./component/fruits/fruit_images/apple.jpg",
        origin: "USA",
        expiredate: "29/04/2024",
        vitamins: "C, B1, B2, B3, B5, B6",
        weight: " around 200 Gm",
        description: "Crisp and sweet Gala apples, perfect for snacking or adding to salads. High in vitamin C and various B vitamins for a healthy immune system and metabolism."
    },
    { 
        id: "f2",
        name: "Healthy Market Organic Avocados",
        price: "$5.98 per Bag",
        image: "fruit_images/avocado.jpg",
        img: "./component/fruits/fruit_images/avocado.jpg",
        origin: "Canada",
        expiredate: "19/04/2024",
        vitamins: "K , B9, C, A",
        weight: "around 800 gm of 4 pieces",
        description: "It has Pack of 4 Organic avocados, rich in healthy fats, vitamins, and minerals. Great for making guacamole, salads, or adding to sandwiches. High in vitamin K, B9, C, and A for overall health and well-being."
    },
    {
        id : "f3",
        name: "Organic Banana, Sold in singles",
        price: "0.85 per piece",
        image: "fruit_images/banana.jpg",
        img: "./component/fruits/fruit_images/banana.jpg",
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
        img: "./component/fruits/fruit_images/blackberries box.jpg",
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
        img: "./component/fruits/fruit_images/dragonfruit.jpg",
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
        img: "./component/fruits/fruit_images/grapes.jpg",
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
        img: "./component/fruits/fruit_images/kiwi.jpg",
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
        img: "./component/fruits/fruit_images/mango.jpg",
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
        img: "./component/fruits/fruit_images/orange.jpg",
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
        img: "./component/fruits/fruit_images/pamegrates.jpg",
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
        img: "./component/fruits/fruit_images/pears.jpg",
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
        img: "./component/fruits/fruit_images/pinapple.jpg",
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
        img: "./component/fruits/fruit_images/plum.jpg",
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
        img: "./component/fruits/fruit_images/stawberries.jpg",
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
        img: "./component/fruits/fruit_images/watermelon.jpg",
        origin: "India",
        expiredate: "17/05/2024",
        vitamins: "A, B2, B6,C",
        weight: "2 lb",
        description: "Sweet and refreshing watermelon, perfect for hot summer days. Great for hydrating and packed with vitamins A, B2, B6, and C for overall health and well-being."
    }
];

const DAIRY_LIST = [
    { 
        id: "d1",
        name: "Sealtest Homogenized Milk 3.25 percent",
        price: "$6.89",
        image: "dairy_images/milk.png",
        img: "./component/dairy/dairy_images/milk.png",
        origin: "Canada",
        expiredate: "12/04/2024",
        vitamins: "A, B12, B6",
        weight: "4 L bag",
        description: "Sealtest Homogenized Milk 3.25 percent, sourced from Canadian dairy farms. High in vitamins A, B12, and B6 for bone health and energy."
    },
    { 
        id: "d2",
        name: "Natrel Fine-filtered 2 percent Milk",
        price: "$5.38",
        image: "dairy_images/Chocolate Milk.png",
        img: "./component/dairy/dairy_images/Chocolate Milk.png",
        origin: "USA",
        expiredate: "18/04/2024",
        vitamins: "B1 , B6",
        weight: "2 L",
        description: "Natrel Fine-filtered 2 percent Milk, sourced from American dairy farms. A delicious and nutritious choice, rich in vitamins B1 and B6 for metabolism and energy."
    },
    {
        id : "d3",
        name: "Sealtest Buttermilk 1 percent",
        price: "$2.47",
        image: "dairy_images/Buttermilk.png",
        img: "./component/dairy/dairy_images/Buttermilk.png",
        origin: "Russia",
        expiredate: "10/04/2024",
        vitamins: "C, B2, B6",
        weight: "1 L",
        description: "Sealtest Buttermilk 1 percent, a refreshing dairy beverage with a touch of tanginess. Rich in vitamin C, B2, and B6 for immune support and metabolism."
    },
    { 
        id: "d4",
        name: "Gay Lea Salted Butter",
        price: "$4.87",
        image: "dairy_images/butter.png",
        img: "./component/dairy/dairy_images/butter.png",
        origin: "Canada",
        expiredate: "30/05/2024",
        vitamins: "A, C, B12, B6",
        weight: "454 Gm",
        description: "Gay Lea Salted Butter, made from pure Canadian cream. Rich in vitamins A, C, B12, and B6 for skin health and immune support."
    },
    { 
        id : "d5",
        name: "Great Value Unsalted Butter",
        price: "$5.48",
        image: "dairy_images/Butter Unsalted.png",
        img: "./component/dairy/dairy_images/Butter Unsalted.png",
        origin: "India",
        expiredate: "15/05/2024",
        vitamins: "B2, B6",
        weight: "454 Gm",
        description: "Great Value Unsalted Butter, perfect for baking and cooking. Made from high-quality Indian cream, rich in vitamins B2 and B6 for energy and metabolism."
    },
    {
        id : "d6",
        name: "Brar's Malai Paneer",
        price: "$5.97",
        image: "dairy_images/Paneer.png",
        img: "./component/dairy/dairy_images/Paneer.png",
        origin: "Canada",
        expiredate: "23/05/2024",
        vitamins: "B6",
        weight: " 500 gm",
        description: "Brar's Malai Paneer, a creamy and delicious dairy product perfect for Indian cuisine. Rich in vitamin B6 for metabolism and immune support."
    },
    { 
        id : "d7",
        name: "Great Value Old Cheddar Cheese",
        price: "$4.44",
        image: "dairy_images/Cheese.png",
        img: "./component/dairy/dairy_images/Cheese.png",
        origin: "USA",
        expiredate: "22/05/2024",
        vitamins: "A, B12, B6",
        weight: "400 gm",
        description: "Great Value Old Cheddar Cheese, a classic cheese with a sharp flavor. High in vitamins A, B12, and B6 for bone health and metabolism."
    },
    {
        id: "d8", 
        name: "Great Value Pizza Mozzarella Cheese",
        price: "$5.98",
        image: "dairy_images/Cheese2.png",
        img: "./component/dairy/dairy_images/Cheese2.png",
        origin: "USA",
        expiredate: "28/05/2024",
        vitamins: "A, B12, B6",
        weight: "400 gm",
        description: "Great Value Pizza Mozzarella Cheese, perfect for making delicious pizzas at home. Rich in vitamins A, B12, and B6 for bone health and metabolism."
    },
    {
        id: "d9",
        name: "Lactose Free Marble Cheddar Cheese",
        price: "$4.44",
        image: "dairy_images/Lactos free cheese.png",
        img: "./component/dairy/dairy_images/Lactos free cheese.png",
        origin: "India",
        expiredate: "28/04/2024",
        vitamins: "A, B12, B6",
        weight: "400 gm",
        description: "It is a Great Value Lactose Free Marble Cheddar Cheese, suitable for those with lactose intolerance. Made from high-quality Indian milk, rich in vitamins A, B12, and B6."
    },
    { 
        id : "d10",
        name: "Astro Original Plain Yogurt 2 percent",
        price: "$3.28",
        image: "dairy_images/yogurt1.png",
        img: "./component/dairy/dairy_images/yogurt1.png",
        origin: "Canada",
        expiredate: "22/04/2024",
        vitamins: "A, B12, B6",
        weight: "750 gm",
        description: "Astro Original Plain Yogurt 2 percent, a creamy and delicious yogurt perfect for breakfast or snacks. Rich in vitamins A, B12, and B6 for digestive health and metabolism."
    },
    { 
        id: "d11",
        name: "Liberté Greek Yogurt, Plain",
        price: "$5.94",
        image: "dairy_images/Greek Yogurt.png",
        img: "./component/dairy/dairy_images/Greek Yogurt.png",
        origin: "USA",
        expiredate: "26/04/2024",
        vitamins: "B12, B6",
        weight: " 750 gm",
        description: "Liberté Greek 0% Yogurt, Plain, High Protein, a thick and creamy yogurt with a high protein content. Perfect for post-workout snacks or adding to smoothies."
    },
    {
        id: "d12",
        name: "BRAR'S Pure Desi Ghee",
        price: "$22.97",
        image: "dairy_images/Ghee.png",
        img: "./component/dairy/dairy_images/Ghee.png",
        origin: "India",
        expiredate: "24/04/2024",
        vitamins: "B6, B3, D",
        weight: " 450 gm",
        description: "BRAR'S PURE DESI GHEE, a traditional Indian clarified butter known for its rich flavor and aroma. Perfect for cooking and adding a delicious taste to dishes."
    },
    { 
        id: "d13",
        name: "Sealtest Table Cream 18 percent",
        price: "$4.98",
        image: "dairy_images/cream.png",
        img: "./component/dairy/dairy_images/cream.png",
        origin: "India",
        expiredate: "26/04/2024",
        vitamins: "B3, B12, B6",
        weight: " 1 L",
        description: "Sealtest Table Cream 18 percent, a rich and creamy dairy product perfect for adding richness to soups, sauces, and desserts. High in vitamins A, B12, and B6 for overall health."
    },
    { 
        id: "d14",
        name: "Great Value Whipped Topping",
        price: "$3.48",
        image: "dairy_images/Whipped Topping.png",
        img: "./component/dairy/dairy_images/Whipped Topping.png",
        origin: "Canada",
        expiredate: "29/04/2024",
        vitamins: "D,B2, B6",
        description: "Great Value Whipped Topping, a light and fluffy topping perfect for adding to desserts, hot drinks, or fruit salads. Convenient and delicious!"
    },
    {
        id: "d15",
        name: "Golden D Enriched Large Eggs",
        price: "$8.83",
        image: "dairy_images/Eggs.png",
        img: "./component/dairy/dairy_images/Eggs.png",
        origin: "Canada",
        expiredate: "25/04/2024",
        vitamins: "D, B12, B6",
        description: "GoldEgg Golden D Vitamin D Enriched Large Eggs, farm-fresh eggs enriched with vitamin D for strong bones and overall health. Perfect for breakfast, baking, or cooking."
    }
];

const BAKERY_LIST = [
    {
        id: "b1",
        name: "Your Fresh Market All Butter Croissants",
        price: "$4.97",
        image: "baakery_images/Croissants.png",
        img: "./component/bakery/baakery_images/Croissants.png",
        vitamins: "Vitamin A, Vitamin B, Vitamin E",
        weight: "270 g",
        origin: "France",
        expiredate: "2024-07-01",
        description: "Delicious and flaky all-butter croissants this pack have 6 croissants , perfect for breakfast or as a snack. Made with high-quality ingredients for a rich and indulgent flavor."
      },
      {
        id: "b2",
        name: "Wonder White Sliced Bread",
        price: "$2.97",
        image: "baakery_images/white bread.png",
        img: "./component/bakery/baakery_images/white bread.png",
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
        img: "./component/bakery/baakery_images/D_white bread.png",
        vitamins: "Iron, Folic Acid",
        weight: "675 g",
        origin: "Canada",
        expiredate: "2024-06-20",
        description: "Classic white sliced bread from Dempster’s®, perfect for making sandwiches or enjoying with your favorite spreads."
      },
      {
        id: "b4",
        name: "CHIPS AHOY! Chocolate Chip Cookies",
        price: "$3.48",
        image: "baakery_images/chips ahoy.png",
        img: "./component/bakery/baakery_images/chips ahoy.png",
        vitamins: "Iron, Calcium",
        weight: "258 g",
        origin: "USA",
        expiredate: "2024-07-05",
        description: "Enjoy the soft and chunky goodness of CHIPS AHOY! Soft Chunky Original Cookies. Packed with chunks of chocolate in every bite, these cookies are a delight for all ages."
      },
      {
        id: "b5",
        name: "CHIPS AHOY! Soft Chunky Cookies",
        price: "$3.48",
        image: "baakery_images/chips ahoy2.png",
        img: "./component/bakery/baakery_images/chips ahoy2.png",
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
        img: "./component/bakery/baakery_images/oreo.png",
        vitamins: "Iron, Calcium",
        weight: "Varies",
        origin: "Global",
        expiredate: "2024-07-03",
        description: "Iconic OREO cookies with a delicious creamy filling sandwiched between two chocolate wafers. Perfect for dunking in milk or enjoying as a sweet treat."
    },
      {
        id: "b7",
        name: "Your Fresh Market Apple Turnovers",
        price: "$4.97",
        image: "baakery_images/turnovers.png",
        img: "./component/bakery/baakery_images/turnovers.png",
        vitamins: "Vitamin C",
        weight: "504 gm and 6 pieces",
        origin: "Canada",
        expiredate: "2024-06-25",
        description: "It has 6 pieces.Indulge in the sweet and tangy flavor of Your Fresh Market Apple Turnovers. Made with crisp apples and flaky pastry, these turnovers are a delightful dessert or snack."
      },
      {
        id: "b8",
        name: "Banana Bread Chocolate Chip, 8 Pack",
        price: "$4.47",
        image: "baakery_images/Banana bread.png",
        img: "./component/bakery/baakery_images/Banana bread.png",
        vitamins: "Vitamin B6, Vitamin C",
        weight: "Varies",
        origin: "Mexico",
        expiredate: "2024-06-18",
        description: "Satisfy your sweet cravings with our Banana Bread Chocolate Chip. Made with ripe bananas and studded with chocolate chips, it's a perfect blend of flavors."
      },
      {
        id: "b9",
        name: "Baked Pumpkin Pie-10 inch",
        price: "$4.97",
        image: "baakery_images/Pumpkin pie.png",
        img: "./component/bakery/baakery_images/Pumpkin pie.png",
        vitamins: "Vitamin A, Vitamin C",
        weight: "900 g",
        origin: "Canada",
        expiredate: "2024-06-30",
        description: "It is Fresh Market brand product.Celebrate the flavors of fall with Your Fresh Market Baked Pumpkin Pie. Made with real pumpkin and a blend of spices, it's a comforting and delicious dessert for any occasion."
      },
      {
        id: "b10",
        name: "two-bite® Brownies",
        price: "$6.00",
        image: "baakery_images/Brownies.png",
        img: "./component/bakery/baakery_images/Brownies.png",
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
        img: "./component/bakery/baakery_images/Brownies2.png",
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
        img: "./component/bakery/baakery_images/Almond Cake.png",
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
        img: "./component/bakery/baakery_images/cake.png",
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
        img: "./component/bakery/baakery_images/muffins.png",
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
        img: "./component/bakery/baakery_images/Red velvet cupcakes.png",
        vitamins: "Iron, Calcium",
        weight: "465 g",
        origin: "Canada",
        expiredate: "2024-06-23",
        description: "Treat yourself to the rich and velvety taste of Betty Crocker Red Velvet Cupcakes. Topped with creamy cream cheese frosting, these cupcakes are a decadent delight for any occasion."
      }
    ];

const PRODUCTS_LIST = [
    {
        id: "v1",
        name: "Bitterground",
        img: "../vegetables/vegetable_image/bitterground.jpg",
        price: 1.79,
    },
    
    {
        id: "v2",
        name: "Cabbage",
        img: "../vegetables/vegetable_image/cabbage.jpg",
        price: 2.79,
    },
    {
        id: "v3",
        name: "Carrtos",
        img: "../vegetables/vegetable_image/CARROTS_resized.jpg",
        price: 1.99,
    },
    {
        id: "v4",
        name: "Cauliflower",
        img: "../vegetables/vegetable_image/cauliflower.jpg",
        price: 1.89,
    },
    {
        id: "v5",
        name: "Chilli",
        img: "../vegetables/vegetable_image/CHLLI_resized.jpg",
        price: 1.49,
    },
    {
        id: "v6",
        name: "Corriander",
        img: "../vegetables/vegetable_image/CORRIANDER.jpg",
        price: 2.79,
    },
    {
        id: "v7",
        name: "Garlic",
        img: "../vegetables/vegetable_image/GARLIC.jpg",
        price: 1.79,
    },
    {
        id: "v8",
        name: "Ginger",
        img: "../vegetables/vegetable_image/ginger.jpg",
        price: 1.79,
    },
    {
        id : "v9",
        name: "Corn",
        price: 3.98,
        img: "../vegetables/vegetable_image/CORN.jpg",
    },
    { 
        id : "v10",
        name: "pappers",
        price: 2.98,
        img: "../vegetables/vegetable_image/pappers.jpg"
    },
    {
        id : "v11",
        name: "Onion Bag",
        price: 2.98,
        img: "../vegetables/vegetable_image/ONION_BAG.jpg"
    },
    { 
        id : "v12",
        name: "Tomatoes",
        price: 1.98,
        img: "../vegetables/vegetable_image/TOMATOES.jpg"
    },
    { 
        id : "v13",
        name: "Egg Plant",
        price: 1.98,
        img: "../vegetables/vegetable_image/eggplant.jpg"
    },
    { 
        id: "v7",
        name: "Garlic",
        price: 2.98,
        img: "../vegetables/vegetable_image/GARLIC.jpg"
    },
    {
        
        id: "v14",
        name: "Potato Bag",
        price: 2.98,
        img: "../vegetables/vegetable_image/patatoes.jpg"
    },
    { 
        id: "v15",
        name: "Randish",
        price: 1.98,
        img: "../vegetables/vegetable_image/randish.jpg"
    },
    { 
        id: "v16",
        name: "Lime",
        price: 2.98,
        img: "../vegetables/vegetable_image/lemon.jpg"
    },
    {
        id: "v17",
        name: "Sweet Potatoes",
        price: 2.98,
        img: "../vegetables/vegetable_image/sweet_patatoes.jpg"
    },
    {
        id: "v18",
        name: "Green Pea",
        img: "../vegetables/vegetable_image/greenpeas.jpg",
        price: 1.49
    },
    {
        id: "f1",
        name: "Gala Apple",
        img: "../fruits/fruit_images/apple.jpg",
        price: 1.59,
    },
    
    {
        id: "f2",
        name: "Organic Avacados(4 pack)",
        img: "../fruits/fruit_images/avocado.jpg",
        price: 6.98,
    },
    {
        id: "f3",
        name: "Banana Manzano",
        img: "../fruits/fruit_images/banana.jpg",
        price: 0.29,
    },
    {
        id: "f4",
        name: "Blackberries",
        img: "../fruits/fruit_images/blackberries box.jpg",
        price: 7.47,
    },
    {
        id: "f5",
        name: "Watermelon, Sold in singles",
        img: "../fruits/fruit_images/watermelon.jpg",
        price: 5.99,
    },
    {
        id: "f6",
        name: "Dragonfruits",
        img: "../fruits/fruit_images/dragonfruit.jpg",
        price: 2.99,
    },
    {
        id: "f7",
        name: "Green & Black grapes",
        img: "../fruits/fruit_images/grapes.jpg",
        price: 2.99,
    },
    {
        id: "f8",
        name: "Godlen Kiwi",
        img: "../fruits/fruit_images/kiwi.jpg",
        price: 1.59,
    },
    {
        id: "f9", 
        name: "Indian kesar mango",
        price: 12.52,
        img: "../fruits/fruit_images/mango.jpg"
    },
    {
        id: "f10",
        name: "Orange, Seedless, Sold in singles",
        price: 1.23,
        img: "../fruits/fruit_images/orange.jpg"
    },
    { 
        id : "f11",
        name: "pamegrates",
        price: 2.16,
        img: "../fruits/fruit_images/pamegrates.jpg"
    },
    { 
        id: "f12",
        name: "Pears",
        price: 1.68,
        img: "../fruits/fruit_images/pears.jpg"
    },
    {
        
        id: "f13",
        name: "Pineapple, Golden Jumbo",
        price: 2.78,
        img: "../fruits/fruit_images/pinapple.jpg"
    },
    { 
        id: "f14",
        name: "Plums",
        price: 0.98,
        img: "../fruits/fruit_images/plum.jpg"
    },
    { 
        id: "f15",
        name: "stawberries box",
        price: 3.98,
        img: "../fruits/fruit_images/stawberries.jpg"
    },
    { 
    id: "d1",
    name: "Sealtest Homogenized Milk 3.25 percent, ",
    price: 6.89,
    img: "../dairy/dairy_images/milk.png"
    },
    { 
    id: "d2",
    name: "Natrel Fine-filtered 2 percent Milk",
    price: 5.38,
    img: "../dairy/dairy_images/Chocolate Milk.png"
    },
    {
    id : "d3",
    name: "Sealtest Buttermilk 1 percent",
    price: 2.47,
    img: "../dairy/dairy_images/Buttermilk.png"
    },
    { 
    id: "d4",
    name: "Gay Lea Salted Butter",
    price: 4.87,
    img: "../dairy/dairy_images/butter.png"
    },
    { 
    id : "d5",
    name: "Great Value Unsalted Butter",
    price: 5.48,
    img: "../dairy/dairy_images/Butter Unsalted.png"
    },
    {
    id : "d6",
    name: "Brar's Malai Paneer",
    price: 5.97,
    img: "../dairy/dairy_images/Paneer.png"
    },
    { 
    id : "d7",
    name: "Great Value Old Cheddar Cheese",
    price: 4.44,
    img: "../dairy/dairy_images/Cheese.png"
    },
    {
    id: "d8", 
    name: "Great Value Pizza Mozzarella Cheese",
    price: 5.98,
    img: "../dairy/dairy_images/Cheese2.png"
    },
    {
    id: "d9",
    name: "Great Value Lactose Free Marble Cheddar Cheese",
    price: 4.44,
    img: "../dairy/dairy_images/Lactos free cheese.png"
    },
    { 
    id : "d10",
    name: "Astro Original Plain Yogurt 2 percent",
    price: 3.28,
    img: "../dairy/dairy_images/yogurt1.png"
    },
    { 
    id: "d11",
    name: "Liberté Greek 0% Yogurt, Plain, High Protein",
    price: 5.94,
    img: "../dairy/dairy_images/Greek Yogurt.png"
    },
    {
    
    id: "d12",
    name: "BRAR'S PURE DESI GHEE",
    price: 22.97,
    img: "../dairy/dairy_images/Ghee.png"
    },
    { 
    id: "d13",
    name: "Sealtest Table Cream 18 percent",
    price: 4.98,
    img: "../dairy/dairy_images/cream.png"
    },
    { 
    id: "d14",
    name: "Great Value Whipped Topping",
    price: 3.48,
    img: "../dairy/dairy_images/Whipped Topping.png"
    },
    {
    id: "d15",
    name: "GoldEgg Golden D Vitamin D Enriched Large Eggs",
    price: 8.83,
    img: "../dairy/dairy_images/Eggs.png"
    },
    {
    id: "b1",
    name: "Your Fresh Market All Butter Croissants, 6 croissants",
    price: 4.97,
    img: "../bakery/../bakery/baakery_images/Croissants.png"
    },
    {
    id: "b2",
    name: "Wonder White Sliced Bread",
    price: 2.97,
    img: "../bakery/baakery_images/white bread.png"
    },
    {
    id: "b3",
    name: "Dempster’s® White Sliced Bread",
    price: 3.57,
    img: "../bakery/baakery_images/D_white bread.png"
    },
    {
    id: "b4",
    name: "CHIPS AHOY! Original Chocolate Chip Cookies, Resealable Pack",
    price: 3.48,
    img: "../bakery/baakery_images/chips ahoy.png"
    },
    {
    id: "b5",
    name: "CHIPS AHOY! Soft Chunky Original Cookies",
    price: 3.48,
    img: "../bakery/baakery_images/chips ahoy2.png"
    },
    {
    id: "b6",
    name: "OREO",
    price: 3.48,
    img: "../bakery/baakery_images/oreo.png"
    },
    {
    id: "b7",
    name: "Your Fresh Market Apple Turnovers, 6 pieces",
    price: 4.97,
    img: "../bakery/baakery_images/turnovers.png"
    },
    {
    id: "b8",
    name: "Banana Bread Chocolate Chip, 8 Pack",
    price: 4.47,
    img: "../bakery/baakery_images/Banana bread.png"
    },
    {
    id: "b9",
    name: "Your Fresh Market Baked 10' Pumpkin Pie, 10 inch",
    price: 4.97,
    img: "../bakery/baakery_images/Pumpkin pie.png",
    },
    {
    id: "b10",
    name: "two-bite® Brownies",
    price: 6.00,
    img: "../bakery/baakery_images/Brownies.png"
    },
    {
    id: "b11",
    name: "Killer Brownie Kitchen Sink Brownies",
    price: 5.97,
    img: "../bakery/baakery_images/Brownies2.png"
    },
    {
    id: "b12",
    name: "Almond Cake Rusk",
    price: 4.97,
    img: "../bakery/baakery_images/Almond Cake.png"
    },
    {
    id: "b13",
    name: "Your Fresh Market Chocolate Fudge Cake",
    price: 6.00,
    img: "../bakery/baakery_images/cake.png"
    },
    {
    id: "b14",
    name: "Quaker Blueberry Buttermilk Flavour Muffin Mix",
    price: 5.47,
    img: "../bakery/baakery_images/muffins.png"
    },
    {
    id: "b15",
    name: "Betty Crocker Red Velvet Cupcakes with cream cheese flavoured frosting",
    price: 3.97,
    img: "../bakery/baakery_images/Red velvet cupcakes.png"
    }
    ];

const addToCart = (id) => {
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
        window.location.href = "../cart/index.html"
      }

      const saveProduct = (id) => {
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
export {VEGETABLES_LIST, FRUITS_LIST, DAIRY_LIST, BAKERY_LIST, PRODUCTS_LIST, addToCart, saveProduct};