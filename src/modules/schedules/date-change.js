import dayjs from "dayjs";
import { scheduleDays } from "./load.js";

const selectedDate = document.getElementById("date");

selectedDate.value = dayjs().format("YYYY-MM-DD");

selectedDate.addEventListener("change", () => scheduleDays());
