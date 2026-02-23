const pages = [
  { title: "Overview", url: "/system/index.html" },
  { title: "Architecture", url: "/system/architecture.html" },
  { title: "Governance", url: "/system/governance.html" },
  { title: "API", url: "/system/api.html" }
];

function initSearch() {
  const input = document.getElementById("doc-search");
  const resultBox = document.getElementById("search-results");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    resultBox.innerHTML = "";

    pages.forEach(page => {
      if (page.title.toLowerCase().includes(query)) {
        const item = document.createElement("div");
        item.innerHTML = `<a href="${page.url}">${page.title}</a>`;
        resultBox.appendChild(item);
      }
    });
  });
}
