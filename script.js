function writeFooter() {
  $('footer').html(`
    <section class="mathProblem" id="mathProblem">
    <p class="mathText">You have chosen a question.  I hope you studied.<br>What is the product of the 2 y-intercepts<br>of the circle with the equation:<br></p>
    <img class="mathImage" src="pictures/math-problem.png" alt="x ^ 2 + (y - 72463.5) ^ 2 = 10721.5 ^ 2"><br>
    <p class="mathText">Answer correctly or perish.</p>
    <form role="form" class="maths">
      <input type="text" class="guess">
      <input type="submit" class="check" value="Check" id="check">
    </form>
    </section>
    <section class="mathAnswer">
    <p class="answerText">You have answered correctly.  Now claim your prize.<br>The phone number of an excellent candidate for your programming job.<br><br>Thanks for bearing with me.<br>Trust me, this version is way cleaner<br>than the quadratic equation one.</p>
    </section>
  `);
}
  
function handleEvents() {
  $('.contact').on('click', '.secret', function(event) {
    event.preventDefault();
    let x = document.getElementById("mathProblem");
    if (window.getComputedStyle(x).display === "none") {
      $(`.mathProblem`).slideToggle(500);
      setTimeout(function (){
        document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
      }, 500); // Wait until the bottom is fully loaded to scroll down
    } else {
      $(`.mathProblem`).slideToggle(500);
    }
  }); // Handles question mark click

  $('.maths').on('click', '.check', function(event) {
    event.preventDefault();
    if ($(`.guess`).val() == "5136008270" || $(`.guess`).val() == "5,136,008,270" || $(`.guess`).val() == "(513)600-8270") {
      $(`.mathAnswer`).slideToggle(500);
      setTimeout(function (){
        document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
        $(`.guess`).val("(513)600-8270");
      }, 500); // Wait until the bottom is fully loaded to scroll down
    } else {
      alert("Incorrect, try again.");
    }
  }); // Handles check button click
}

function initialSetup() {
  writeFooter();
  handleEvents();
  $(`.mathProblem`).hide();
  $(`.mathAnswer`).hide();
}
$(initialSetup);
