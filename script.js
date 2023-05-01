const form = document.querySelector(".form"),
  inputs = document.querySelectorAll("input"),
  errorIcons = document.querySelectorAll(".error-icon"),
  errorText = document.querySelectorAll(".error-text"),
  emailInput = document.querySelector(".email"),
  wrongEmail = document.querySelector(".wrong-email"),
  validRegex =
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
