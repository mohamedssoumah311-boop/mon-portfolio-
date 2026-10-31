
// Récupérer les éléments du menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Ouvrir et fermer le menu mobile
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    lucide.createIcons();

});

// Fermer le menu après un clic sur un lien
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});

// Afficher automatiquement l'année actuelle
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Afficher les icônes
lucide.createIcons();
