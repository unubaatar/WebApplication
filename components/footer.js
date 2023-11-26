class FooterSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.#render();
    }

    #render() {
        this.innerHTML =`
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
        `
    }
}

window.customElements.define('footer-section', FooterSection);