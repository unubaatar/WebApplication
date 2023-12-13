class HeaderSection extends HTMLElement {
  constructor() {
    super();
    this.#render();
  }

  connectedCallback() {}

  #render() {
    this.innerHTML = `
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
    `;
  }
}

window.customElements.define("header-section", HeaderSection);
