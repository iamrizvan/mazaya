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
      behavior: "smooth"
    });
  });
}
