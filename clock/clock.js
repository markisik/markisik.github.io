window.onload = function() {
    setInterval(function() {
      // Seconds
      var seconds = new Date().getSeconds();
      document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;
  
      // Minutes
      var minutes = new Date().getMinutes();
      document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;
  
      // Hours
      var hours = new Date().getHours();
      document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
    }, 1000);
  }