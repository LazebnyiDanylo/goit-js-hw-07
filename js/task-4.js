const form = document.querySelector(".login-form");
form.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();
  const element = event.target.elements;
  if (element.email.value.trim() === "" || element.password.value.trim() === "") {
    return alert("All form fields must be filled in");
  }
  console.log({
    email: element.email.value.trim(),
    password: element.password.value.trim(),
  });
  form.reset();
}
