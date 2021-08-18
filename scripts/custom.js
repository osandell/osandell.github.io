let menuButton = document.getElementsByClassName('c-menu-button')[0]
let navigation = document.getElementsByClassName('c-navigation')[0]
let navigationItems = document.getElementsByClassName('c-navigation__item')
let exitButton = document.getElementsByClassName('c-exit-button')[0]

function openNavigationMenu() {
  navigation.classList.remove('c-navigation--close')
  navigation.classList.add('c-navigation--open')
  menuButton.classList.add('c-menu-button--open')
  exitButton.classList.add('c-exit-button--visible')
  d
}
menuButton.addEventListener('click', openNavigationMenu)

function closeNavigationMenu() {
  navigation.classList.remove('c-navigation--open')
  navigation.classList.add('c-navigation--close')
  menuButton.classList.remove('c-menu-button--open')
  exitButton.classList.remove('c-exit-button--visible')
}
exitButton.addEventListener('click', closeNavigationMenu)

function scrollToElementFromNavigation() {
  navigation.classList.remove('c-navigation--open')
  menuButton.classList.remove('c-menu-button--open')
  exitButton.classList.remove('c-exit-button--visible')

  var elementName = this.classList[1].split('--')[1]

  const element = document.getElementsByClassName(elementName)[0]
  const y = element.getBoundingClientRect().top + window.pageYOffset

  window.scrollTo({ top: y, behavior: 'smooth' })
}

for (var i = 0; i < navigationItems.length; i++) {
  navigationItems[i].addEventListener('click', scrollToElementFromNavigation)
}

let toPortfolioButton = document.getElementsByClassName(
  'c-button--to-portfolio'
)[0]

document.getElementsByClassName('c-heading-primary--main')[0].style.visibility =
  'visible'
document.getElementsByClassName('c-heading-primary--sub')[0].style.visibility =
  'visible'
document.getElementsByClassName('c-button')[0].style.visibility = 'visible'

var t1 = gsap.timeline({
  defaults: { duration: 1, opacity: 0, ease: 'power1.in' },
})

t1.from('.anim1', { stagger: 1 }).from('.anim2', {})

function scrollToMenu() {
  const yOffset = 0

  const element = document.getElementsByClassName('l-section-portfolio')[0]
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({ top: y, behavior: 'smooth' })
}
toPortfolioButton.addEventListener('click', scrollToMenu)

const email = document.getElementsByClassName('c-contact-form__input--email')[0]
const phone = document.getElementsByClassName('c-contact-form__input--phone')[0]

var errorMessages = {
  noEmailOrPhone: 'Var god ange epost och / eller telefonnummer.',
  invalidEmail: 'Var god ange en giltig epost-adress.',
  invalidPhone: 'Var god ange ett giltigt telefonnummer.',
}

// Universal event adder that is compatible with older IE "attachEvent"
// https://stackoverflow.com/questions/16493645/javascript-equivalent-of-jquerys-keyup-and-keydown
function addEvent(element, eventName, callback) {
  if (element.addEventListener) {
    element.addEventListener(eventName, callback, false)
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, callback)
  }
}
addEvent(email, 'keyup', checkInputsOnKeyUp)
addEvent(phone, 'keyup', checkInputsOnKeyUp)

// Remove noEmailOrPhone error if user starts typing in either of these inputs
function checkInputsOnKeyUp() {
  var emailValue = document
    .getElementsByClassName('c-contact-form__input--email')[0]
    .value.trim()
  var phoneValue = document
    .getElementsByClassName('c-contact-form__input--phone')[0]
    .value.trim()

  if (emailValue != '' || phoneValue != '') {
    removeExclamationFor(email)
    removeErrorFor(phone, errorMessages['noEmailOrPhone'])
  }
}

