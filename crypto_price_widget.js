function getCrypto() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://finnhub.io/api/v1/news?category=generaltoken=btmr0hf48v6rffclgvbg', true)

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText)
      let newsList = ''
      let i;
      for (i = 0; i < 1; i++) {
        console.log(response[i])
        newsList += `<li>${response[i].headline}: ${response[i].summary}<li>`
      }
      document.getElementById('news-list').innerHTML = newsList
    }
  }
  xhr.send()
}

getCrypto()