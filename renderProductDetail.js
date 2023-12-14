// const apiProductUrl = "https://api.jsonbin.io/v3/b/65791b331f5677401f0d116d";
const apiProductUrl = "https://api.jsonbin.io/v3/b/657b00cb1f5677401f0dbb4f"

document.addEventListener("DOMContentLoaded" , function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("name");
    fetch(apiProductUrl).then(response => response.json()).then(data => {
      let productList = data.record;
      const productInstance = getProductInfoByName(productList , productName);
      const productViewSection = document.getElementById("itemDetailSection");
      productViewSection.innerHTML = `
        <section class="itemDetail">
        <center>
        <img id="itemImage" src="${productInstance.img}" alt="Item">
        </center>
        <article  class="detailInfo">
        <h3>${productInstance.name}</h3>
          <ul>
            <li>Material: <strong>${productInstance.material}</strong> </li>
            <li>Color: <strong>${productInstance.color}</strong> </li>
            <li>Size: <strong>4*3cm</strong> </li>
            <li><em>${productInstance.price}&#8366;</em></li>
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
})

getProductInfoByName = function( list ,productName) {
    return list.find(function(product) {
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