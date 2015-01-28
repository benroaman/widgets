function toggleClass(element, className) {
  var currentClasses = element.className;

  if (currentClasses.indexOf(className) >= 0) {
    element.className = currentClasses.replace(className, '').trim();
  } else {
    element.className += ' ' + className;
  }
}

var openButton = document.querySelector('.open-modal-button');
var closeButton = document.querySelector('.close-modal-button');
var modal = document.querySelector('.modal-greyout');

openButton.addEventListener('click', function() {
  toggleClass(modal, 'visible');
})

closeButton.addEventListener('click', function() {
  toggleClass(modal, 'visible');
})
