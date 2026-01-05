const btnNewSchedule = document.getElementById("new-schedule");
const modalSchedule = document.querySelector(".modal-schedule");
const overlay = document.querySelector(".overlay");

btnNewSchedule.addEventListener("click", () => {
  modalSchedule.classList.remove("hidden");
  overlay.classList.remove("hidden");
  btnNewSchedule.classList.add("hidden");
});
