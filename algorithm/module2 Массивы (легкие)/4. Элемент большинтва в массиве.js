/*
Элемент большинства в массиве

Учитывая массив nums размером n, верните элемент большинства.
Элемент большинства - это элемент, который появляется более ⌊n / 2⌋ раз. 
Вы можете предположить, что элемент большинства всегда существует в массиве.

Пример 1:

**Вход:** nums = [3,2,3]
**Выход:** 3
Пример 2:

**Вход:** nums = [2,2,1,1,1,2,2]
**Выход:** 2
Ограничения:

n == длина массива nums
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
Дополнительный вопрос: Можете ли вы решить эту проблему 
за линейное время и использовать O(1) памяти?

Алгоритм 1
Для решения данной задачи нам нужно найти элемент массива,
 который встречается больше половины раз.

Одним из способов решения является 
использование алгоритма "голосования" 
(Boyer-Moore Voting Algorithm).

Алгоритм работает следующим образом:

Инициализируем переменную majority и счетчик count равными 0.
Проходим по каждому элементу массива.
Если счетчик count равен 0, то текущий элемент становится 
majority и увеличиваем count на 1.
Если текущий элемент равен majority, то увеличиваем count на 1.
Если текущий элемент не равен majority, то уменьшаем count на 1.
После прохода по всем элементам, majority будет содержать искомый элемент.
Данный алгоритм основывается на том факте, что элемент большинства
 всегда будет иметь счетчик count больше 0, так как он встречается более половины раз. 
 При этом алгоритм работает за линейное время и использует постоянную дополнительную память.

Таким образом, мы можем решить данную задачу, используя алгоритм "голосования".


*/

/**
 * Функция для нахождения элемента большинства
 * @param {number[]} nums - массив чисел
 * @return {number} - элемент большинства
 */
function majorityElement(nums) {
  let count = 0;
  let candidate;

  for (let i = 0; i < nums.length; i++) {
    // Если счетчик равен 0, то текущий элемент становится кандидатом на элемент большинства
    if (count === 0) {
      candidate = nums[i];
    }

    // Если текущий элемент равен кандидату, то увеличиваем счетчик
    // Иначе уменьшаем счетчик
    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
}
