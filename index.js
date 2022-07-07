const root = document.getElementById("root");
const menu = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "contact", link: "/contact" },
  { title: "Login", link: "/login" },
  { title: "Cart", link: "/cart" },
];

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Description 1",
    featured: true,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Description 1",
    featured: true,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Description 1",
    featured: true,
    image: "https://via.placeholder.com/150",
  },
];

function nav(menu) {
  let navBar = document.createElement("nav");
  for (let item in menu) {
    const a = document.createElement("a");
    a.innerHTML = menu[item].title;
    navBar.appendChild(a);
    a.href = menu[item].link;
  }
  return navBar;
}

function hero() {
  let hero = document.createElement("div");
  hero.className = "hero";
  let h1 = document.createElement("h1");
  h1.innerHTML = "Welcome to the store";
  hero.appendChild(h1);
  return hero;
}

function featuredProducts(products) {
  let featured = document.createElement("div");
  featured.className = "featured";
  let h2 = document.createElement("h2");
  h2.innerHTML = "Featured Products";
  featured.appendChild(h2);
  const productsContainer = document.createElement("div");
  productsContainer.className = "grid";
  products.forEach(function (product) {
    const productContainer = document.createElement("div");
    productContainer.className = "product";
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productContainer.appendChild(productImage);
    const productName = document.createElement("h3");
    productName.innerHTML = product.name;
    productContainer.appendChild(productName);
    const productPrice = document.createElement("p");
    productPrice.innerHTML = product.price;
    productContainer.appendChild(productPrice);
    const productDescription = document.createElement("p");
    productDescription.innerHTML = product.description;
    productContainer.appendChild(productDescription);
    const btn = document.createElement("button");
    btn.innerHTML = "Add to cart";
    productContainer.appendChild(btn);
    btn.addEventListener("click", function () {
      addToCart(product);
    });
    productsContainer.appendChild(productContainer);
  });
  featured.appendChild(productsContainer);
  return featured;
}
function addToCart(product) {
  localStorage.setItem(product.id, JSON.stringify(product));
  alert(`${product.name} added to cart`);
}
function footer() {
  let footer = document.createElement("footer");
  footer.className = "footer";
  let p = document.createElement("p");
  p.innerHTML = "Shopping &copy; 2022";
  footer.appendChild(p);
  return footer;
}

root.appendChild(nav(menu));
root.appendChild(hero());
root.appendChild(featuredProducts(products));
root.appendChild(footer());