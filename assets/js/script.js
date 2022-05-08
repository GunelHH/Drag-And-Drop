const input = document.querySelector("input");
function handler() {
  const container = document.querySelectorAll(".task-container");
  const task = document.querySelectorAll(".task");

  task.forEach((element) => {
    element.addEventListener("dragstart", (e) => {
      e.target.classList.add("drag-item");
    });
    element.addEventListener("dragend", (e) => {
      e.target.classList.remove("drag-item");
      switch (e.target.parentElement.id) {
        case "to-do":
          e.target.classList.add("task-todo");
          e.target.classList.remove("task-doing");
          e.target.classList.remove("task-done");
          break;
        case "doing":
          e.target.classList.add("task-doing");
          e.target.classList.remove("task-todo");
          e.target.classList.remove("task-done");
          break;
        case "done":
          e.target.classList.add("task-done");
          e.target.classList.remove("task-doing");
          e.target.classList.remove("task-todo");
          break;

        default:
          break;
      }
    });
  });

  container.forEach((container) => {
    container.addEventListener("dragstart", () => {});
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    container.addEventListener("dragenter", (e) => {
      e.preventDefault();
      const DragItem = document.querySelector(".drag-item");
      container.appendChild(DragItem);
    });
  });
}
handler();

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const cnt = document.querySelector("#to-do");
    const value = e.target.value;
    const tsk = document.createElement("div");
    tsk.classList.add("task-todo");
    tsk.classList.add("tsk");
    tsk.setAttribute("draggable", true);
    tsk.innerHTML = value;
    cnt.appendChild(tsk);
    input.value = "";
  }
  handler();
});
