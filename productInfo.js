//const apiProductUrl = "https://api.jsonbin.io/v3/b/65634e6812a5d376599f1a7e"
// const apiProductUrl = "https://api.jsonbin.io/v3/b/65791b331f5677401f0d116d"
const apiProductUrl = "https://api.jsonbin.io/v3/b/657b00cb1f5677401f0dbb4f"
 
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
        <script type="module" src="./components/productCard.js"></script>
        <product-card img="${this.img}" name="${this.name}" price="${this.price}"></product-card>
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

function clickedButton() {
    console.log("clicked");
}


moveToItemDetails = function(name) {
    const nowUrl = window.location.href;
    let newUrl = nowUrl.replace("shopping.html" , "itemDetails.html");
    newUrl += `?name=${name}`;
    window.location.href = newUrl; 
}
