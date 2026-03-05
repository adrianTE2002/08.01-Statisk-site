const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((product) => {
    showProduct(product);
  });

function showProduct(product) {
  const productContainer = document.querySelector(".productContainer");

  productContainer.innerHTML = `
    <article class="product_image">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
    </article>
    <article class="productinformation">
      <h2>Product information</h2>
      <h3>Model name:</h3>
      <p>${product.productdisplayname}</p>
      <h3>Product type:</h3>
      <p>${product.articletype}</p>
      <h3>Brand:</h3>
      <h1>${product.brandname}</h1>
    </article>
    <article class="size_and_purchase">
      <h2>${product.productdisplayname}</h2>
      <p>${product.brandname} / ${product.articletype}</p>
      <p>${product.price},- kr</p>
      ${product.discount ? `<p>Now DKK ${Math.round(product.price * (1 - product.discount / 100))} ,-</p>` : ""}
      ${product.soldout ? "<p>SOLD OUT</p>" : ""}
      <div class="size-row">
        <label for="size">Choose a size</label>
        <select id="size">
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </div>
      <button class="basket-btn">Add to basket</button>
    </article>`;
}
