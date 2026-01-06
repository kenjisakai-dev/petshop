import { scheduleFetchByDay } from "../../services/schedule.js";
import { scheduleShow } from "./show.js";

const selectedDate = document.getElementById("date");

export async function scheduleDays() {
  const date = selectedDate.value;

  const dailySchedules = await scheduleFetchByDay({ date });

  scheduleShow({ dailySchedules });
}
