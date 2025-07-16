function showEcoModal(ecoProduct) {
  const modal = document.getElementById("ecoModal");
  const text = document.getElementById("ecoSuggestion");
  text.innerHTML = `Try using a <strong>${ecoProduct}</strong> instead. 🌿 It's better for the planet, reusable, and sustainable!`;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("ecoModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("ecoModal");
  if (event.target === modal) {
    closeModal();
  }
};
