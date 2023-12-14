class FavoriteItem extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "open" });
        this.image = this.getAttribute("img");
        this.name = this.getAttribute("name");
    }

    connectedCallback() {
        this.#Render();
        let deleteButton = this.myRoot.querySelectorAll("button");
        deleteButton[0].addEventListener("click" , ()=> {
            const event = new CustomEvent("removeFavorite" , {
                bubbles: true,
                composed: true,
                detail: {
                    name : this.name,
                }
            })
            document.dispatchEvent(event);
        })
    }

    

    #Render() {
        this.myRoot.innerHTML = `
        <section class="container">
        <p>${this.name}</p>
        <img src="${this.image}" alt="" style="height: 80px;">
        <button><i class="fa-solid fa-trash"></i></button>
        </section>
        <style scoped>
            .container {
                border: 2px solid black;
                border-radius: 8px;
                display: flex; 
                justify-content: space-around; 
                align-items: center; 
                padding: 16px; 
                margin: 8px 0px;
                & button {
                    height: 50px;
                    width: 50px;
                    font-size: 18px;
                    border: none;
                    color: white;
                    border-radius: 8px;
                    cursor: pointer;
                    color: #042834;
                    background-color: red;
                    font-weight: 550;
                }
                & p {
                    font-size: 18px;
                }
            }
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        `
    }
}

window.customElements.define("favorite-item", FavoriteItem);