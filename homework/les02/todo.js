// Структура данных

// Создайте массив объектов tasks с задачами, где каждый объект содержит:

// title (string) - название задачи
// isDone (boolean) - статус выполнения (true/false)

const tasks = [
  { title: "Купить продукты на неделю", isDone: false },
  { title: "Полить цветы", isDone: true },
  { title: "Сходить на тренировку", isDone: false },
  { title: "Поспать", isDone: false },
  { title: "Поесть", isDone: false },
  { title: "Сходить нафиг", isDone: false },
  { title: "Сек", isDone: false },
];

let root = document.getElementById("homework02");
let h1 = document.createElement("h1");
h1.textContent = "Список дел";
root.append(h1);
let ul = document.createElement("ul");
ul.textContent = "Список задач";
root.append(ul);

// for (let task of tasks) {
//   let liTask = document.createElement("li");
//   liTask.classList.add("task");
//   let liTitle = document.createElement("div");
//   liTask.textContent = task.title;
//   let checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   checkBox.checked = task.isDone;
//   liTask.appendChild(liTitle);
//   liTask.appendChild(checkBox);
//   ul.appendChild(liTask);
// }

tasks.forEach((task) => {
  let tackEl = document.createElement("li");
  tackEl.classList.add("task");
  let taskTitleEl = document.createElement("div");
  tackEl.textContent = task.title;
  let taskCheckBoxEl = document.createElement("input");
  taskCheckBoxEl.type = "checkbox";
  taskCheckBoxEl.checked = task.isDone;
  tackEl.appendChild(taskTitleEl);
  tackEl.appendChild(taskCheckBoxEl);
  ul.appendChild(tackEl);
});
