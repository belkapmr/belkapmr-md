
document.getElementById("product-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const image = document.getElementById("image").value;

  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <img src="${image}" alt="QR" />
  `;

  document.getElementById("product-list").appendChild(productDiv);

  document.getElementById("product-form").reset();
});
