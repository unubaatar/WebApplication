class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "closed" });
        this.productImage = this.getAttribute("img") ?? "https://i.ibb.co/9hLBbbc/ichigo-figure.webp";
        this.productName = this.getAttribute("name") ?? "No Data";
        this.price = this.getAttribute("price") ?? "No Data";
        this.count = 1;
        this.#Render();
    }

    connectedCallback() {
        this.myRoot.querySelectorAll("button")[0].addEventListener("click", (e) => {
            e.stopPropagation();
            const myCart = document.querySelector("cart-info");
            myCart.addToCart(this);
            document.getElementById("totalProduct").innerText = myCart.getTotalCount();
        });

        this.myRoot.querySelectorAll("button")[1].addEventListener("click" , (e) => {
            e.stopPropagation();
            const event = new CustomEvent("favorite" , {
                bubbles: true,
                composed: true,
                detail: {
                    name : this.productName,
                    img: this.productImage
                }
            })
            document.dispatchEvent(event);
        } )
    }

    #Render() {
        this.myRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <style>
        * {
        margin: 0;
        padding: 0;
    }  
    .shop-card {
      border-radius: 0.7rem;
      text-align: center;
      background: rgb(101, 103, 125);
      margin: 8px 12px;
      padding: 0.3rem;
      width: 195px;
      box-shadow: 0 4px 8px 0 rgba(203, 202, 202, 0.2);
      cursor: pointer;
      & .shop-card-img {
          border-radius: 1.5rem;
          height: 13rem;
          width: 10.5rem;
          padding: 0.8rem;                     
      } 
      & .shop-card-name {
        padding: 0 0.5rem 0.5rem 0.5rem;
        flex-wrap: wrap;
        overflow: hidden;
        max-width: 70%;
        max-height: 30%;
        width: 150px;
        height: 40px;
        margin-left: 20px;
      }
      & button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        padding: 5px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 40px;
        background: none;
        & i {
            color: white;
        }
        &:hover {
          background-color: rgb(192, 97, 38);
        }
      }
      &:hover {
        background: linear-gradient(45deg, rgb(176, 161, 156), #eeeaeb);
      }
    }
    .shop-card-buttons {
      display: flex;
    }
        </style>
        <article class="shop-card" onclick="moveToItemDetails('${this.productName}')">
        <img src="${this.productImage}" class="shop-card-img">
        <h4 class="shop-card-name">${this.productName}</h4>
        <h4>${parseInt(this.price).toLocaleString()}₮</h4>
        <article class="shop-card-buttons">
        <button class="shop-card-shopping role="cart" ><i class="fa-solid fa-cart-shopping fa-xl"></i></button>
        <button class="shop-card-like role="favorite"><i class="fa-solid fa-heart fa-xl"></i></button>
        </article>         
        `;
    }

    static get observedAttributes() {
        return ["name", "price"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case "name":
                // console.log(`${name} has changed. old=${oldVal}, new=${newVal}`);
                this.productName = newVal;
                this.#Render();
                break;
            case "price":
                // console.log(`${name} has changed. old=${oldVal}, new=${newVal}`);
                this.price = newVal;
                this.#Render();
                break;
            default:
                break;
        }
    }
}

window.customElements.define("product-card", ProductCard);
