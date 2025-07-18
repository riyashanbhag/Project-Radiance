document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const searchInput = document.getElementById("search-input").value.trim();
  if (searchInput) {
    window.location.href = `search.html?query=${encodeURIComponent(searchInput)}`;
  }
});
