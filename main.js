const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerLists = document.getElementById("hamburgerLists");

hamburgerBtn.addEventListener("click", () => {
  hamburgerLists.classList.toggle("absolute");
  hamburgerLists.classList.toggle("hidden");
  hamburgerLists.classList.toggle("my-2");
  hamburgerBtn.classList.toggle("hamburger-active");
});
