class testObject{
    constructor(item) {
        this.name = item.name;
        this.img = item.img;
    }       
}

class FavoriteIcon extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({mode: "open"});
        this.itemList = [];
        this.#Render();
    }

    connectedCallback() {    
        this.myRoot.querySelector("i").addEventListener("click" , () => {
            this.style.display = "none";
        }) 
        document.addEventListener("favorite" , (event) => {
            let item = new testObject(event.detail);
            let hasThisItem = false;
            for(let product of this.itemList) {
                if(product?.name === item.name) {
                    hasThisItem = true;
                    break;
                }
            }
            if(!hasThisItem) {
                this.itemList.push(item);
            }
            this.#Render();
        })
    }

    renderCartProduct = function() {
        for(let product of this.itemList) {
            const addedProduct = `
            <favorite-item name="${product.name}" img="${product.img}"></favorite-item>
            `
            this.myRoot.querySelector("#productContainer").insertAdjacentHTML("beforeend" , addedProduct);
        }
    }

    deleteItem = function(name) {
        for(let i = 0; i < this.itemList.length ; i++) {
            if(this.itemList[i].name === name) {
                this.itemList.splice(i , 1);
            }
        }
        this.#Render();
    }

    #Render() {
        this.myRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <section id="templateSectionId" class="templateSection">
            <section class="mainCart">
                <article class="headerContainer">
                    <h2>Favorite</h2>
                    <i style="color: black;" id="closer" class="fa-solid fa-xmark fa-sm"></i>
                </article>
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
                        padding: 17px 13px;
                        border-radius: 50%;
                    }
                    & i:hover {
                        background-color: orange;
                    }
                    & h2 {
                        font-size: 20px;
                    }
                }
            }

            .mainCart {
                height: 100vh;
                overflow-y: scroll;
                position: fixed;
                padding: 16px;
                background-color: white;
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
    this.myRoot.querySelector("i").addEventListener("click" , () => {
        this.style.display = "none";
    }) 
    this.renderCartProduct();
    }
}

window.customElements.define("favorite-list", FavoriteIcon);
