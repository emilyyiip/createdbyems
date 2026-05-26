const shareTrigger = document.getElementById("shareTrigger");
const shareDropdown = document.getElementById("shareDropdown");
const copyLink = document.getElementById("copyLink");

shareTrigger.addEventListener("click", () => {
  shareDropdown.classList.toggle("active");
});

copyLink.addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href);
  copyLink.textContent = "Copied!";
  setTimeout(() => {
    copyLink.textContent = "Copy link";
  }, 1500);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".share-menu")) {
    shareDropdown.classList.remove("active");
  }
});
