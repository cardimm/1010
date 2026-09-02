/* ÍGNEA MOVEMENT — main.js
   Comportamento do header: toggle do menu mobile + dropdowns por clique no touch. */
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Em telas de toque, abrir/fechar dropdowns com clique (além do hover no desktop)
  document.querySelectorAll(".has-dropdown > .nav__link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 720px)").matches) {
        e.preventDefault();
        link.parentElement.classList.toggle("is-open");
      }
    });
  });
});