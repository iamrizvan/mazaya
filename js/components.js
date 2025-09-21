async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    const text = await res.text();
    document.getElementById(id).innerHTML = text;

    // Initialize Back-to-Top button if it's footer
    if (id === "footer") initBackToTop();
  } catch (e) {
    console.error(e);
  }
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");

function initBackToTop() {
  const btn = document.getElementById("backToTop");

  if (!btn) return;

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // Smooth scroll to top
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.innerHTML = `
      <nav class="navbar">
        <!-- Logo left -->
        <a href="index.html" class="logo">
          <img src="images/vm_logo.png" alt="Future Market Vending Solution Logo">
        </a>

        <!-- Nav links (desktop visible) -->
        <div class="nav-links">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="products.html">Products</a>
          <a href="services.html">Services</a>
          <a href="partner.html">Partner</a>
          <a href="blog.html">Blogs</a>
          <a href="contact.html">Contact</a>
          <a href="contact.html" class="btn-request">Request Machine</a>
        </div>

        <!-- Menu toggle button (right side) -->
        <button class="menu-toggle" aria-label="Toggle Menu">
          <i class="fas fa-bars"></i>
        </button>
      </nav>
    `;
  }

  // Navbar toggle functionality
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      toggleBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }
});

// FAQ Toggle
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((q) => {
    q.addEventListener("click", () => {
      q.classList.toggle("active");
      const answer = q.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
