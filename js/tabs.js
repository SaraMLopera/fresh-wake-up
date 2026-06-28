function switchTab(btn, section) {
  document
    .querySelectorAll(".fwu-nav-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".fwu-section")
    .forEach((s) => s.classList.remove("visible"));
  btn.classList.add("active");
  document.getElementById(section).classList.add("visible");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
