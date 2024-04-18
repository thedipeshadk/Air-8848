
document.addEventListener("DOMContentLoaded", function () {
    var feedbackForm = document.getElementById("feedback-form");

    feedbackForm.addEventListener("submit", function (event) {
      // Prevent form submission
      event.preventDefault();

      // Redirect to thankyou.html after 1 second
      setTimeout(function () {
        window.location.href = "html/thankfeed.html";
      }, 1000);
    });
  });



  let total = 0;
  const buttons = document.querySelectorAll(".add-btn");
  const resultDiv = document.getElementById("result");

  function addNumber() {
    total += 1;
    resultDiv.innerHTML = `Total: ${total}`;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", addNumber);
  });

