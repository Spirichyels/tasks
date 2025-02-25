/* 

Поиск единственного числа в массиве, 
где каждый элемент повторяется дважды


Учитывая непустой массив целых чисел nums,
каждый элемент встречается дважды, кроме одного. 
Найдите это единственное число.

Вы должны реализовать решение с линейной временной 
сложностью и использовать только постоянное дополнительное пространство.

Пример 1:

**Input:** nums = [2,2,1]
**Output:** 1

Пример 2:

**Input:** nums = [4,1,2,1,2]
**Output:** 4

Пример 3:

**Input:** nums = [1]
**Output:** 1

Ограничения:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Каждый элемент в массиве встречается дважды, 
кроме одного элемента, который встречается только один раз.



Алгоритм 1
Для решения этой задачи 
с линейной временной сложностью и использованием 
только постоянного дополнительного пространства, 
можно воспользоваться операцией побитового 
исключающего ИЛИ (^) над всеми элементами массива.

Так как каждый элемент, кроме одного, 
встречается дважды, при применении операции XOR 
ко всем элементам массива, парные элементы будут 
уничтожены, и останется только значение уникального элемента.

Пример:

Дан массив [4,1,2,1,2].

Применим операцию XOR ко всем элементам массива:

4 ^ 1 ^ 2 ^ 1 ^ 2 = 4 ^ (1 ^ 1) ^ (2 ^ 2) = 4 ^ 0 ^ 0 = 4
Таким образом, найденное значение будет равно 4, 
так как 4 - это единственный элемент, который не имеет пары.

Временная сложность этого решения составляет O(n), 
где n - это длина массива, так как операция XOR 
выполняется один раз над всеми элементами массива. 
Дополнительное пространство, используемое этим решением, 
постоянно и не зависит от размера входных данных.

*/

function findSingleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}
