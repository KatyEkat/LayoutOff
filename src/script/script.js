document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

document
  .querySelector(".center_container_button")
  .addEventListener("click", function () {
    document.querySelector(".popup_area").style.display = "flex";
  });

document
  .querySelector(".popup_close_btn")
  .addEventListener("click", function () {
    document.querySelector(".popup_area").style.display = "none";
  });
