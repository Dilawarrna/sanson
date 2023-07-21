
      
// Countdown js

function updateCountdown() {
// Get the current date and time
var now = new Date();

// Set the target date to the end of the day
var targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 300, 59, 59);

// Calculate the remaining time in milliseconds
var remainingTime = targetDate.getTime() - now.getTime();

// Convert the remaining time to days, hours, minutes, and seconds
var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

// Update the countdown elements in the HTML
document.querySelector('.number.days').textContent = days;
document.querySelector('.number.hours').textContent = hours;
document.querySelector('.number.minutes').textContent = minutes;
document.querySelector('.number.seconds').textContent = seconds;

// Calculate the stroke-dasharray values for each path
var daysDashArray = ((days / 100) * 100) + ', 100';
var hoursDashArray = ((hours / 24) * 100) + ', 100';
var minutesDashArray = ((minutes / 60) * 100) + ', 100';
var secondsDashArray = ((seconds / 60) * 100) + ', 100';

// Update the stroke-dasharray attributes of the SVG paths
document.querySelector('.circle-days').setAttribute('stroke-dasharray', daysDashArray);
document.querySelector('.circle-hours').setAttribute('stroke-dasharray', hoursDashArray);
document.querySelector('.circle-minutes').setAttribute('stroke-dasharray', minutesDashArray);
document.querySelector('.circle-seconds').setAttribute('stroke-dasharray', secondsDashArray);
}


updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Countdown js end

// parallax effect js

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    
    // Calculate the parallax effect based on the scroll position and adjust the factor as needed
    var parallaxEffect = (scrollPosition - 600) / -10;

    // Apply the parallax effect after 600px scroll and remove it after 1200px
    if (scrollPosition >= 600 && scrollPosition < 2500) {
      $('.banner').addClass('parallax-container');
      $('.banner').css('background-position', '50% ' + parallaxEffect + 'px');
    } else {
      $('.banner').removeClass('parallax-container');
      $('.banner').css('background-position', '50% 0');
    }
  });
});

// parallax effect js

  //    Marquee js
  const marqueeText = document.getElementsByClassName("marquee-text");
    const marqueeTextContainer = document.getElementById("marquee-text-container");

    function adjustMarqueeWidth() {
      const containerWidth = marqueeTextContainer.offsetWidth;
      const textWidth = marqueeText.offsetWidth;
      if (textWidth > containerWidth) {
        marqueeText.style.animationDuration = (textWidth / 80) + "s"; // Adjust speed (smaller values = faster)
      }
    }
    adjustMarqueeWidth();

//    Marquee js
 