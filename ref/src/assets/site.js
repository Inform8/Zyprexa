(function () {
  "use strict";
  var store = {
    get: function (k) { try { return window.sessionStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.sessionStorage.setItem(k, v); } catch (e) {} }
  };

  /* Mobile navigation */
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("primary-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
      if (!open) { var first = nav.querySelector("a"); if (first) first.focus(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); btn.focus();
      }
    });
  }

  /* HCP confirmation (convenience only, not an access control) */
  var dlg = document.getElementById("hcp-dialog");
  if (dlg && typeof dlg.showModal === "function" && store.get("zyp-hcp") !== "yes") {
    dlg.showModal();
    dlg.addEventListener("cancel", function (e) { e.preventDefault(); });
    var yes = document.getElementById("hcp-yes");
    var no = document.getElementById("hcp-no");
    var msg = document.getElementById("hcp-not");
    yes.addEventListener("click", function () { store.set("zyp-hcp", "yes"); dlg.close(); });
    no.addEventListener("click", function () { msg.hidden = false; msg.focus(); });
  }

  /* Review annotations toggle (hidden by default) */
  var rt = document.querySelector(".review-toggle");
  var root = document.documentElement;
  function setReview(on) {
    root.classList.toggle("show-review", on);
    if (rt) rt.setAttribute("aria-pressed", String(on));
    store.set("zyp-review", on ? "1" : "0");
  }
  if (rt) {
    var n = document.querySelectorAll(".review-note").length;
    rt.textContent = "Review notes on this page: " + n;
    rt.addEventListener("click", function () { setReview(!root.classList.contains("show-review")); });
    if (store.get("zyp-review") === "1") setReview(true);
  }

  /* Wide tables and figures: show a scroll cue only when they overflow */
  function markScroll() {
    document.querySelectorAll(".table-wrap, .fig-scroll").forEach(function (el) {
      el.classList.toggle("is-scrollable", el.scrollWidth > el.clientWidth + 2);
    });
  }
  markScroll();
  window.addEventListener("resize", markScroll);

  /* Study explorer filters */
  var chips = document.querySelectorAll("[data-filter]");
  if (chips.length) {
    var rows = document.querySelectorAll("#study-table tbody tr");
    var countEl = document.getElementById("study-count");
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        var f = c.getAttribute("data-filter");
        chips.forEach(function (o) { o.setAttribute("aria-pressed", String(o === c)); });
        var shown = 0;
        rows.forEach(function (r) {
          var hit = f === "all" || r.getAttribute("data-ind") === f;
          r.hidden = !hit; if (hit) shown++;
        });
        if (countEl) countEl.textContent = shown + " of " + rows.length + " study descriptions shown";
        markScroll();
      });
    });
  }

  /* Receptor map: link graphic nodes with the text descriptions */
  var nodes = document.querySelectorAll(".rmap .node");
  if (nodes.length) {
    var activate = function (id, scroll) {
      nodes.forEach(function (n) { n.classList.toggle("is-active", n.getAttribute("data-target") === id); n.setAttribute("aria-pressed", String(n.getAttribute("data-target") === id)); });
      document.querySelectorAll(".rmap .spoke").forEach(function (s) { s.classList.toggle("is-active", s.getAttribute("data-target") === id); });
      document.querySelectorAll(".receptor-detail article").forEach(function (a) { a.classList.toggle("is-active", a.id === id); });
      if (scroll && window.matchMedia("(max-width: 979px)").matches) {
        var t = document.getElementById(id); if (t) t.scrollIntoView({ block: "start" });
      }
    };
    nodes.forEach(function (n) {
      var id = n.getAttribute("data-target");
      n.addEventListener("click", function () { activate(id, true); });
      n.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(id, true); } });
    });
  }

  /* References: highlight the cited entry and offer a way back */
  function highlightRef() {
    var h = window.location.hash.replace("#", "");
    document.querySelectorAll(".refs > li").forEach(function (li) { li.classList.toggle("is-target", li.id === h); });
    var target = h && document.getElementById(h);
    if (target && target.matches(".refs > li")) {
      var ref = document.referrer;
      if (!target.querySelector(".back-link") && ref && ref.indexOf(window.location.host) !== -1 && ref.split("#")[0] !== window.location.href.split("#")[0]) {
        var back = document.createElement("a");
        back.className = "back-link"; back.href = ref; back.textContent = "Return to the page you were reading";
        target.querySelector("div").appendChild(back);
      }
    }
  }
  if (document.querySelector(".refs")) { highlightRef(); window.addEventListener("hashchange", highlightRef); }
})();
