// Create class
class Weather {
  constructor(city) {
    this.apiKey = 'b296d0e86384886403f861b58ae58d98';
    this.city = city
  }


  // Fetch weather from the API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city.value}&appid=${this.apiKey}&units=metric`)

    const responseData = await response

    return responseData.json();
  }
}

// Input weather into the DOM
class WeatherUI {
  constructor() {
    this.type = document.getElementById('type');
    this.temp = document.getElementById('temp');
    this.location = document.getElementById('location');
  }

  paint(weather) {
    this.location.innerText = weather.name;
    this.temp.innerText = JSON.stringify(weather.main.temp);
    this.type.innerText = weather.weather[0].description.toUpperCase()
  }
}