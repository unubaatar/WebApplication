class CartInfo extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "open" });
        this.productList =[];
        this.#Render();
    }

    connectedCallback() {    
        this.myRoot.querySelector("i").addEventListener("click" , () => {
            this.style.display = "none";
            // this.myRoot.getElementById("templateSectionId").style.display ="none";
        }) 
    }

    addToCart = function(product) {
        this.productList.push(product);
        this.myRoot.querySelector("#totalItems").innerText = `Total Items: ${this.productList.length}`
        let name = product.getAttribute("name")
        let price = product.getAttribute("price")
        let img = product.getAttribute("img")
        const addedProduct = `<added-product name="${name}" price="${price}" count="2" img="${img}"></added-product>`
        this.myRoot.querySelector("#productContainer").insertAdjacentHTML("beforeend" , addedProduct);
    }

    #Render() {
        this.myRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <section id="templateSectionId" class="templateSection">
            <section class="mainCart">
                <article class="headerContainer"><h2>Cart</h2><i style="color: black;" id="closer" class="fa-solid fa-xmark fa-xl"></i></article>
                <p id="totalItems"> Total Items: ${this.productList.length}</p>
                <section id="productContainer">

                </section>
            </section>
        </section>

        <style scoped>
            * {
                margin: 0;
                padding: 0;
            }


            .templateSection {
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: end;
                color: black;
                & .headerContainer {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    padding-top: 64px;
                    & i {
                        cursor: pointer;
                        padding: 24px 16px;
                        border-radius: 16px;
                    }
                    & i:hover {
                        background-color: antiquewhite;
                    }
                }
            }

            .mainCart {
                height: 100vh;
                overflow-y: scroll;
                position: fixed;
                padding: 16px;
                background-color: aqua;
                z-index: 4;
                width: 400px;
                & h2 {
                    text-align: center;
                }
            }

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
    `;
    }

    // closeCartSection = function() {
    //     console.log(document.getElementsByClassName("templateSection"))
    // }
}   

window.customElements.define("cart-info", CartInfo);
