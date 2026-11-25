/* ============================================================
   quiz.js — reusable self-grading quiz component
   Usage (HTML side):
   <div class="quiz" data-answer="b">
     <p class="quiz-q">Question…</p>
     <button class="quiz-opt" data-key="a">Option A</button>
     <button class="quiz-opt" data-key="b">Option B</button>
     <button class="quiz-opt" data-key="c">Option C</button>
     <p class="quiz-why" hidden>Explanation of the correct answer…</p>
   </div>
   - data-answer holds the correct key. Clicking an option grades
     immediately and reveals the explanation.
   - For retrieval practice. Can be re-clicked any number of times.
   ============================================================ */
(function () {
  function markQuiz(quiz) {
    var answer = quiz.getAttribute("data-answer");
    var opts = quiz.querySelectorAll(".quiz-opt");
    var why = quiz.querySelector(".quiz-why");
    opts.forEach(function (opt) {
      opt.addEventListener("click", function () {
        var chosen = opt.getAttribute("data-key");
        opts.forEach(function (o) {
          o.classList.remove("is-correct", "is-wrong");
          o.disabled = false;
        });
        if (chosen === answer) {
          opt.classList.add("is-correct");
        } else {
          opt.classList.add("is-wrong");
          opts.forEach(function (o) {
            if (o.getAttribute("data-key") === answer) o.classList.add("is-correct");
          });
        }
        if (why) why.hidden = false;
        quiz.setAttribute("data-done", chosen === answer ? "correct" : "wrong");
      });
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quiz").forEach(markQuiz);
  });
})();
