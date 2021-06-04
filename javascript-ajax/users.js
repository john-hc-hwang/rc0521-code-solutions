var $ = document.querySelector.bind(document);

var $userList = $('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var users of xhr.response) {
    var userName = document.createElement('li');
    userName.textContent = users.name;
    $userList.appendChild(userName);
  }
});
xhr.send();
