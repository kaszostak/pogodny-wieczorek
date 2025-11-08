document.addEventListener("DOMContentLoaded", function () {

  // 🔹 Funkcja do wczytywania części strony
  function loadPartial(url, placeholderId, callback) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(placeholderId).innerHTML = data;
        if (callback) callback();
      })
      .catch(error => console.error(`Błąd wczytywania ${url}:`, error));
  }

  // 🔹 Wczytaj nawigację
  loadPartial("partials/navigation.html", "navigation-placeholder");

  // 🔹 Wczytaj menu i podświetl aktywną stronę
  loadPartial("partials/menu.html", "menu-placeholder", () => {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("#menu-placeholder .nav-link").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // 🔹 Wczytaj modal
  loadPartial("partials/gameModal.html", "game-modal-placeholder");

  // 🔹 Wczytaj stopkę i ustaw aktualny rok
  loadPartial("partials/footer.html", "footer-placeholder", () => {
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

});
