// Get time
setInterval(getTime, 1000);
// Event Listeners

const ui = new WeatherUI();

let weatherLocation = document.getElementById('weather-location')

const weather = new Weather(weatherLocation)


function getNameAndCity(e) {
  nameOutput.innerHTML = `Hello ${name.value}`;
  weatherLocation = weatherLocation.value;
  weatherLocation = JSON.stringify(weatherLocation);
  getWeather();
  clearForm();
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