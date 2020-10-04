// Custom function
function calculateTip() {
  
  // Store data of inputs
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var totalPeople = document.getElementById("totalPeople").value;
  
  // Validation
  if(billAmount === "" || serviceQuality == 0) {
    alert("Please enter some values.");
    return; // this prevents the function from continuing
  }
  
  // Check to see if this input is empty or less than/equal to 1
  if(totalPeople === "" || totalPeople <= 1) {
      totalPeople = 1;
    
      document.getElementById("each").style.display = "none";
  } else {
      document.getElementById("each").style.display = "block";
  }
  
  // Maths
  var total = (billAmount * serviceQuality) / totalPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  
  // Tip Display
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

// Hide tip amount on load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); } 