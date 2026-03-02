const params = new URLSearchParams(window.location.search);
console.log("params:", params);
const id = params.get("id");
// console.log("id:", id);
const productContainer = document.querySelector("#productContainer");
// console.log("productContainer:", productContainer);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
      <figure>
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Produktbillede" class="productImage" />
              <span class="saleLabel">Udsalg!</span>
       </figure>
            <section class="productDetails">
              <h2 class="productName">${data.variantname}</h2>
              <div>
                <p class="articleType"><span class="bold">Type:</span> ${data.articletype}</p>
                <p class="productCategory"><span class="bold">Kategori:</span> ${data.category}</p>
                <p class="productPrice"><span class="bold">Pris:</span> ${data.price},-</p>
              </div>
              <button class="buyButton">Køb nu</button>
            </section>
            `;
  });
