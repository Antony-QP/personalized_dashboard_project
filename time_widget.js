// UI
const time = document.getElementById('time')

// Get time
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  time.innerText = (hours + ":" + minutes + ":" + seconds)
}