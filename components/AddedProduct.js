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
                </div>
            </article>

            <style scoped>
            .cartContainer {
                display: flex;
                margin: 32px 0px;
                & img {
                    width: 200px;
                }

                & .dataContainer {
                    margin-left: 32px;
                    & p {
                        margin: 16px 0px;
                    }
                }
            }
            </style>
        `
    }
}

window.customElements.define("added-product" , AddedProduct);