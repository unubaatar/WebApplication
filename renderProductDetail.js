document.addEventListener("DOMContentLoaded" , function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("name");
    const productInstance = getProductInfoByName(productName);
    const productViewSection = document.getElementById("itemDetailSection");
    productViewSection.innerHTML = `
      <section class="itemDetail">
      <img id="itemImage" src="${productInstance.img}" alt="Item">
      
      <article  class="detailInfo">
        <ul>
          <h3>${productInstance.name}</h3>
          <li>Material: <strong>${productInstance.material}</strong> </li>
          <li>Color: <strong>${productInstance.color}</strong> </li>
          <li>Size: <strong>4*3cm</strong> </li>
          <span class="star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z"
              />
            </svg>
          </span>
          <div><em>${productInstance.price}&#8366;</em></div>
        </ul>
            <section class="quantity" for="quantity">
              <button onclick="decreaseItemCount()">-</button>
              <input id="productCountInput" type="text" value = "1" style="text-align: center;">
              <button  onclick="increaseItemCount()">+</button>
            </section>
            <button class="purchaseBtn"><i class="fa-solid fa-cart-shopping"></i>Худалдан авах</button>
      </article>
    </section> 
    `
    
})


getProductInfoByName = function(productName) {
    return productList.find(function(product) {
        if(product.name === productName) {
            return product;
        }
    })
}

increaseItemCount = function() {
    let count = document.getElementById("productCountInput").value;
    if(count < 10) {
        count++;
    }
    document.getElementById("productCountInput").value = count;
}

decreaseItemCount = function() {
    let count = document.getElementById("productCountInput").value;
    if(count > 0) {
        count--;
    }
    document.getElementById("productCountInput").value = count;
}

const productList = [
    {   
        "name": "AOT logo hoodie",
        "img" : "https://i.ibb.co/gF6HsYh/clothes1.jpg",
        "type" : "Clothes",
        "material" : "Fabric",
        "color": "Black",
        "size": "",
        "price": 69900
    },
    {   
        "name": "AOT gray Levi hoodie",
        "img" : "https://i.ibb.co/qYDr7K2/bestseller6.jpg",
        "type" : "Clothes",
        "material" : "Fabric",
        "color": "Gray",
        "size": "",
        "price": 69900
    },
    {   
        "name": "AOT black Levi hoodie",
        "img" : "https://i.ibb.co/WvNMTR1/clothes4.jpg",
        "type" : "Clothes",
        "material" : "Fabric",
        "color": "Black",
        "size": "",
        "price": 69900
    },
    {   
        "name": "AOT white Levi hoodie",
        "img" : "https://i.ibb.co/SsS5ZG1/bestseller4.jpg",
        "type" : "Clothes",
        "material" : "Fabric",
        "color": "White",
        "size": "",
        "price": 69900
    },
    {   
        "name": "AOT gray Levi hoodie",
        "img" : "https://i.ibb.co/qYDr7K2/bestseller6.jpg",
        "type" : "Clothes",
        "material" : "Fabric",
        "color": "Gray",
        "size": "",
        "price": 69900
    },
    {   
        "name": "JuJutsi kaisen",
        "img" : "https://i.ibb.co/ZXbM5SP/manga1.jpg",
        "type" : "Manga",
        "material" : "Paper",
        "color": "",
        "size": "",
        "price": 29900
    },
    {   
        "name": "Oshi no ko",
        "img" : "https://i.ibb.co/Pr6BmkV/manga2.jpg",
        "type" : "Manga",
        "material" : "Paper",
        "color": "",
        "size": "",
        "price": 29900
    },
    {   
        "name": "Mushoku tensei",
        "img" : "https://i.ibb.co/F5X1xBx/manga3.jpg",
        "type" : "Manga",
        "material" : "Paper",
        "color": "",
        "size": "",
        "price": 29900
    },
    {   
        "name": "Team Pheonix",
        "img" : "https://i.ibb.co/pdKLQfY/manga4.jpg",
        "type" : "Manga",
        "material" : "Paper",
        "color": "",
        "size": "",
        "price": 29900
    },
    {   
        "name": "My Hero Acdemia",
        "img" : "https://i.ibb.co/XFQkn83/manga5.jpg",
        "type" : "Manga",
        "material" : "Paper",
        "color": "",
        "size": "",
        "price": 29900
    },
    {   
        "name": "AOT black necklace",
        "img" : "https://i.ibb.co/FnKN5fs/accessories2.webp",
        "type" : "Accessories",
        "material" : "Steel",
        "color": "",
        "size": "",
        "price": 25900
    },
    {   
        "name": "AOT couple necklace",
        "img" : "https://i.ibb.co/YdBSC7g/accessories1.webp",
        "type" : "Accessories",
        "material" : "Steel",
        "color": "",
        "size": "",
        "price": 25900
    },
    {   
        "name": "AOT green necklace",
        "img" : "https://i.ibb.co/2ydjMXb/accessories4.webp",
        "type" : "Accessories",
        "material" : "Steel",
        "color": "",
        "size": "",
        "price": 25900
    },
    {   
        "name": "AOT red necklace",
        "img" : "https://i.ibb.co/f1xb4hM/accessories5.webp",
        "type" : "Accessories",
        "material" : "Steel",
        "color": "",
        "size": "",
        "price": 25900
    },
    {   
        "name": "AOT sword necklace",
        "img" : "https://i.ibb.co/KsBV8S3/accessories3.webp",
        "type" : "Accessories",
        "material" : "Steel",
        "color": "",
        "size": "",
        "price": 25900
    },
    {   
        "name": "AOT Mikasa model1",
        "img" : "https://i.ibb.co/Y0CrVLy/bestseller3.jpg",
        "type" : "Figures",
        "material" : "Plastic",
        "color": "",
        "size": "",
        "price": 49900
    },
    {   
        "name": "AOT Mikasa cute model1",
        "img" : "https://i.ibb.co/2sYm0WG/bestseller5.jpg",
        "type" : "Figures",
        "material" : "Plastic",
        "color": "",
        "size": "",
        "price": 54900
    },
    {   
        "name": "AOT Mikasa model2",
        "img" : "https://i.ibb.co/20rhFww/figure2.webp",
        "type" : "Figures",
        "material" : "Plastic",
        "color": "",
        "size": "",
        "price": 49900
    },
    {   
        "name": "AOT Mikasa cute model2",
        "img" : "https://i.ibb.co/GvXgS4y/figure3.jpg",
        "type" : "Figures",
        "material" : "Plastic",
        "color": "",
        "size": "",
        "price": 54900
    },
    {   
        "name": "AOT Levi cute model1",
        "img" : "https://i.ibb.co/yNGCmH7/figure5.webp",
        "type" : "Figures",
        "material" : "Plastic",
        "color": "",
        "size": "",
        "price": 54900
    }    
]