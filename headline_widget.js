class Headline {
  constructor() {
    this.apiKey = '23d911d485f54d34a6c9d6be9c029b6e'
  }









  getHeadline() {
    const xhr = new XMLHttpRequest();



    xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=us&apiKey=23d911d485f54d34a6c9d6be9c029b6e', true)

    xhr.setRequestHeader('access-control-allow-origin', true)

    if (this.status === 200) {
      const response = JSON.parse(this.responseText)
      console.log(response)
    }
    xhr.send();
  }
}
const headline = new Headline();

document.getElementById('get-headlines').addEventListener('click', headline.getHeadline);