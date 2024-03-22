document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var saleEndDate = new Date('2025-03-09T00:00:00'); // Set the end date and time of the sale
  
    function updateTimer() {
      var now = new Date();
      var timeRemaining = saleEndDate - now;
  
      if (timeRemaining > 0) {
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        // Display the timer in HH:MM:SS format
        countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      } else {
        clearInterval(timerInterval);
        countdownElement.textContent = "Sale has ended!";
      }
    }
  
    // Update the timer every second
    var timerInterval = setInterval(updateTimer, 1000);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown2');
    var saleEndDate = new Date('2025-03-09T00:00:00'); // Set the end date and time of the sale
  
    function updateTimer() {
      var now = new Date();
      var timeRemaining = saleEndDate - now;
  
      if (timeRemaining > 0) {
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        // Display the timer in HH:MM:SS format
        countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      } else {
        clearInterval(timerInterval);
        countdownElement.textContent = "Sale has ended!";
      }
    }
  
    // Update the timer every second
    var timerInterval = setInterval(updateTimer, 1000);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown3');
    var saleEndDate = new Date('2025-03-09T00:00:00'); // Set the end date and time of the sale
  
    function updateTimer() {
      var now = new Date();
      var timeRemaining = saleEndDate - now;
  
      if (timeRemaining > 0) {
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        // Display the timer in HH:MM:SS format
        countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      } else {
        clearInterval(timerInterval);
        countdownElement.textContent = "Sale has ended!";
      }
    }
  
    // Update the timer every second
    var timerInterval = setInterval(updateTimer, 1000);
  });