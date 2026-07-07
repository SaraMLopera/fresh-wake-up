function openImgLightbox(src) {
  const lightbox = document.getElementById("fwuLightbox");
  const img = document.getElementById("fwuLightboxImg");
  img.src = src;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeImgLightbox(event) {
  // Evita que el click dentro de la imagen cierre el lightbox
  if (event.target.id === "fwuLightboxImg") return;
  const lightbox = document.getElementById("fwuLightbox");
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}
