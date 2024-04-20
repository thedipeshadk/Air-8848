// Function to scroll to the clicked category
function scrollToCategory(event) {
    event.preventDefault(); // Prevent default link behavior
    var targetSelector = this.getAttribute('href'); // Get the href value (e.g., "#beach")
    var targetElement = document.querySelector(targetSelector); // Select the target element
    var offset = window.innerHeight / 3; // Offset to position the element in the middle of the viewport
    var newPosition = targetElement.offsetTop - offset;
    window.scrollTo({
        top: newPosition,
        behavior: "smooth" // Optional: smooth scrolling effect
    });
}

// Attach scrollToCategory function to the click event of each category link
document.addEventListener('DOMContentLoaded', function() {
    var categoryLinks = document.querySelectorAll('.category');
    categoryLinks.forEach(function(link) {
        link.addEventListener('click', scrollToCategory);
    });
});








