let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let btn = document.querySelector('.btn');

window.onload = function() {
  if (window.navigator.online) {
    online()
  } else {
    offline()
  }
}

window.addEventListener('online', function() {
  online();
});
window.addEventListener('offline', function() {
  offline();
})

btn.onclick = function() {
  window.location.reload();
}

function online() {
  title.innerHtml = "Online Now";
  title.style.color = "green";
  ul.classList.add('hide');
  btn.classList.add('hide');
}

function offline() {
  title.innerHtml = "Offline Now";
  title.style.color = "red";
  ul.classList.remove('hide');
  btn.classList.remove('hide');
}
