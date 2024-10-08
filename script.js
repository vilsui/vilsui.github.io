let button = document.getElementById("button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function hamburg() {
  document.querySelector('.dropdown').style.display = 'block';
}

function cancel() {
  document.querySelector('.dropdown').style.display = 'none';
}