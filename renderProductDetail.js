// const apiProductUrl = "https://api.jsonbin.io/v3/b/65791b331f5677401f0d116d";
const apiProductUrl = "https://api.jsonbin.io/v3/b/657b00cb1f5677401f0dbb4f"

document.addEventListener("DOMContentLoaded" , function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("name");
    fetch(apiProductUrl).then(response => response.json()).then(data => {
      let productList = data.record;
      const productInstance = getProductInfoByName(productList , productName);
      const productViewSection = document.getElementById("itemDetailSection");
      productViewSection.innerHTML = `
        <section class="itemDetail">
        <center>
        <img id="itemImage" src="${productInstance.img}" alt="Item">
        </center>
        <article  class="detailInfo">
        <h3>${productInstance.name}</h3>
          <ul>
            <li>Material: <strong>${productInstance.material}</strong> </li>
            <li>Color: <strong>${productInstance.color}</strong> </li>
            <li>Size: <strong>4*3cm</strong> </li>
            <li><em>${productInstance.price}&#8366;</em></li>
          </ul>
              <section class="quantity" for="quantity">
                <button onclick="decreaseItemCount()">-</button>
                <input id="productCountInput" type="text" value = "1" style="text-align: center;">
                <button  onclick="increaseItemCount()">+</button>
              </section>
              <button class="purchaseBtn"><i class="fa-solid fa-cart-shopping"></i>Худалдан авах</button>
        </article>
      </section> 
      `
    })  
})

getProductInfoByName = function( list ,productName) {
    return list.find(function(product) {
        if(product.name === productName) {
            return product;
        }
    })
}

increaseItemCount = function() {
    let count = document.getElementById("productCountInput").value;
    if(count < 10) {
        count++;
    }
    document.getElementById("productCountInput").value = count;
}

decreaseItemCount = function() {
    let count = document.getElementById("productCountInput").value;
    if(count > 0) {
        count--;
    }
    document.getElementById("productCountInput").value = count;
}
