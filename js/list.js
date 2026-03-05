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
  productsArr.forEach((product) => {
    productContainer.innerHTML += `<article class="${product.soldout ? "soldOut" : ""} ${product.discount ? "discounted" : ""}">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
      <span class="soldOutTxt">Udsolgt</span>
      <h2>${product.productdisplayname}</h2>
      <p>${product.articletype} - ${product.brandname}</p>
      <p>DKK ${product.price},-</p>
      <div class="discount_element">
      <p> Now DKK <span> ${Math.ceil((product.price / 100) * product.discount)}</span>,-</p>
      <p class="discounted"> <span>${product.discount}</span>%</p>
      </div>
      <a href="produkt.html?id=${product.id}">Read more</a>
    </article>`;
  });
}

//   console.log("productsArr:", productsArr);

// productsArr.forEach((product) => {
//   if (product.soldout) {
//     console.log("product status: udsolgt");
//   } else {
//     console.log("product status: på lager");
//   }

//   product.soldout ? console.log("product status: udsolgt") : console.log("product status: på lager");

// ${
//           hasDiscount
//             ? `
//           <span class="discount_badge">-${product.discount}%</span>
//           <p class="discounted_price">Now DKK ${Math.round(product.price * (1 - product.discount / 100))},-</p>
//         `
//             : ""
//         }
