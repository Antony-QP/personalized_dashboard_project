document.getElementById('get-to-do-list').addEventListener('click', getJsonList)


function getJsonList() {
  fetch('to_do_json_list.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let list = '';
      data.forEach(function (todo) {
        list += `<li>Day: ${todo.day} - ${todo.task}</li>`
      })
      document.getElementById('list').innerHTML = list;
    })
    .catch(function (err) {
      console.log(err)
    })
}