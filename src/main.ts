import './style.css'

//copy
const copyButton = document.querySelector("#copy-btn")!
const copiedAlert = <HTMLElement>document.querySelector("#alert")!

//text field
const passwordField = <HTMLInputElement>document.querySelector("#password")!

//customizing the password
const slider = <HTMLInputElement>document.querySelector("#slider")!
const sliderText = <HTMLInputElement>document.querySelector("#slider-text")!
const charCheckbox = <HTMLInputElement>document.querySelector("#characters")!
const symCheckbox = <HTMLInputElement>document.querySelector("#symbols")!
const numCheckbox = <HTMLInputElement>document.querySelector("#numbers")!

//Password Checker
const progressBar = <HTMLProgressElement>document.querySelector("#progress-bar")!

//vars
var PasswordText: string

////
stringHandler()

//functions
function copyFunction() {
  //copy to clipboard
  navigator.clipboard.writeText(passwordField.value)
  //turn on alert
  var opacity = 0
  copiedAlert.style.visibility = "visible"
  for (opacity = 0; opacity < 1.1; opacity++) {
    copiedAlert.style.opacity = opacity.toString()
  }
  //turn of alert
  setTimeout(() => {
    copiedAlert.style.visibility = "hidden"
    opacity = 0
    copiedAlert.style.opacity = '0'
  }, 450);
}
function stringHandler() {
  let mainString = ""
  if (charCheckbox.checked) {
    mainString += ("ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase())
  }
  if (symCheckbox.checked) {
    mainString += `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`
  }
  if (numCheckbox.checked) {
    mainString += "0123456789"
  }
  PasswordText = mainString
  passwordGenerator()
}
function passwordGenerator() {
  var length = +slider.value
  var empty = ""
  for (let i = 0; i < length; i++) {
    empty += PasswordText.charAt(Math.floor(Math.random() * PasswordText.length))
  }
  passwordField.value = empty
  passwordChecker()
}
function passwordChecker() {
  if (passwordField.value.length < 4) progressBar.value = 0
  else {
    var multiplier = (+slider.value * 2)
    if (multiplier <= 25) {
      progressBar.classList.add('progress-error')
    }
    if (multiplier <= 75 && multiplier >= 25) {

      progressBar.classList.remove('progress-error')
      progressBar.classList.add('progress-warning')

    } else {
      progressBar.classList.remove('progress-warning')
      progressBar.classList.add('progress-success')
    }
    progressBar.value = multiplier


  }
}
//array of checkbox
let checkBoxes = [
  charCheckbox, symCheckbox, numCheckbox
]

//event listeners
copyButton.addEventListener('click', copyFunction)
charCheckbox.addEventListener('change', (e) => {
  if (checkBoxes.every(d => d.checked === false)) {
    (e.target as HTMLInputElement).checked = true
  }
  stringHandler()
})
symCheckbox.addEventListener('change', (e) => {
  if (checkBoxes.every(d => d.checked === false)) {
    (e.target as HTMLInputElement).checked = true
  }
  stringHandler()
})
numCheckbox.addEventListener('change', (e) => {
  if (checkBoxes.every(d => d.checked === false)) {
    (e.target as HTMLInputElement).checked = true
  }
  stringHandler()
})


//link slider with sliderText
slider.addEventListener('input', () => {
  sliderText.value = slider.value
  passwordGenerator()
})
sliderText.addEventListener('input', () => {
  slider.value = sliderText.value
  passwordGenerator()
})
