// Theme toggle -- remembers preference where storage is available,
// otherwise just applies for the current visit.
(function () {
  var toggle = document.getElementById("themeToggle");
  var root = document.documentElement;

  function apply(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      toggle.textContent = "Light mode";
      toggle.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      toggle.textContent = "Dark mode";
      toggle.setAttribute("aria-pressed", "false");
    }
  }

  function getSaved() {
    try {
      return localStorage.getItem("resume-card-theme");
    } catch (e) {
      return null;
    }
  }

  function save(theme) {
    try {
      localStorage.setItem("resume-card-theme", theme);
    } catch (e) {
      /* storage unavailable -- theme just won't persist between visits */
    }
  }

  var saved = getSaved();
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    save(next);
  });
})();

// Print / Save as PDF -- uses the browser's native print dialog,
// which on most devices offers a "Save as PDF" destination.
(function () {
  var printBtn = document.getElementById("printBtn");
  printBtn.addEventListener("click", function () {
    window.print();
  });
})();
