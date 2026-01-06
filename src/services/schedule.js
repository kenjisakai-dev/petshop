import dayjs from "dayjs";

import { apiConfig } from "./api-config.js";

export async function scheduleNew({
  nameTutor,
  nameAnimal,
  phone,
  descriptionService,
  when,
}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        nameTutor,
        nameAnimal,
        phone,
        descriptionService,
        when,
      }),
    });
  } catch (err) {
    console.log(err);
    alert("Não foi possível realizar o agendamento.");
  }
}

export async function scheduleFetchByDay({ date }) {
  try {
    const res = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await res.json();

    const dailySchedules = data
      .filter((schedule) => dayjs(schedule.when).isSame(dayjs(date), "day"))
      .sort((a, b) => dayjs(a.when).hour() - dayjs(b.when).hour());

    return dailySchedules;
  } catch (err) {
    console.log(err);
    alert("Não foi possível obter os agendamentos.");
  }
}

export async function scheduleCancel({ id }) {
  console.log(id);
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.log(err);
    alert("Não foi possível cancelar o agendamento.");
  }
}
