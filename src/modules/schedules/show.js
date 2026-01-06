import dayjs from "dayjs";

const scheduleMorning = document.querySelector(".list-schedule-morning");
const scheduleAfternoon = document.querySelector(".list-schedule-afternoon");
const scheduleNight = document.querySelector(".list-schedule-night");

export function scheduleShow({ dailySchedules }) {
  try {
    scheduleMorning.innerHTML = "";
    scheduleAfternoon.innerHTML = "";
    scheduleNight.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      item.setAttribute("data-id", schedule.id);

      const scheduleInfo = document.createElement("div");
      scheduleInfo.classList.add("schedule-info");

      const textHour = document.createElement("span");
      textHour.classList.add("text-hour");
      textHour.textContent = dayjs(schedule.when).format("HH:mm");

      const txtAnimalTutor = document.createElement("div");
      txtAnimalTutor.classList.add("txt-animal-tutor");

      const textAnimal = document.createElement("span");
      textAnimal.classList.add("text-animal");
      textAnimal.textContent = schedule.nameAnimal;

      const textTutor = document.createElement("span");
      textTutor.classList.add("text-tutor");
      textTutor.textContent = `/ ${schedule.nameTutor}`;

      const textDescribeService = document.createElement("span");
      textDescribeService.classList.add("text-describe-service");
      textDescribeService.textContent = schedule.descriptionService;

      const textRemove = document.createElement("span");
      textRemove.classList.add("text-remove");
      textRemove.textContent = "Remover agendamento";

      txtAnimalTutor.append(textAnimal, textTutor);
      scheduleInfo.append(textHour, txtAnimalTutor);
      item.append(scheduleInfo, textDescribeService, textRemove);

      const hour = dayjs(schedule.when).get("hour");

      if (hour <= 12) {
        scheduleMorning.append(item);
      } else if (hour <= 18) {
        scheduleAfternoon.append(item);
      } else {
        scheduleNight.append(item);
      }
    });
  } catch (err) {
    console.log(err);
    alert("Não foi possível recarregar os agendamentos.");
  }
}
