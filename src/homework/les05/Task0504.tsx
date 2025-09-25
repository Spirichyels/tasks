//ЗАДАЧА 1
function Task0504() {
  const employees = [
    { name: "Alice", salary: 50000, experience: 3 },
    { name: "Bob", salary: 60000, experience: 5 },
    { name: "Charlie", salary: 45000, experience: 2 },
  ];
  const PERCENT = 5;
  const employeesWithTotal = employees.map((employe) => {
    return {
      name: employe.name,
      salary: employe.salary,
      experience: employe.experience,
      totalSalary:
        employe.salary + (employe.salary * employe.experience * PERCENT) / 100,
    };
  });
  return employeesWithTotal;
}

export default Task0504;
