/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Function to close the popup
function closePopup() {
  document.getElementById("construction-overlay").style.display = "none";
}

// Close if user clicks outside the box
window.onclick = function(event) {
  var overlay = document.getElementById("construction-overlay");
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
}