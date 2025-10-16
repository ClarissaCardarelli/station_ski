const topBtns = document.querySelectorAll(".topBtn");

function handleBtnClick(event) {
  if (event.target.classList.contains("topBtnActive")) return;

  event.target.classList.toggle("topBtnActive");
  const otherBtn = Array.from(topBtns).filter((btn) => btn != event.target);
  otherBtn[0].classList.toggle("topBtnActive");

  document.querySelector("#btnH1").textContent =
    event.target.id == "housingBtn" ? "séjour" : "activité";
}

topBtns.forEach((btn) => {
  btn.addEventListener("click", handleBtnClick);
});
