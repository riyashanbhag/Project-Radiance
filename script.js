function searchProducts(term) {
  const lowerTerm = term.toLowerCase();

  // Loop through all product cards on the page
  document.querySelectorAll('.product-card').forEach(card => {
    const productName = card.textContent.toLowerCase();
    if (productName.includes(lowerTerm)) {
      card.style.display = 'block'; // Show matching product
    } else {
      card.style.display = 'none';  // Hide non-matching product
    }
  });
}
