function toggleAcc(btn) {
  const arrow = btn.querySelector(".acc-arrow");
  const body = btn.nextElementSibling;
  const isOpen = body.classList.contains("open");
  body.classList.toggle("open", !isOpen);
  arrow.classList.toggle("open", !isOpen);
  btn.setAttribute("aria-expanded", String(!isOpen));
}
