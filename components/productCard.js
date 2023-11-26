    
    class ProductCard extends HTMLElement {

    constructor() {
        super();
        this.productImage = this.getAttribute("img") ?? "https://i.ibb.co/9hLBbbc/ichigo-figure.webp";
        this.productName = this.getAttribute("name") ?? "No Data";
        this.price = this.getAttribute("price") ?? "No Data";
        this.#Render();

    }

    connectedCallback() {
        this.querySelectorAll("button")[0].addEventListener("click" , () => {
            console.log("add to cart")
        })
    }

    #Render() {
        this.innerHTML = `
        <article class="shop-card">
        <img src="${this.productImage}" class="shop-card-img" onclick="moveToItemDetails('${this.name}')">
        <h4 class="shop-card-name">${this.productName}</h4>
        <h4>${this.price}₮</h4>
        <article class="shop-card-buttons">
        <button class="shop-card-shopping" role="addCart"><i class="fa-solid fa-cart-shopping fa-xl"></i></button>
        <button class="shop-card-like role="addFavorite""><i class="fa-solid fa-heart fa-xl"></i></button>
        </article>            
        `;
    }

    static get observedAttributes() {
        return ['name', 'price'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case "name":
                console.log(`${name} has changed. old=${oldVal}, new=${newVal}`);
                this.productName = newVal;
                this.#Render();
                break;
            case "price":
                console.log(`${name} has changed. old=${oldVal}, new=${newVal}`);
                this.price = newVal;
                this.#Render();
                break;
            default:
                break;
        }    
    }
}

window.customElements.define("product-card", ProductCard);
