// document.addEventListener("DOMContentLoaded", function () {
//   const offcanvasNavbar = document.getElementById("offcanvasNavbar");
//   const navLinks = offcanvasNavbar.querySelectorAll(".nav-link");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function () {
//       const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
//       bsOffcanvas.hide();
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("log");

  loginButton.addEventListener("click", function () {
    alert("Login Success");
  });
});

function addToCart() {
  alert("Item is added to cart");
}

document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("numberInput");
  const btnMinus = document.getElementById("btn-minus");
  const btnPlus = document.getElementById("btn-plus");

  btnMinus.addEventListener("click", function () {
    numberInput.value = Math.max(
      parseInt(numberInput.value) - 1,
      numberInput.min
    );
  });

  btnPlus.addEventListener("click", function () {
    numberInput.value = Math.min(
      parseInt(numberInput.value) + 1,
      numberInput.max
    );
  });
});
