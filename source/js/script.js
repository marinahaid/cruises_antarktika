'use strict'

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var formMain = document.querySelector('.main-form__appointment-form');
var requireEls = document.querySelectorAll('.require');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});







/*const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;

const timeout = 800;

if(popupLinks.length > 0) {
  for(let i = 0; i < popupLinks.length; i++){
    const popupLink = popupLinks[i];
    popupLink.addEventListener('click', function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0) {
  for(let i = 0; i < popupCloseIcon.length; i++){
    const el = popupCloseIcon[i];
    el.addEventListener('click', function (e) {
popupCloseIcon(el.closest('.popup'));
e.preventDefault
    })
  }
}

function popupOpen(curentPopup) {
  if(curentPopup && unclock){
    const popupActive = document.querySelector('.popup.open');
    if(popupActive) {
      popupCloseIcon(popupActive, false);

    }else{
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function(e) {
if (!e.target.closest('.popup__content')) {
  popupCloseIcon(e.target.closest('.popup'));
}
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if(unlock) {
    popupActive.classList.remove('open');
    if(doUnlock) {
      bodyUnlock()
    }
  }
}

function bodyLock () {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if(lockPadding.length > 0){
    for (let i = 0; i < lockPadding.length; i++){
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function(){
    unlock = true;

  }, timeout);
}

function bodyUnLock () {
  setTimeout(function () {
    for(let i = 0; i < lockPadding.length; i++){
      const el = lockPadding[i];
      el.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  },timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if(e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css){
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

(function (){
  if(!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector;
  }
});







/*var form_data = document.querySelector(".form__appointment");
if (form_data) {


  var form_email = document.querySelector(".email");
 // var modal_fail = document.querySelector('.fail');
  var modal_success = document.querySelector('.success');
  var required_fields = document.querySelectorAll('.required');

  if (form_data) {
    required_fields.forEach(function (item, i) {
      item.removeAttribute('required');
    });

    form_email.removeAttribute('pattern');
    form_email.removeAttribute('type');

    form_data.addEventListener('submit', function (evt) {
      var email_pattern = /\S+@\S+\.\S+/;
      evt.preventDefault();
      var flag = 0;
      required_fields.forEach(function (item, i) {
        if (item.value === '') {
          item.classList.add('error');
          flag = 1;
        }
      });

      if (!form_email.value.match(email_pattern)) {
        form_email.classList.add('error');
        flag = 1;
      }

      var invalid_elements = document.querySelectorAll('.error');
      if (invalid_elements) {
        invalid_elements.forEach(function (item, i) {
          item.addEventListener('focus', function () {
            item.classList.remove('error');
          });
        });
      }

      if (flag == 1) {
        modal_fail.classList.add('modal--active');
      } else {
        modal_success.classList.add('modal--active');
        form_data.reset();
      }
    });
  }
}
var close_btns = document.querySelectorAll(".close-modal");
if (close_btns) {
  close_btns.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      item.parentElement.classList.remove('modal--active');
    });
  });
}*/





var link = document.querySelector(".more__button");
var popup = document.querySelector(".form-popup");
var close = popup.querySelector(".close-popup");



link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});


