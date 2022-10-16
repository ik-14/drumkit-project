const ride  = document.querySelector('#ride')
ride.addEventListener('click',() =>{
  let rideSound = new Audio('ride.wav');
  rideSound.play();
});


const crash  = document.querySelector('#crash')
crash.addEventListener('click',() =>{
  let crashSound = new Audio('crash.wav');
  crashSound.play();
});


const hat  = document.querySelector('#hat')
hat.addEventListener('click',() =>{
  let hatSound = new Audio('hi-hat.wav');
  hatSound.play();
});


const bass  = document.querySelector('#bass')
bass.addEventListener('click',() =>{
  let bassSound = new Audio('bass-drum.wav');
  bassSound.play();
});


const hiTom  = document.querySelector('#hiTom')
hiTom.addEventListener('click',() =>{
  let hiTomSound = new Audio('high-tom.wav');
  hiTomSound.play();
});


const middleTom  = document.querySelector('#middleTom')
middleTom.addEventListener('click',() =>{
  let middleTomSound = new Audio('medium-tom.wav');
  middleTomSound.play();
});


const snare  = document.querySelector('#snare')
snare.addEventListener('click',() =>{
  let snareSound = new Audio('snare.wav');
  snareSound.play();
});


const floorTom  = document.querySelector('#floorTom')
floorTom.addEventListener('click',() =>{
  let floorTomSound = new Audio('floor-tom.wav');
  floorTomSound.play();
});


const floorTom2 = document.querySelector('#floorTom2')
floorTom2.addEventListener('click',() =>{
  let floorTom2Sound = new Audio('floor-tom.wav');
  floorTom2Sound.play();
});

document.addEventListener('keyup', (event1) => {
  let code = event1.code
  if (code === 'Digit1') {
    let rideSound = new Audio('ride.wav');
    rideSound.play();
  } else if (code === 'Digit2') {
    let crashSound = new Audio('crash.wav');
    crashSound.play();
  }
   else if (code === 'Digit3') {
    let hatSound = new Audio('hi-hat.wav');
    hatSound.play();
  }
   else if (code === 'Digit4') {
    let bassSound = new Audio('bass-drum.wav');
    bassSound.play();
  }
   else if (code === 'Digit5') {
    let hiTomSound = new Audio('high-tom.wav');
    hiTomSound.play();
  }
   else if (code === 'Digit6') {
    let middleTomSound = new Audio('medium-tom.wav');
    middleTomSound.play();
  }
   else if (code === 'Digit7') {
    let snareSound = new Audio('snare.wav');
    snareSound.play();
  }
   else if (code === 'Digit8') {
    let floorTomSound = new Audio('floor-tom.wav');
    floorTomSound.play();
  } else {
    alert('Enter a number between 1 & 8')
  }
})