if (phoneValue != '') {
  if (validatePhone(phoneValue)) {
    removeErrorFor(phone, errorMessages['invalidPhone'])
  } else {
    setErrorFor(phone, errorMessages['invalidPhone'])
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^[0-9+()-]*$/
  return re.test(phone)
}

function setErrorFor(input, message) {
  input.classList.add('c-contact-form__input--error')

  var siblings = input.parentNode.childNodes

  for (var i = 0; i < siblings.length; i++) {
    if (
      siblings[i].nodeType == Node.ELEMENT_NODE &&
      siblings[i].className.includes('c-contact-form__error-message')
    ) {
      siblings[i].classList.add('c-contact-form__error-message--visible')
      siblings[i].innerHTML = message
    }

    if (
      siblings[i].nodeType == Node.ELEMENT_NODE &&
      siblings[i].className.includes('c-contact-form__exclamation-icon')
    ) {
      siblings[i].classList.add('c-contact-form__exclamation-icon--visible')
    }
  }
}

function setExclamationFor(input) {
  input.classList.add('c-contact-form__input--error')

  var siblings = input.parentNode.childNodes

  for (var i = 0; i < siblings.length; i++) {
    if (
      siblings[i].nodeType == Node.ELEMENT_NODE &&
      siblings[i].className.includes('c-contact-form__exclamation-icon')
    ) {
      siblings[i].classList.add('c-contact-form__exclamation-icon--visible')
    }
  }
}

function removeErrorFor(input, message) {
  var siblings = input.parentNode.childNodes

  for (var i = 0; i < siblings.length; i++) {
    if (
      siblings[i].nodeType == Node.ELEMENT_NODE &&
      siblings[i].className.includes('c-contact-form__error-message')
    ) {
      if (siblings[i].innerHTML == message) {
        siblings[i].innerHTML = ''
        siblings[i].classList.remove('c-contact-form__error-message--visible')
        input.classList.remove('c-contact-form__input--error')

        for (var j = 0; j < siblings.length; j++) {
          if (
            siblings[j].nodeType == Node.ELEMENT_NODE &&
            siblings[j].className.includes('c-contact-form__exclamation-icon')
          ) {
            siblings[j].classList.remove(
              'c-contact-form__exclamation-icon--visible'
            )
          }
        }
      }
    }
  }
}

function removeExclamationFor(input) {
  input.classList.remove('c-contact-form__input--error')

  var siblings = input.parentNode.childNodes

  for (var i = 0; i < siblings.length; i++) {
    if (
      siblings[i].nodeType == Node.ELEMENT_NODE &&
      siblings[i].className.includes('c-contact-form__exclamation-icon')
    ) {
      siblings[i].classList.remove('c-contact-form__exclamation-icon--visible')
    }
  }
}

var form = document.getElementById('my-form')

async function handleSubmit(event) {
  event.preventDefault()
  //   const emailValue = email.value.trim()
  //   const phoneValue = phone.value.trim()

  let formIsValid = true
  var emailValue = document
    .getElementsByClassName('c-contact-form__input--email')[0]
    .value.trim()
  var phoneValue = document
    .getElementsByClassName('c-contact-form__input--phone')[0]
    .value.trim()

  if (emailValue != '') {
    if (!validateEmail(emailValue)) {
      formIsValid = false
      setErrorFor(email, errorMessages['invalidEmail'])
    }
  }

  if (phoneValue != '') {
    if (!validatePhone(phoneValue)) {
      formIsValid = false
      setErrorFor(phone, errorMessages['invalidPhone'])
    }
  }

  if (emailValue === '' && phoneValue === '') {
    setExclamationFor(email)
    setErrorFor(phone, errorMessages['noEmailOrPhone'])
    formIsValid = false
  }
  if (formIsValid) {
    if (emailValue === '') {
      document.getElementsByClassName('c-contact-form__input--email')[0].value =
        'no@email.specified'
    }

    var data = new FormData(event.target)
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        window.location.href = 'contact-confirmation.html'
        form.reset()
      })
      .catch(() => {
        window.location.href = 'contact-confirmation.html'
      })
  }
}
form.addEventListener('submit', handleSubmit)
