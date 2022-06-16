console.log('apiframe!');

function makeFetchRequest() {
  
  const options = JSON.parse(document.getElementById('fetchOptionsInput').value);
  fetch('https://safari-origin-null.glitch.me/', options)
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

function makeXHRRequest() {
  var http = new XMLHttpRequest();
  var url = 'https://safari-origin-null.glitch.me/';

  http.open('POST', url, true);
  http.withCredentials = document.getElementById('xhrCredentialsInput').checked;

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

const fetchOptionsInput = document.createElement('textarea');
fetchOptionsInput.id = 'fetchOptionsInput';
fetchOptionsInput.value = `{
    "method": "POST",
    "credentials": "include"
 }`;
const fetchOptionsLabel = document.createElement('label');
fetchOptionsLabel.innerText = 'Fetch Options';
fetchOptionsLabel.for = 'fetchOptionsInput';

document.body.appendChild(fetchOptionsLabel);
document.body.appendChild(fetchOptionsInput);
document.body.appendChild(fetchButton);

document.body.appendChild(document.createElement('hr'));

const xhrCredentialsInput = document.createElement('input');
xhrCredentialsInput.type = 'checkbox';
xhrCredentialsInput.id = 'xhrCredentialsInput';
const xhrCredentialsLabel = document.createElement('label');
xhrCredentialsLabel.innerText = 'withCredentials';
xhrCredentialsLabel.for = 'xhrCredentialsInput';

const xhrButton = document.createElement('button');
xhrButton.innerText = 'Make XHR request!';
xhrButton.addEventListener('click', makeXHRRequest);

document.body.appendChild(xhrCredentialsLabel);
document.body.appendChild(xhrCredentialsInput);
document.body.appendChild(xhrButton);

