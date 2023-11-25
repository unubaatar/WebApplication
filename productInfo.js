const apiProductUrl = "https://api.jsonbin.io/v3/b/6554eaff12a5d3765999df9e"

class Product {
    constructor(product) {
        this.name = product.name;
        this.img = product.img;
        this.type = product.type;
        this.material = product.material;
        this.color = product.color;
        this.price = product.price;
    }
    render = function() {
        return `
        <article class="shop-card">
            <img src="${this.img}" class="shop-card-img" onclick="moveToItemDetails('${this.name}')">
            <h4 class="shop-card-name">${this.name}</h4>
            <h4>${this.price}₮</h4>
            <button class="shop-card-shopping"><i class="fa-solid fa-cart-shopping" style="color:black;"></i></button>
            <button class="shop-card-like"><i class="fa-solid fa-heart" style="color: #141415;"></i></button>
        </article>
        `
    }
}


class App {
    constructor(target) {
        this.target = target;
        this.apiProductUrl = apiProductUrl;
    }
    init = function(productType) {
        fetch(apiProductUrl).then(response => response.json()).then(data => {
            let productsInfo = data.record;
            let selectedSection = document.getElementById(this.target);
            for(let i = 0 ; i < productsInfo.length ; i++) {
                if(productsInfo[i].type === productType) {
                    const product = new Product(productsInfo[i]);
                    selectedSection.insertAdjacentHTML('afterbegin' , product.render());
                }
            }
        })

    }
}

moveToItemDetails = function(name) {
    const nowUrl = window.location.href;
    let newUrl = nowUrl.replace("shopping.html" , "itemDetails.html");
    newUrl += `?name=${name}`;
    window.location.href = newUrl; 
}


// const productList = [
//     {   
//         "name": "AOT logo hoodie",
//         "img" : "https://i.ibb.co/gF6HsYh/clothes1.jpg",
//         "type" : "Clothes",
//         "material" : "Fabric",
//         "color": "Black",
//         "size": "",
//         "price": 69900
//     },
//     {   
//         "name": "AOT gray Levi hoodie",
//         "img" : "https://i.ibb.co/qYDr7K2/bestseller6.jpg",
//         "type" : "Clothes",
//         "material" : "Fabric",
//         "color": "Gray",
//         "size": "",
//         "price": 69900
//     },
//     {   
//         "name": "AOT black Levi hoodie",
//         "img" : "https://i.ibb.co/WvNMTR1/clothes4.jpg",
//         "type" : "Clothes",
//         "material" : "Fabric",
//         "color": "Black",
//         "size": "",
//         "price": 69900
//     },
//     {   
//         "name": "AOT white Levi hoodie",
//         "img" : "https://i.ibb.co/SsS5ZG1/bestseller4.jpg",
//         "type" : "Clothes",
//         "material" : "Fabric",
//         "color": "White",
//         "size": "",
//         "price": 69900
//     },
//     {   
//         "name": "AOT gray Levi hoodie",
//         "img" : "https://i.ibb.co/qYDr7K2/bestseller6.jpg",
//         "type" : "Clothes",
//         "material" : "Fabric",
//         "color": "Gray",
//         "size": "",
//         "price": 69900
//     },
//     {   
//         "name": "JuJutsi kaisen",
//         "img" : "https://i.ibb.co/ZXbM5SP/manga1.jpg",
//         "type" : "Manga",
//         "material" : "Paper",
//         "color": "",
//         "size": "",
//         "price": 29900
//     },
//     {   
//         "name": "Oshi no ko",
//         "img" : "https://i.ibb.co/Pr6BmkV/manga2.jpg",
//         "type" : "Manga",
//         "material" : "Paper",
//         "color": "",
//         "size": "",
//         "price": 29900
//     },
//     {   
//         "name": "Mushoku tensei",
//         "img" : "https://i.ibb.co/F5X1xBx/manga3.jpg",
//         "type" : "Manga",
//         "material" : "Paper",
//         "color": "",
//         "size": "",
//         "price": 29900
//     },
//     {   
//         "name": "Team Pheonix",
//         "img" : "https://i.ibb.co/pdKLQfY/manga4.jpg",
//         "type" : "Manga",
//         "material" : "Paper",
//         "color": "",
//         "size": "",
//         "price": 29900
//     },
//     {   
//         "name": "My Hero Acdemia",
//         "img" : "https://i.ibb.co/XFQkn83/manga5.jpg",
//         "type" : "Manga",
//         "material" : "Paper",
//         "color": "",
//         "size": "",
//         "price": 29900
//     },
//     {   
//         "name": "AOT black necklace",
//         "img" : "https://i.ibb.co/FnKN5fs/accessories2.webp",
//         "type" : "Accessories",
//         "material" : "Steel",
//         "color": "",
//         "size": "",
//         "price": 25900
//     },
//     {   
//         "name": "AOT couple necklace",
//         "img" : "https://i.ibb.co/YdBSC7g/accessories1.webp",
//         "type" : "Accessories",
//         "material" : "Steel",
//         "color": "",
//         "size": "",
//         "price": 25900
//     },
//     {   
//         "name": "AOT green necklace",
//         "img" : "https://i.ibb.co/2ydjMXb/accessories4.webp",
//         "type" : "Accessories",
//         "material" : "Steel",
//         "color": "",
//         "size": "",
//         "price": 25900
//     },
//     {   
//         "name": "AOT red necklace",
//         "img" : "https://i.ibb.co/f1xb4hM/accessories5.webp",
//         "type" : "Accessories",
//         "material" : "Steel",
//         "color": "",
//         "size": "",
//         "price": 25900
//     },
//     {   
//         "name": "AOT sword necklace",
//         "img" : "https://i.ibb.co/KsBV8S3/accessories3.webp",
//         "type" : "Accessories",
//         "material" : "Steel",
//         "color": "",
//         "size": "",
//         "price": 25900
//     },
//     {   
//         "name": "AOT Mikasa model1",
//         "img" : "https://i.ibb.co/Y0CrVLy/bestseller3.jpg",
//         "type" : "Figures",
//         "material" : "Plastic",
//         "color": "",
//         "size": "",
//         "price": 49900
//     },
//     {   
//         "name": "AOT Mikasa cute model1",
//         "img" : "https://i.ibb.co/2sYm0WG/bestseller5.jpg",
//         "type" : "Figures",
//         "material" : "Plastic",
//         "color": "",
//         "size": "",
//         "price": 54900
//     },
//     {   
//         "name": "AOT Mikasa model2",
//         "img" : "https://i.ibb.co/20rhFww/figure2.webp",
//         "type" : "Figures",
//         "material" : "Plastic",
//         "color": "",
//         "size": "",
//         "price": 49900
//     },
//     {   
//         "name": "AOT Mikasa cute model2",
//         "img" : "https://i.ibb.co/GvXgS4y/figure3.jpg",
//         "type" : "Figures",
//         "material" : "Plastic",
//         "color": "",
//         "size": "",
//         "price": 54900
//     },
//     {   
//         "name": "AOT Levi cute model1",
//         "img" : "https://i.ibb.co/yNGCmH7/figure5.webp",
//         "type" : "Figures",
//         "material" : "Plastic",
//         "color": "",
//         "size": "",
//         "price": 54900
//     }    
// ]