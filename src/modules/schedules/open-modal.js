const btnNewSchedule = document.getElementById("new-schedule");
const modalSchedule = document.querySelector(".modal-schedule");
const overlay = document.querySelector(".overlay");

const closeModal = document.querySelector(".close-modal");

btnNewSchedule.addEventListener("click", () => {
  modalSchedule.classList.remove("hidden");
  overlay.classList.remove("hidden");
  btnNewSchedule.classList.add("hidden");

  modalSchedule.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  document.body.style.overflowY = "hidden";
});

closeModal.addEventListener("click", () => {
  modalSchedule.classList.add("hidden");
  overlay.classList.add("hidden");
  btnNewSchedule.classList.remove("hidden");

  document.body.style.overflowY = "auto";
});
