console.log('apiframe!');

function makeFetchRequest() {
  const options = {
    method: 'POST',
  }
  fetch('https://safari-origin-null.glitch.me/', options)
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

function makeXHRRequest() {
  var http = new XMLHttpRequest();
  var url = 'https://safari-origin-null.glitch.me/';
  http.open('POST', url, true);


  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          console.log(http.responseText);
      }
  }
  http.send();
}

const fetchButton = document.createElement('button');
fetchButton.innerText = 'Make Fetch request!';
fetchButton.addEventListener('click', makeFetchRequest);

document.body.appendChild(fetchButton);

const xhrButton = document.createElement('button');
xhrButton.innerText = 'Make XHR request!';
xhrButton.addEventListener('click', makeXHRRequest);

document.body.appendChild(xhrButton);
