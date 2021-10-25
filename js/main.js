'use strict';

const secSide = document.querySelector('.second-hand');
const minSide = document.querySelector('.min-hand');
const hourSide = document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secSide.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minSide.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourSide.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);