import dayjs from "dayjs";

import { openingHours } from "../../libs/opening-hours.js";
import { scheduleFetchByDay } from "../../services/schedule.js";

const hourSchedule = document.getElementById("hour-schedule");
const dateSchedule = document.getElementById("date-schedule");

dateSchedule.addEventListener("change", async () => {
  hourSchedule.innerHTML = `<option value="">--:--</option>`;

  if (dateSchedule.value === "") {
    hourSchedule.setAttribute("disabled", "true");
    return;
  }

  const dailySchedules = await scheduleFetchByDay({ date: dateSchedule.value });
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  let hasAvailableSchedules = false;

  for (let openingHour of openingHours) {
    const [hour] = openingHour.split(":");
    const scheduleDatetime = dayjs(dateSchedule.value).add(hour, "hour");

    const isScheduleAvailable =
      dayjs().isBefore(scheduleDatetime) &&
      !unavailableHours.includes(openingHour);

    if (!isScheduleAvailable) continue;

    hasAvailableSchedules = true;

    const option = document.createElement("option");
    option.value = openingHour;
    option.textContent = openingHour;

    hourSchedule.append(option);
  }

  if (hasAvailableSchedules) {
    hourSchedule.removeAttribute("disabled");
  } else {
    hourSchedule.setAttribute("disabled", "true");
  }
});
