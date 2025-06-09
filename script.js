// script.js
console.log("Site-ul lui David a pornit! 🚀");

// Apare secvențial timeline-ul
window.addEventListener("scroll", () => {
  const items = document.querySelectorAll(".timeline-item");
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("visible");
    }
  });
});

// Filtrare portofoliu
const filterButtons = document.querySelectorAll(".filter-buttons button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-buttons .active").classList.remove("active");
    button.classList.add("active");

    const category = button.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      item.style.display = (category === "all" || item.dataset.category === category)
        ? "block" : "none";
    });
  });
});

// Coșul de cumpărături
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
let total = 0;

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    const li = document.createElement("li");
    li.textContent = `${name} - ${price} RON`;
    cartList.appendChild(li);

    total += price;
    cartTotal.textContent = total.toFixed(2);
  });
});

let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

document.getElementById("prevTestimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.getElementById("nextTestimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const msg = document.getElementById("contact-message");

  // poți înlocui cu EmailJS aici
  msg.textContent = "Mesajul a fost trimis cu succes!";
  this.reset();

  setTimeout(() => msg.textContent = "", 4000);
});

// În fișierul script.js sau la finalul HTML, după toate elementele

document.addEventListener('DOMContentLoaded', () => {
  const footerCopy = document.querySelector('.footer-copy');
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        footerCopy.style.opacity = '1';
      }
    },
    { threshold: 0.5 }
  );
  observer.observe(footerCopy);
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const text = "Salut! Bine ai venit pe site-ul meu!";
const typingElement = document.getElementById('typing-text');

let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

// Curățăm textul inițial pentru animație
typingElement.textContent = '';
typeWriter();
