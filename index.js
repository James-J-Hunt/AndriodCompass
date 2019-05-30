// Version 12

// Compass Code and alpha data etc inspired and adapted from HTML5 for the Mobile Web: Device Orientation Events
// https://mobiforge.com/design-development/html5-mobile-web-device-orientation-events

// Code also an combination of many helpful tutorials online but no major code taken just used to fix small issues

function compass() {
  // Check for support for DeviceOrientation event and executes if the is support
  if(window.DeviceOrientationEvent) {
    // I think this is a continously executing function that is the core of the system. Based off of the Link at top and don't fully understand it
    window.addEventListener('deviceorientation', function(event) {
      var alpha; // Variable holder for alpha as it has different applications over different devises
      var nArrow = document.getElementById('north');

      // Check for iOS properties
      if(event.webkitCompassHeading) {
        alpha = event.webkitCompassHeading; // Calculates where North is for iPhone.
        //Rotation is reversed for iOS
        nArrow.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
      }

      // Non iOS.
      else {
        alpha = event.alpha; // Sets alpha for Andriod
        webkitAlpha = alpha; // To be used for the chrome

        //Assume Android stock (this is crude, will reccomend change to chrome) and apply offset
        if(!window.chrome) {
          webkitAlpha = alpha - 270;
        }
      }

      //Displaying of the data as a compass
      nArrow.style.Transform = 'rotate(' + alpha + 'deg)';
      nArrow.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
      nArrow.style.MozTransform = 'rotate(-' + alpha + 'deg)'; 

      // TESTING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      document.getElementById('alpha').innerHTML = alpha;
      // TESTING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    }, false); // This could also be what loops the code. I am not fully sure
  }
}