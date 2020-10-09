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
  document.querySelector('.txt-type').style.display = 'none'
}


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results)
    })
    .catch(err => console.log(err))
}

form.addEventListener('submit', getNameAndCity)

const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type method
TypeWriter.prototype.type = function () {
  //  Current index of word
  const current = this.wordIndex % this.words.length;
  //  Get full text of current word
  const fullTxt = this.words[current]



  //  Check if deleteing
  if (this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1)

  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  // Insert into element 

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  // Initial Type Speed
  let typeSpeed = 200

  if (this.isDeleting) {
    typeSpeed /= 3;
  }
  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make a pause at the end 
    typeSpeed = this.wait
    // Set is deleting to true
    this.isDeleting = true
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to the next word
    this.wordIndex++;
    // Pause before next word
    typeSpeed = 500
  }


  setTimeout(() => this.type(), typeSpeed)
}


// Init on dom load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait')

  //  Init typewriter
  new TypeWriter(txtElement, words, wait)
}