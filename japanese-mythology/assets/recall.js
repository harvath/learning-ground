/* ============================================================
   recall.js — 自由想起カード（選択肢なし・自己採点）
   使い方（HTML側）:
   <div class="recall">
     <p class="recall-q">問い…（まず声か紙で答えてから開く）</p>
     <button class="recall-show">答えを確かめる</button>
     <div class="recall-a" hidden>模範解答…</div>
   </div>
   ・選択肢を出さず、思い出してから答えを開く＝貯蔵強度を鍛える retrieval 練習。
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
          btn.textContent = "答えを確かめる";
        } else {
          ans.removeAttribute("hidden");
          btn.textContent = "閉じる";
        }
      });
    });
  });
})();
