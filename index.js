function compass() {
 
  // Check for support for DeviceOrientationAbsolute event and executes if the is support
  if(window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientationabsolute', function(event) { // absolute
      var alpha; // Variable holder for alpha as it has different applications over different devises

      alpha = event.alpha; // Sets alpha for Andriod
      webkitAlpha = alpha; // To be used for the chrome

      document.getElementById('alpha').innerHTML = alpha;

    }, false); // This could also be what loops the code. I am not fully sure
  }
  if ('ondeviceorientationabsolute' in window) {
    document.getElementById('check').innerHTML = 'absolute';
  } 
  else if ('ondeviceorientation' in  window) {
    document.getElementById('check').innerHTML = 'not absolute';
  }
  else {
    document.getElementById('check').innerHTML = 'no work';
  }
}