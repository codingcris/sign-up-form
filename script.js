function validatePasswords(submitEvent) {
  const passwordRow = document.getElementById("password-input-row");
  const divContainer = passwordRow.parentNode;
  const passwordField = document.getElementById("password");
  const passwordConfirmField = document.getElementById("password-confirm");

  const password = passwordField.value;
  const confirm = passwordConfirmField.value;

  if (password !== confirm) {
    passwordField.classList.add("error");
    passwordConfirmField.classList.add("error");
    submitEvent.preventDefault();
    const passwordMatch = document.createElement("span");
    passwordMatch.style.color = "red";
    passwordMatch.style.marginTop = "-1rem";
    passwordMatch.textContent = "*Paswords Don't Match";
    if (divContainer.lastChild.textContent !== passwordMatch.textContent) {
      divContainer.appendChild(passwordMatch);
    }
  }
}

const signupform = document.getElementById("signupform");

signupform.addEventListener("submit", validatePasswords);
