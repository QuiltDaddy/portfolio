function writeMath() {
  $('.math').html(`
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
      <p class="answerText">You have answered correctly.  Now claim your prize:<br>The phone number of an excellent candidate<br>for your programming job search.<br><br>Thanks for bearing with me.<br>Trust me, this version is way cleaner<br>than the quadratic equation one.<br>Also as an additional prize and to prove I'm not a robot<br>here are two of my favorite comics:</p>
      <a href="https://xkcd.com/664/"target="_blank"><img class="extra" src="pictures/XKCD664.png" alt="https://xkcd.com/664/" title="Some engineer out there has solved P=NP and it's locked up in an electric eggbeater calibration routine.  For every 0x5f375a86 we learn about, there are thousands we never see."></a>
      <a href="https://xkcd.com/664/"target="_blank"><figcaption>https://xkcd.com/664/</figcaption></a>
      <a href="https://www.smbc-comics.com/comic/2011-09-08"target="_blank"><img class="extra" src="pictures/SMBC20110908.png" alt="https://www.smbc-comics.com/comic/2011-09-08" title="2011-09-08"></a>
      <a href="https://www.smbc-comics.com/comic/2011-09-08"><figcaption>https://www.smbc-comics.com/comic/2011-09-08</figcaption></a>
    </section>
  `);
  let year = new Date().getFullYear();
  $('.copy').html(`&copy ${year} Patrick Quilty`);
  // Also updates copyright year
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
    if ($(`.guess`).val() == "5136008270" || $(`.guess`).val() == "5,136,008,270" || $(`.guess`).val() == "513 600 8270" || $(`.guess`).val() == "(513)600-8270" || $(`.guess`).val() == "(513) 600-8270") {
      $(`.phone`).show();
      // let e = $(`.phone`);
      let e = document.getElementById("phone");
      e.style.backgroundColor = "#FDFF47";
      $(`.mathAnswer`).slideToggle(500);
      setTimeout(function (){
        document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
        $(`.guess`).val("(513) 600-8270");
      }, 500); // Wait until the bottom is fully loaded to scroll down
      
      setTimeout(function (){
        e.style.backgroundColor = "";
      }, 1500); // Set delay to reverse highlight too
    } else {
      alert("You died.  Please, try again.");
    }
  }); // Handles check button click
}

function initialSetup() {
  writeMath();
  handleEvents();
  $(`.mathProblem`).hide();
  $(`.mathAnswer`).hide();
  $(`.phone`).hide();
}
$(initialSetup);
