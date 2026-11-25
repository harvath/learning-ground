/* ============================================================
   recall.js — free-recall card (no options, self-graded)
   Usage (HTML side):
   <div class="recall">
     <p class="recall-q">Question… (answer out loud or on paper first)</p>
     <button class="recall-show">Reveal answer</button>
     <div class="recall-a" hidden>Model answer…</div>
   </div>
   - No options shown: recall from memory first, then open the
     answer. Builds storage strength via retrieval practice.
   ============================================================ */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".recall").forEach(function (card) {
      var btn = card.querySelector(".recall-show");
      var ans = card.querySelector(".recall-a");
      if (!btn || !ans) return;
      btn.addEventListener("click", function () {
        var open = ans.hasAttribute("hidden") === false;
        if (open) {
          ans.setAttribute("hidden", "");
          btn.textContent = "Reveal answer";
        } else {
          ans.removeAttribute("hidden");
          btn.textContent = "Hide";
        }
      });
    });
  });
})();
