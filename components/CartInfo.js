class CartInfo extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({ mode: "open" });
        this.#Render();
    }

    connectedCallback() {    
        this.myRoot.querySelector("i").addEventListener("click" , () => {
            this.style.display = "none";
            // this.myRoot.getElementById("templateSectionId").style.display ="none";
        }) 
    }

    #Render() {
        this.myRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

        <section id="templateSectionId" class="templateSection">
            <section class="mainCart">
                <article class="headerContainer"><h2>Sags</h2><i style="color: black;" id="closer" class="fa-solid fa-xmark fa-xl"></i></article>
                <section>
                    <article class="cartContainer">
                        <img src="https://i.ibb.co/9hLBbbc/ichigo-figure.webp" alt="">
                        <div class="dataContainer">
                            <p>product name</p>
                            <p>product price</p>
                            <p>product amount: <em>12</em></p>
                            <hr>
                            <p>total</p>
                        </div>
                    </article>
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
