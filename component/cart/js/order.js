const VEGETABLES = [
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
      img: ".../vegetables/vegetable_image/GARLIC.jpg"
  },
  {
      
      id: "v14",
      name: "Potato Bag",
      price: 2.98,
      img: ".../vegetables/vegetable_image/patatoes.jpg"
  },
  { 
      id: "v15",
      name: "Randish",
      price: 1.98,
      img: ".../vegetables/vegetable_image/randish.jpg"
  },
  { 
      id: "v16",
      name: "Lime",
      price: 2.98,
      img: ".../vegetables/vegetable_image/lemon.jpg"
  },
  {
      id: "v17",
      name: "Sweet Potatoes",
      price: 2.98,
      img: ".../vegetables/vegetable_image/sweet_patatoes.jpg"
  },
  {
      id: "v18",
      name: "Green Pea",
      img: ".../vegetables/vegetable_image/greenpeas.jpg",
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
  ];

$(function(){
    const orderItemsString = localStorage.getItem('orderItems');
    if ( !orderItemsString || orderItemsString.length == 0)
        $("#title").text("You haven't placed any order yet!");
    else
        $("#title").text("Your Orders:");
    let orderItems = JSON.parse(orderItemsString);
    let orderNumber = 1;

    for (let key in orderItems) {
        const items = JSON.parse(orderItems[key]);
        const accordionContainer = document.createElement('div');
            accordionContainer.classList.add('accordion');
            accordionContainer.id = 'orderAccordion' + orderNumber;
    
            // Create accordion item
            const accordionItem = document.createElement('div');
            accordionItem.classList.add('accordion-item');
    
            // Create accordion header
            const accordionHeader = document.createElement('h2');
            accordionHeader.classList.add('accordion-header');
    
            // Create accordion button
            const accordionButton = document.createElement('button');
            accordionButton.classList.add('accordion-button');
            accordionButton.setAttribute('type', 'button');
            accordionButton.setAttribute('data-bs-toggle', 'collapse');
            accordionButton.setAttribute('data-bs-target', '#accordion' + orderNumber);
            accordionButton.setAttribute('aria-expanded', 'true');
            accordionButton.setAttribute('aria-controls', 'accordion' + orderNumber);
            accordionButton.textContent = 'Order ' + orderNumber;
    
            // Append button to header
            accordionHeader.appendChild(accordionButton);
    
            // Create accordion body
            const accordionBody = document.createElement('div');
            accordionBody.id = 'accordion' + orderNumber;
            accordionBody.classList.add('accordion-collapse', 'collapse', 'show');
    
        items.forEach(function(element) {
           element = {...VEGETABLES.find(ele => ele.id == element.id), quantity: element.quantity};
            
            // Create accordion body content
            const accordionBodyContent = createOrderItem(element.quantity,element.price,element.img,element.name);
    
            // Append body content to body
            accordionBody.appendChild(accordionBodyContent);
    
            
        });
        // Append header and body to item
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionBody);

        // Append item to container
        accordionContainer.appendChild(accordionItem);

        // Append container to document body
        document.getElementById('orderContainer').appendChild(accordionContainer);
        orderNumber++;
    }

});


const createOrderItem = (quantity,price,imageurl,itemName)=>{
        // Create container div
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container-sm');

    // Create row div
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'align-items-center');

    // Create column div for image
    const imageColumnDiv = document.createElement('div');
    imageColumnDiv.classList.add('col-md-4');

    // Create image element
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageurl);
    imageElement.setAttribute('alt', 'Carrot');
    imageElement.classList.add('img-thumbnail');
    imageElement.style.height = '100px'; // Apply inline style

    // Append image element to image column div
    imageColumnDiv.appendChild(imageElement);

    // Create column div for text
    const textColumnDiv = document.createElement('div');
    textColumnDiv.classList.add('col-md-4');

    // Create heading
    const headingElement = document.createElement('h4');
    headingElement.classList.add('mb-4');
    headingElement.textContent = itemName;

    // Create lead paragraph for price
    const priceParagraph = document.createElement('p');
    priceParagraph.classList.add('lead');
    priceParagraph.textContent = price;

    // Append heading and price paragraph to text column div
    textColumnDiv.appendChild(headingElement);
    textColumnDiv.appendChild(priceParagraph);

    // Create column div for quantity and total
    const quantityColumnDiv = document.createElement('div');
    quantityColumnDiv.classList.add('col-md-4');

    // Create span for quantity
    const quantitySpan = document.createElement('span');
    quantitySpan.classList.add('quantity');
    quantitySpan.textContent = ' Quantity : ' + quantity;

    // Create paragraph for total
    const totalParagraph = document.createElement('p');
    totalParagraph.classList.add('total');
    totalParagraph.innerHTML = 'Total : ' + quantity + ' * ' + price + ' = ' + (quantity * price); // Using innerHTML to include HTML tags

    // Append quantity span and total paragraph to quantity column div
    quantityColumnDiv.appendChild(quantitySpan);
    quantityColumnDiv.appendChild(totalParagraph);

    // Append image column div, text column div, and quantity column div to row div
    rowDiv.appendChild(imageColumnDiv);
    rowDiv.appendChild(textColumnDiv);
    rowDiv.appendChild(quantityColumnDiv);

    // Append row div to container div
    containerDiv.appendChild(rowDiv);

    return containerDiv;
}