document.getElementById('generate-joke').addEventListener('click', getJokes);

const output = document.querySelector('.joke-output')

function getJokes(e) {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      output.innerHTML = `${response.value}`
    }
  }

  xhr.send();
  e.preventDefault()
}