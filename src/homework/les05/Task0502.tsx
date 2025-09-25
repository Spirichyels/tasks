//ЗАДАЧА 1
function Task0502() {
  const numbers = ["Alice", "Bob", "Charlie", "Diana"];
  const newNumbers = numbers.map((element) => {
    return { name: element, length: element.length };
  });
  return newNumbers;
}

export default Task0502;
