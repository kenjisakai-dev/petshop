import dayjs from "dayjs";

const dateSchedule = document.getElementById("date-schedule");
dateSchedule.min = dayjs().format("YYYY-MM-DD");
