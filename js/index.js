const categoryContainer = document.querySelector(".category_list");
console.log(categoryContainer);

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      categoryContainer.innerHTML += `<a href="produktliste.html">${category.category}</a>`;
    });
  });
