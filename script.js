document.addEventListener("DOMContentLoaded", function () {
  const offcanvasNavbar = document.getElementById("offcanvasNavbar");
  const navLinks = offcanvasNavbar.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
      bsOffcanvas.hide();
    });
  });
});
