let products = [
    {
        id: 1,
        name: "Mars rug",
        price: 100,
        image: "./img/image 10 (1).png",
        quantity: 24,
    },
    {
        id: 2,
        name: "Keyboard sticker",
        price: 100,
        image: "./img/keyboard.png",
        quantity: 24,
    },
    {
        id: 3,
        name: "Smart watch",
        price: 100,
        image: "./img/smart watch.png",
        quantity: 24,
    },
    {
        id: 4,
        name: "Wireless keyboard",
        price: 100,
        image: "./img/keyboard rgb.png",
        quantity: 24,
    },
    {
        id: 5,
        name: "Mouse",
        price: 100,
        image: "./img/mouse.png",
        quantity: 24,
    },
    {
        id: 6,
        name: "AirPods",
        price: 100,
        image: "./img/air pods.png",
        quantity: 24,
    },
    {
        id: 7,
        name: "Powerbank",
        price: 100,
        image: "./img/power bank.png",
        quantity: 24,
    },
    {
        id: 8,
        name: "USB flash drive",
        price: 100,
        image: "./img/fleshka.png",
        quantity: 24,
    },
    {
        id: 9,
        name: "Smartphone",
        price: 100,
        image: "./img/smartphone.png",
        quantity: 24,
    },
    {
        id: 10,
        name: "Playstation 5",
        price: 100,
        image: "./img/playstation 5.png",
        quantity: 24,
    },
    {
        id: 11,
        name: "Yandex Station",
        price: 100,
        image: "./img/yandex station.png",
        quantity: 24,
    },
    {
        id: 12,
        name: "Planshet Samsung",
        price: 100,
        image: "./img/planshet.png",
        quantity: 24,
    },
    
];

let productsGrid = document.querySelector(".products-grid");

function renderProducts(productsArray) {
    productsGrid.innerHTML = "";
    
    productsArray.forEach(product => {
        productsGrid.innerHTML +=
 `       <div class="product-card">
        <img
          src="${product.image}"
          alt="${product.name}"
          class="product-image"
        />
        <h3>${product.name}</h3>
        <div class="price">
          <img src="./img/Coin 1.png" alt="Coin" class="coin-icon" />
          <span>${product.price} Coins</span>
        </div>
        <p class="availability">${product.quantity} dona mavjud</p>
      </div>`
    });
}
renderProducts(products);

let searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", () => {
    let searchValue = searchInput.value.toLowerCase();
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));
    renderProducts(filteredProducts);
});