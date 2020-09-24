const name = document.getElementById('name');
const nameOutput = document.getElementById('name-result')
const form = document.getElementById('name-form')

// Event listner


function getNameAndCity() {
  nameOutput.innerHTML = `Hello ${name.value}`;

  clearForm();
}

// Clear form
function clearForm() {
  form.style.display = "none";
}