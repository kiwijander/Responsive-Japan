/* Menu button */
var nav = document.querySelector(".nav");
var button = document.querySelector(".nav__more");
var icon = button.querySelector("i");
var items = document.querySelectorAll(".nav__item");
var links = document.querySelectorAll(".nav__sub a");


/* Close the side menu and all dropdowns */
function closeMenu() {
  nav.classList.remove("open");
  button.setAttribute("aria-expanded", false);
  icon.classList.add("fa-bars");
  icon.classList.remove("fa-xmark");

  items.forEach(function (item) {
    item.classList.remove("open");
    item.querySelector(".nav__toggle").setAttribute("aria-expanded", false);
  });
}


/* Side menu */
button.addEventListener("click", function () {
  var isOpen = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", isOpen);

  icon.classList.toggle("fa-bars", !isOpen);
  icon.classList.toggle("fa-xmark", isOpen);

  if (!isOpen) {
    closeMenu();
  }
});


/* Dropdowns Works/Services/Contact */
items.forEach(function (item) {
  var toggle = item.querySelector(".nav__toggle");

  toggle.addEventListener("click", function () {
    var wasOpen = item.classList.contains("open");

    items.forEach(function (other) {
      other.classList.remove("open");
      other.querySelector(".nav__toggle").setAttribute("aria-expanded", false);
    });

    if (!wasOpen) {
      item.classList.add("open");
      toggle.setAttribute("aria-expanded", true);
    }
  });
});


links.forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});


/* Clicking on the dark overlay closes the menu */
nav.addEventListener("click", function (event) {
  if (event.target === nav) {
    closeMenu();
  }
});


document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});