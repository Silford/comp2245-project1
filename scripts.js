document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".newsletter form");
  const emailInput = document.querySelector("#email");
  const messageDiv = document.querySelector(".message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
      messageDiv.innerHTML =
        "<p><b>Please enter a valid email address.</b></p>";
    } else {
      messageDiv.innerHTML = `<p><b>Thank you! Your email address ${email} has been added to our mailing list!</b></p>`;
    }
  });
});
