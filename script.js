const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
const errorIcons = document.querySelectorAll(".error-icon");
const errorText = document.querySelectorAll(".error-text");
const emailInput = document.querySelector(".email");
const wrongEmail = document.querySelector(".wrong-email");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

inputs.forEach(function (node, i) {
  node.addEventListener("blur", function () {
    if (!this.value) {
      errorIcons[i].style.display = "block";
      errorText[i].style.display = "block";
      this.classList.add("invalid");
    } else {
      errorIcons[i].style.display = "none";
      errorText[i].style.display = "none";
      this.classList.remove("invalid");
    }
  });
});

form.addEventListener("submit", function (e) {
  inputs.forEach(function (node, i) {
    if (!node.value) {
      e.preventDefault();
      errorIcons[i].style.display = "block";
      errorText[i].style.display = "block";
      node.classList.add("invalid");
    } else {
      errorIcons[i].style.display = "none";
      errorText[i].style.display = "none";
      node.classList.remove("invalid");
    }
  });

  if (emailInput.value && !validRegex.test(emailInput.value)) {
    e.preventDefault();
    wrongEmail.style.display = "block";
    emailInput.classList.add("invalid");
  } else if (emailInput.value) {
    wrongEmail.style.display = "none";
    emailInput.classList.remove("invalid");
  }
});
