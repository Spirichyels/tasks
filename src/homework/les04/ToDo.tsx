import "../les02/todo.css";

const ToDo = () => {
  const tasks = [
    { id: 1, title: "Купить продукты на неделю", isDone: false },
    { id: 2, title: "Полить цветы", isDone: true },
    { id: 3, title: "Сходить на тренировку", isDone: false },
    { id: 4, title: "Поспать", isDone: false },
    { id: 5, title: "Поесть", isDone: false },
    { id: 6, title: "Сходить нафиг", isDone: false },
    { id: 7, title: "Сек", isDone: true },
  ];

  //   const array = tasks.map((task) => {
  //     return <div>{task.title}</div>;
  //   });

  return (
    <>
      <h1>Список дел</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id} className="task">
              <div>{task.title}</div>
              <input type="checkbox" checked={task.isDone}></input>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDo;
