console.log('apiframe!');

function makeRequest() {
  const options = {
    method: 'POST',
  }
  fetch('https://safari-origin-null.glitch.me/', options)
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

const button = document.createElement('button');
button.innerText = 'Make request!';
button.addEventListener('click', makeRequest);

document.body.appendChild(button);
