// Hide all divs until form has been submitted
function hideDivs() {
  let header = document.querySelector('.header')
  let lowerRow = document.querySelector('.lower-row')
  header.classList.add('hidden')
  lowerRow.classList.add('hidden')
}

function showDivs() {
  let header = document.querySelector('.header')
  let lowerRow = document.querySelector('.lower-row')
  header.classList.remove('hidden')
  lowerRow.classList.remove('hidden')
}

window.addEventListener('DOMContentLoaded', hideDivs)


// Get time
setInterval(getTime, 1000);
// Event Listeners

const ui = new WeatherUI();

let weatherLocation = document.getElementById('weather-location')

const weather = new Weather(weatherLocation)


function getNameAndCity(e) {
  nameOutput.innerHTML = `Hey, ${name.value}`;
  weatherLocation = weatherLocation.value;
  weatherLocation = JSON.stringify(weatherLocation);
  getWeather();
  clearForm();
  showDivs();
  e.preventDefault();
}


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results)
    })
    .catch(err => console.log(err))
}

form.addEventListener('submit', getNameAndCity)