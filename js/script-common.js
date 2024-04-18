document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const sideNav = document.querySelector(".side-nav");

    // Function to handle clicks outside the side nav
    function handleClickOutside(event) {
      if (
        !sideNav.contains(event.target) &&
        !toggleButton.contains(event.target)
      ) {
        sideNav.classList.remove("show");
        updateIcon();
      }
    }

    // Function to update icon based on the visibility of sideNav
    function updateIcon() {
      const icon = document.querySelector(".side-nav-li ion-icon");
      icon.setAttribute(
        "name",
        sideNav.classList.contains("show")
          ? "eye-off-outline"
          : "eye-outline"
      );
    }

    // Toggle side nav when toggleButton is clicked
    toggleButton.addEventListener("click", function () {
      sideNav.classList.toggle("show");
      updateIcon();
    });

    // Close side nav when clicking outside of it
    document.addEventListener("click", handleClickOutside);
  });
