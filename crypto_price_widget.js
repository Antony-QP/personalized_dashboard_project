function getCrypto() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://finnhub.io/api/v1/news?category=generaltoken=btmr0hf48v6rffclgvbg', true)

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText)
      let i;
      for (i = 0; i < 5; i++) {
        console.log(response[i])
        let list = document.getElementById('news-list')
        list += `<li>${response[i].headline}<li>`
      }
    }
  }
  xhr.send()
}

// getCrypto()