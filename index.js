function compass() {
  // Check for support for DeviceOrientation event and executes if the is support
  if(window.DeviceOrientationEvent) {
    // I think this is a continously executing function that is the core of the system. Based off of the Link at top and don't fully understand it
    window.addEventListener('deviceorientation', function(event) {
      var alpha; // Variable holder for alpha as it has different applications over different devises
      var nArrow = document.getElementById('north');

      alpha = event.alpha; // Sets alpha for Andriod
      webkitAlpha = alpha; // To be used for the chrome

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