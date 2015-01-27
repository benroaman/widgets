function toggleClass (element, className) {
  var currentClasses = element.className;

  if (currentClasses.indexOf(className) >=0) {
    element.className = currentClasses.replace(className, '').trim();
  } else {
    element.className += ' ' + className;
  }
}

var mainButtonA = document.querySelector('.dropmenu-activate');

mainButtonA.addEventListener('click', function() {
  toggleClass(mainButtonA, 'visible');
})

//The code below was meant to add functionality to all three buttons,
//and cause other buttons to unselect when one is selected.
//Whenever I passed mainButtons[x] to the toggleClass function,
//it would initialize element to undefined rather than the value
//referenced by the array. This boggles me because direct calls using
//specific references to the array were functional.
//[eg toggleClass(mainButtons[0]. 'visible') ].



// function toggleClass (element, className) {
//   var currentClasses = element.className;
//
//   if (currentClasses.indexOf(className) >=0) {
//     element.className = currentClasses.replace(className, '').trim();
//   } else {
//     for (var i = 0; i < mainButtons.length; ++i) {
//       if (mainButtons[i] !== element) {
//         mainButtons[i].className = mainButtons[i].replace(className, '').trim();
//       } else {
//         element.className += ' ' + className;
//       }
//     }
//   }
// }
//
// var mainButtons = [];
//
// mainButtons.push(document.querySelector('#menu-a'));
// mainButtons.push(document.querySelector('#menu-b'));
// mainButtons.push(document.querySelector('#menu-c'));
//
// for (var x = 0; x < mainButtons.length; ++x) {
//   mainButtons[x].addEventListener('click', function() {
//     toggleClass(mainButtons[x], 'visible');
//   })
// }
