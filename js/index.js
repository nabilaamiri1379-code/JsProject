let products = [
  { id: 1, name: "Glossy Lipstick ", price: 13, category: "lipstick", image: "imges/Glossy lipstick.jpg" },
  { id: 2, name: "Glossy Lipstick ", price: 12, category: "lipstick", image: "imges/Glossy lipstick1.jpg" },
  { id: 3, name: "Glossy Lipstick", price: 15, category: "lipstick", image: "imges/Glossy lipstick2.jpg" },
  { id: 4, name: "Glossy Lipstick", price: 10, category: "lipstick", image: "imges/Glossy lipstick3.jpg" },
  { id: 5, name: "Prefume", price: 30, category: "lipstick", image: "imges/photo_2026-04-18_17-50-31.jpg" },
  { id: 6, name: "Prefume", price: 25, category: "lipstick", image: "imges/photo_2026-04-18_17-50-36.jpg" },
  { id: 7, name: "Prefume ", price: 25, category: "lipstick", image: "imges/photo_2026-04-18_17-50-49.jpg" },
  { id: 8, name: "Prefume ", price: 30, category: "lipstick", image: "imges/photo_2026-04-18_17-51-29.jpg" },
  { id: 9, name: "Berash ", price: 3, category: "lipstick", image: "imges/photo_2026-04-18_17-39-57.jpg" },
  { id: 10, name: "Berash  ", price: 5, category: "lipstick", image: "imges/photo_2026-04-18_17-40-09.jpg" },
  { id: 11, name: "Berash ", price: 4, category: "lipstick", image: "imges/photo_2026-04-18_17-49-46.jpg" },
  { id: 12, name: "Berash ", price: 3, category: "lipstick", image: "imges/photo_2026-04-18_17-39-46.jpg" },
  { id: 13, name: "Makupe", price: 35, category: "lipstick", image: "imges/photo_2026-04-18_18-23-21.jpg" },
  { id: 14, name: "Makupe", price: 25, category: "lipstick", image: "imges/photo_2026-04-18_18-23-35.jpg" },
  { id: 15, name: "Makupe ", price: 25, category: "lipstick", image: "imges/photo_2026-04-18_18-23-40.jpg" },
  { id: 16, name: "Makupe", price: 35, category: "lipstick", image: "imges/photo_2026-04-18_18-23-25.jpg" },
 { id: 17, name: "Powder", price: 20, category: "lipstick", image: "imges/photo_2026-04-18_18-27-03.jpg" },
  { id: 18, name: "Powder", price: 25, category: "lipstick", image: "imges/photo_2026-04-18_18-27-14.jpg" },
  { id: 19, name: "Powder ", price: 15, category: "lipstick", image: "imges/photo_2026-04-18_18-27-19.jpg" },
  { id: 20, name: "Powder", price: 35, category: "lipstick", image: "imges/photo_2026-04-18_18-27-09.jpg" },
];


let container = document.getElementById("products");

    function displayProducts(list) {
      container.innerHTML = "";
      list.forEach(p => {
        container.innerHTML += `
    <div class="col-md-3">
      <div class="card p-3 mb-4 text-center">
        <img src="${p.image}" class="img-fluid">
        <h5 class="mt-2">${p.name}</h5>
        <p>$${p.price}</p>
        <button class="btn btn-brown" onclick="addToCart('${p.name}')">
          <i class="fa fa-cart-plus"></i> Add
        </button>
      </div>
    </div>
    `;
      });
    }

    displayProducts(products);

    // Search
    document.getElementById("search").addEventListener("keyup", e => {
      let value = e.target.value.toLowerCase();
      let filtered = products.filter(p => p.name.toLowerCase().includes(value));
      displayProducts(filtered);
    });

    // Filter
    document.getElementById("filter").addEventListener("change", e => {
      let value = e.target.value;
      if (value === "all") displayProducts(products);
      else displayProducts(products.filter(p => p.category === value));
    });

    // Dark mode
    function toggleDark() {
      document.body.classList.toggle("dark-mode");
    }

    // Cart
    function addToCart(name) {
      alert(name + " Added to cart");
    }

  