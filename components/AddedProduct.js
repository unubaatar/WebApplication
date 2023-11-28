class AddedProduct extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "open" });
        this.productImage = this.getAttribute("img") ?? "https://i.ibb.co/9hLBbbc/ichigo-figure.webp"
        this.productName = this.getAttribute("name")
        this.price = this.getAttribute("price");
        this.count =  this.getAttribute("count");
        this.#Render();
    }

    connectedCallback() {
        let deleteButton = this.myRoot.querySelectorAll("button");
        deleteButton[0].addEventListener("click" , ()=> {
            this.style.display = "none";
            let cartInfo = document.querySelector("cart-info");
            cartInfo.deleteItem(this);
        })
    }

    #Render() {
        this.myRoot.innerHTML = `
            <article class="cartContainer">
            <img src="${this.productImage}" alt="">
                <div class="dataContainer">
                    <p>${this.productName}</p>
                    <p>${this.price}</p>
                    <p>product amount: <em>${this.count}</em></p>
                    <hr>
                    <p>Total: ${this.price * this.count}</p>
                    <button class="deleteProduct" id="asdf">Бараа хасах</button>
                </div>
            </article>

            <style scoped>
            .cartContainer {
                display: flex;
                border: 1px solid black;
                padding: 8px;
                margin: 32px 0px;
                & img {
                    width: 200px;
                }

                & .dataContainer {
                    margin-left: 32px;
                    & p {
                        margin: 16px 0px;
                    }
                    .deleteProduct {
                        padding: 8px;
                        border-radius: 8px;
                        background-color: #DB504A;
                        color: #141434;
                        font-size: 14px;
                        font-weight: bolder;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
            </style>
        `
    }
}

window.customElements.define("added-product" , AddedProduct);