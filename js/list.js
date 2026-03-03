"use strict";

const productContainer = document.querySelector("main");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=56&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  //   console.log("productsArr:", productsArr);

  productsArr.forEach((product) => {
    console.log("product:", product.category);
    const hasDiscount = product.discount > 0;

    productContainer.innerHTML += `<article class="${product.soldout ? "soldOut" : ""}">
      ${hasDiscount ? `<span class="discount_badge">-${product.discount}%</span>` : ""}
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
    <p class="soldoutTxt color_me_gray">SOLD OUT</p>
    <h2>${product.productdisplayname}</h2>
    <p>${product.articletype} - ${product.brandname}</p>
    <p>DKK ${product.price},-</p>
     <div class="discounted_element">
        ${
          hasDiscount
            ? `
          <span class="discount_badge">-${product.discount}%</span>
          <p class="discounted_price">Now DKK ${Math.round(product.price * (1 - product.discount / 100))},-</p>
        `
            : ""
        }
        </div>
        <a href="produkt.html?id=${product.id}">Read more</a>
    </article>
    `;
  });
}
