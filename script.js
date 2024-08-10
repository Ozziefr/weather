const tempValueElement = document.getElementById("temp-value");
const arrowElement = document.getElementById("arrow");

// Manually set the temperature value
const currentTemperature = 18; // Example temperature
const predefinedTemperature = 15; // Example predefined temperature for comparison

function updateTemperature() {
  tempValueElement.textContent = `${currentTemperature}°C`;

  if (currentTemperature > predefinedTemperature) {
    arrowElement.innerHTML = "&#9650;"; // Up arrow emoji
  } else if (currentTemperature < predefinedTemperature) {
    arrowElement.innerHTML = "&#9660;"; // Down arrow emoji
  } else {
    arrowElement.innerHTML = ""; // No change in temperature
  }
}

// Initial temperature update
updateTemperature();

// Optionally, if you want to refresh the temperature every hour, you can use this:
setInterval(updateTemperature, 3600000); // 3600000 ms = 1 hour
