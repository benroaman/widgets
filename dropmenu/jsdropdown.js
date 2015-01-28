// function toggleClass (element, className) {
//   var currentClasses = element.className;
//
//   if (currentClasses.indexOf(className) >=0) {
//     element.className = currentClasses.replace(className, '').trim();
//   } else {
//     element.className += ' ' + className;
//   }
// }
//
// var mainButtonA = document.querySelector('.dropmenu-activate');
//
// mainButtonA.addEventListener('click', function() {
//   toggleClass(mainButtonA, 'visible');
// })

//above is the cleaner version for one button

var mainButtonA = document.querySelector('#menu-a');
var mainButtonB = document.querySelector('#menu-b'); // instancing all 3 menus in the script
var mainButtonC = document.querySelector('#menu-c');

var body = document.querySelector('body');

body.addEventListener('click', function() {
  var aClasses = mainButtonA.className;
  var bClasses = mainButtonB.className;
  var cClasses = mainButtonC.className;

  mainButtonA.className = aClasses.replace('visible', '').trim();
  mainButtonB.className = bClasses.replace('visible', '').trim();
  mainButtonC.className = cClasses.replace('visible', '').trim();
})

mainButtonA.addEventListener('click', function(e) { // making listener for menu A
  e.stopPropagation();
  var currentClasses = mainButtonA.className;
  var bClasses = mainButtonB.className;
  var cClasses = mainButtonC.className;

  if (currentClasses.indexOf('visible') >=0) {
    mainButtonA.className = currentClasses.replace('visible', '').trim();
  } else {
    mainButtonA.className += ' ' + 'visible';
    mainButtonB.className = bClasses.replace('visible', '').trim(); // resetting other menus
    mainButtonC.className = cClasses.replace('visible', '').trim();
  }
})

mainButtonB.addEventListener('click', function(e) {
  e.stopPropagation();
  var currentClasses = mainButtonB.className;
  var aClasses = mainButtonA.className;
  var cClasses = mainButtonC.className;

  if (currentClasses.indexOf('visible') >=0) {
    mainButtonB.className = currentClasses.replace('visible', '').trim();
  } else {
    mainButtonB.className += ' ' + 'visible';
    mainButtonA.className = aClasses.replace('visible', '').trim();
    mainButtonC.className = cClasses.replace('visible', '').trim();
  }
})

mainButtonC.addEventListener('click', function(e) {
  e.stopPropagation();
  var currentClasses = mainButtonC.className;
  var aClasses = mainButtonA.className;
  var bClasses = mainButtonB.className;

  if (currentClasses.indexOf('visible') >=0) {
    mainButtonC.className = currentClasses.replace('visible', '').trim();
  } else {
    mainButtonC.className += ' ' + 'visible';
    mainButtonA.className = aClasses.replace('visible', '').trim();
    mainButtonB.className = bClasses.replace('visible', '').trim();
  }
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
