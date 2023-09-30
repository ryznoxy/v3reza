const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerLists = document.getElementById("hamburgerLists");

hamburgerBtn.addEventListener("click", () => {
  hamburgerLists.classList.toggle("absolute");
  hamburgerLists.classList.toggle("hidden");
  hamburgerLists.classList.toggle("my-2");
  hamburgerBtn.classList.toggle("hamburger-active");
});

// window.addEventListener("click", function (e) {
//   if (e.target != hamburgerBtn && e.target != hamburgerLists) {
//     hamburgerLists.classList.remove("absolute");
//     hamburgerLists.classList.remove("hidden");
//     hamburgerLists.classList.remove("my-2");
//     hamburgerBtn.classList.remove("hamburger-active");
//     hamburgerLists.classList.add("hidden");
//   }
// });

window.onload = function () {
  document.body.classList.add("loaded");
};
