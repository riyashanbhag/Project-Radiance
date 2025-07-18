function getSearchQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("query") || "";
}

function searchProducts(term) {
  const lowerTerm = term.toLowerCase();

  document.querySelectorAll('.product-card').forEach(card => {
    const productName = card.textContent.toLowerCase();
    card.style.display = productName.includes(lowerTerm) ? 'block' : 'none';
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const query = getSearchQuery();

  if (searchInput) {
    searchInput.value = query;
    searchProducts(query);
  }

  document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const newQuery = searchInput.value.trim();
    if (newQuery) {
      window.location.href = `search.html?query=${encodeURIComponent(newQuery)}`;
    }
  });
});
