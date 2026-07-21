/* ============================================================
   quiz.js — 再利用可能な自己採点クイズ部品
   使い方（HTML側）:
   <div class="quiz" data-answer="b">
     <p class="quiz-q">問題文…</p>
     <button class="quiz-opt" data-key="a">選択肢A</button>
     <button class="quiz-opt" data-key="b">選択肢B</button>
     <button class="quiz-opt" data-key="c">選択肢C</button>
     <p class="quiz-why" hidden>正解の解説…</p>
   </div>
   ・data-answer に正解キー。押すと即採点し、色と解説を出す。
   ・想起練習（retrieval）用。何度でも押し直せる。
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
