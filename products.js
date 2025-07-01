
const products = [
  {
    title: "Детский билет — 40 руб",
    description: "Посещение зоопарка для детей до 12 лет",
    image: "images/qr_pmr_example.png"
  },
  {
    title: "Кролик декоративный — 450 руб",
    description: "Девочка, 2 месяца, ручная",
    image: "images/qr_moldova_example.png"
  },
  {
    title: "Корм для кроликов — 25 руб",
    description: "Питательный микс на 3 дня",
    image: "images/qr_pmr_example.png"
  },
  {
    title: "Клетка для грызунов — 300 руб",
    description: "Подходит для хомяков, морских свинок",
    image: "images/qr_moldova_example.png"
  },
  {
    title: "Магнитик 'Белка ПМР' — 20 руб",
    description: "На память о зоопарке!",
    image: "images/qr_pmr_example.png"
  }
];

const container = document.getElementById("products-container");
products.forEach(p => {
  container.innerHTML += `
    <div class="product">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <img src="${p.image}" alt="QR" />
    </div>
  `;
});
