const minutesInput = document.querySelector('#minutes')
const secondsInput = document.querySelector('#seconds')

const buttonPlay = document.querySelector('#btn-play')
const buttonPause = document.querySelector('#btn-pause')
const buttonStop = document.querySelector('#btn-stop')
const buttonPlus = document.querySelector('#btn-plus')
const buttonMinus = document.querySelector('#btn-minus')

const timerDisplay = document.querySelector('.difference')
let minutesDisplay = document.querySelector('.minutes-display')
let secondsDisplay = document.querySelector('.seconds-display')

let minutesInputTime = Number(minutesInput.value)
let secondsInputTime = Number(secondsInput.value)
let msTime = (minutesInputTime * 60 * 1000) + secondsInputTime * 1000

const Cafeteria = new Audio('./assets/audios/Cafeteria.wav')
const Chuva = new Audio('./assets/audios/Chuva.wav')
const Floresta = new Audio('./assets/audios/Floresta.wav')
const Lareira = new Audio('./assets/audios/Lareira.wav')
const KitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

Cafeteria.loop = true
Chuva.loop = true
Floresta.loop = true
Lareira.loop = true

const audios = {
  Cafeteria,
  Chuva,
  Floresta,
  Lareira
}

function handleCardClick(card) {
  card.classList.toggle('selected')
  let audioName = card.id
  audios[audioName].paused === true ? audios[audioName].play() : audios[audioName].pause()
}

function formatTime(ms) {
  if (ms < 0) ms = -ms

  let hours = Math.floor(ms / 3600000)
  ms = ms % 3600000
  let minutes = Math.floor(ms / 60000) % 60
  ms = ms % 60000
  let seconds = Math.floor(ms / 1000) % 60
  ms = ms % 1000
  return { hours, minutes, seconds, ms }
}

let timerTimeout

function countdown(stop) {
  if (msTime <= 0 || stop) {
    if(msTime <= 0) KitchenTimer.play()
    clearTimeout(timerTimeout)
    return
  }

  timerTimeout = setTimeout(function () {
    msTime -= 100
    attTimerDisplay()
    countdown()
  }, 100)
}

function displayTimer() {
  timerDisplay.classList.remove('hidden')
  document.querySelector('.input-time').classList.add('hidden')
}

function displayInput(){
  timerDisplay.classList.add('hidden')
  document.querySelector('.input-time').classList.remove('hidden')
}

function attTimerDisplay() {
  let formattedTiming = formatTime(msTime)

  minutesDisplay.textContent = String(formattedTiming.minutes).padStart(2, '0')
  secondsDisplay.textContent = String(formattedTiming.seconds).padStart(2, '0')
}

buttonPlay.addEventListener('click', () => {
  minutesInputTime = Number(minutesInput.value)
  secondsInputTime = Number(secondsInput.value)
  msTime = (minutesInputTime * 60 * 1000) + secondsInputTime * 1000
  
  if(isNaN(msTime) || msTime <= 0){
    alert('Insira um tempo válido')
    return
  }

  buttonPlay.classList.add('hidden')
  buttonPause.classList.remove('hidden')
  countdown()
  displayTimer()
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hidden')
  buttonPlay.classList.remove('hidden')
  clearTimeout(timerTimeout)
  countdown('stop')
})

buttonStop.addEventListener('click', () => {
  buttonPause.classList.add('hidden')
  buttonPlay.classList.remove('hidden')
  clearTimeout(timerTimeout)
  countdown('stop')

  displayInput()
})

buttonPlus.addEventListener('click', () => {
  msTime += 5000 * 60
  attTimerDisplay()
})

buttonMinus.addEventListener('click', () => {
  if (msTime > (1000 * 60 * 5)) {
    msTime -= 1000 * 60 * 5
    attTimerDisplay()
  }
})