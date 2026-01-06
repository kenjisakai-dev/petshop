import { scheduleCancel } from "../../services/schedule.js";
import { scheduleDays } from "./load.js";

const schedule = document.querySelector(".schedule");

schedule.addEventListener("click", async ({ target }) => {
  if (target.classList.contains("text-remove")) {
    const item = target.closest("li");
    const id = item.getAttribute("data-id");

    if (id) {
      const isConfirm = confirm(
        "Tem certeza que deseja cancelar o agendamento?"
      );

      if (isConfirm) {
        await scheduleCancel({ id });
        await scheduleDays();
      }
    }
  }
});
