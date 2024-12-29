//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

// Function to rotate the line
function rotateLine() {
  angle = (angle + 2) % 360; // Increment the angle by 2 degrees and reset after 360
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

// Set the rotation interval to 20ms
setInterval(rotateLine, 20);
