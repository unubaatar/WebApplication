class DarkLightMode extends HTMLElement {
    constructor() {
        super();
        this.myRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.mode = this.getAttribute("mode");
        this.#render();
    }
    #render(){
        this.myRoot.innerHTML = `

        <header>
        <div class="rightMenu">
          <i class="fa-solid fa-bars sidebarActivator" id="activator" onclick="appearSideBarView()"></i>
          <a href="index.html"><img src="https://i.ibb.co/hD8WWBT/logo-no-bck.png" alt="logo" style="width: 100px; height: 68px;"></a>
          <input type="text" aria-label="Search" placeholder="Search..."/>
          <i class="fa-solid fa-magnifying-glass" style="color: #6d6b6b"></i>
        </div>
        <div class="leftMenu">
          <nav class="menu">
            <ul>
              <li><a href="filter.html"><i class="fa-solid fa-bars"></i>Anime list</a></li>
              <li><a href="shopping.html"><i class="fa-solid fa-cart-shopping"></i>Shopping</a></li>
              <li><a href="service.html"><i class="fa-regular fa-credit-card"></i>Service</a></li>
            </ul>
          </nav>
          <nav class="btns">          
            <a href="login.html"><i class="fa-solid fa-user"></i>Login</a>
            <a href="signup.html"><i class="fa-solid fa-user-plus"></i>Sign Up</a>
          </nav>
        </div>
      </header>
      <nav class="sidebar" id="sidebarId">
        <ul>
          <i class="fa-solid fa-xmark sidebarActivator" id="remover" onclick="hideSideBarView()"></i>
          <li><a href="filter.html"><i class="fa-solid fa-bars"></i>Anime list</a></li>
          <li><a href="shopping.html"><i class="fa-solid fa-cart-shopping"></i>Shopping</a></li>
          <li><a href="service.html"><i class="fa-regular fa-credit-card"></i>Service</a></li>
          <li><a href="login.html"><i class="fa-solid fa-user"></i>Login</a></li>
          <li style="border-bottom: 2px solid #00171f;"><a href="signup.html"><i class="fa-solid fa-user-plus"></i>Sign Up</a></li>
        </ul>
      </nav>

      <header-section></header-section>

        <footer>
        <section class="footer1">
          <a href="index.html"><img src="https://i.ibb.co/hD8WWBT/logo-no-bck.png" alt="logo"></a>
        </section>
        <section class="footer2">
          <h4>Дэлхийн шилдэг анимуудыг танд хүргэнэ</h4>
          <br /><br />
          <p>Copyright &copy; 2023 - All right reserved by Animuk</p>
        </section>
        <section class="footer3">
          <h3>Бидэнтэй холбогдох</h3>
          <br />
          <nav class="footerNav">
            <ul>
              <li>Холбогдох дугаар: 88443062</li>
              <li>
                <i class="fa-brands fa-instagram" style="color: #ffffff"></i>
                <a href="#">animuk</a>
              </li>
              <li>
                <i class="fa-brands fa-facebook" style="color: #ffffff"></i>
                <a href="#">animuk</a>
              </li>
            </ul>
          </nav>
        </section>
      </footer>
      <header-section></header-section>
        `
    }
    #updateTheme(){
        const headerElement = this.myRoot.querySelector("header-section");
        const footerElement = this.myRoot.querySelector("footer-section");

        headerElement.style.backgroundColor = this.mode === 'dark' ? 'var(--background-color-dark)' : 'white';
        footerElement.style.backgroundColor = this.mode === 'dark' ? 'var(--background-color-dark)' : 'white';
    }

    static get observedAttributes() {
        return ['mode'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch(name) {
            case "mode": 
                console.log(`${name} has changed. old=${oldVal}, new=${newVal}`);
                this.#updateTheme();
            break;
        default:
            break;
        }
    }
}

window.customElements.define('dark-light-mode', DarkLightMode);