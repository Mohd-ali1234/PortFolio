<script>
  // Get the navigation toggle button
  var toggleButton = document.getElementById("navbar-toggle");

  // Get the navigation bar
  var navbar = document.getElementById("navbar");

  // Add an event listener to the toggle button to open/close the navigation bar
  toggleButton.addEventListener("click", function() {
    if (navbar.style.display === "none") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  });
</script>
