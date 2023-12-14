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
        <section style="display: flex; justify-content: space-around; align-items: center; padding: 16px; background-color: antiquewhite;">
        <p>${this.name}</p>
        <img src="${this.image}" alt="" style="height: 50px;">
        <button style="height: 50px;">delete</button>
        </section>
        `
    }
}

window.customElements.define("favorite-item", FavoriteItem);