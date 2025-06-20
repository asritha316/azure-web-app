/* script.js */
// ========== SLIDESHOW ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change image every 3 seconds

// ========== SIGN-IN MODAL ==========
const signInBtn = document.getElementById("signInBtn");
const modal = document.getElementById("signInModal");
const closeModal = document.querySelector(".close");
const popup = document.getElementById("popup");

signInBtn.onclick = () => {
  modal.style.display = "block";
};

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    modal.style.display = "none";
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  } else {
    alert("Please enter Gmail and password");
  }
}

// ========== CART FUNCTIONALITY ==========
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartDisplay() {
  const cartItemsList = document.getElementById("cartItems");
  const totalCostDisplay = document.getElementById("totalCost");
  let total = 0;

  if (cartItemsList) {
    cartItemsList.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ₹${item.cost}`;
      total += item.cost;
      cartItemsList.appendChild(li);
    });
  }

  if (totalCostDisplay) {
    totalCostDisplay.textContent = `Total: ₹${total}`;
  }

  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function addToCartWithCost(name, cost) {
  cart.push({ name, cost });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

window.onload = updateCartDisplay;

