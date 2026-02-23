document.addEventListener("DOMContentLoaded", async () => {
  const sidebarContainer = document.querySelector(".sidebar");

  if (sidebarContainer) {
    const res = await fetch("/partials/sidebar.html");
    const html = await res.text();
    sidebarContainer.innerHTML = html;

    highlightActiveLink();
  }
});

function highlightActiveLink() {
  const links = document.querySelectorAll(".nav a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
}
