import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule.js";
import { scheduleDays } from "../schedules/load.js";

const form = document.querySelector("form");
const nameTutor = document.getElementById("name-tutor");
const nameAnimal = document.getElementById("name-animal");
const phone = document.getElementById("phone");
const descriptionService = document.getElementById("description-service");
const dateSchedule = document.getElementById("date-schedule");
const hourSchedule = document.getElementById("hour-schedule");

const btnNewSchedule = document.getElementById("new-schedule");
const modalSchedule = document.querySelector(".modal-schedule");
const overlay = document.querySelector(".overlay");

const selectedDate = document.getElementById("date");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const [hour] = hourSchedule.value.split(":");

  const schedule = {
    nameTutor: nameTutor.value.trim(),
    nameAnimal: nameAnimal.value.trim(),
    phone: phone.value.trim(),
    descriptionService: descriptionService.value.trim(),
    when: dayjs(dateSchedule.value).add(hour, "hour"),
  };

  await scheduleNew(schedule);

  selectedDate.value = dayjs(dateSchedule.value).format("YYYY-MM-DD");
  scheduleDays();

  form.reset();
  hourSchedule.setAttribute("disabled", "true");

  modalSchedule.classList.add("hidden");
  overlay.classList.add("hidden");
  btnNewSchedule.classList.remove("hidden");

  document.body.style.overflowY = "auto";
});
