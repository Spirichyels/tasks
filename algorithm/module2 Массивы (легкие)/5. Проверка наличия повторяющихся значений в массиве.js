/*

Проверка наличия повторяющихся значений в массиве


Дан массив целых чисел nums. 
Верните true, если в массиве есть хотя 
бы одно повторяющееся значение, и верните false, 
если все элементы различны.

Пример 1:

**Input:** nums = [1,2,3,1]
**Output:** true
Пример 2:

**Input:** nums = [1,2,3,4]
**Output:** false
Пример 3:

**Input:** nums = [1,1,1,3,3,4,3,2,4,2]
**Output:** true
Ограничения:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
Алгоритм 1
Нужно проверить, есть ли в массиве хотя бы 
два одинаковых элемента. Для этого можно создать 
множество Set и проходить по массиву, 
добавляя каждый элемент в множество. 
Если при добавлении элемента в множество возвращается 
false, значит такой элемент уже был добавлен ранее и 
в массиве есть повторяющиеся элементы. 
В этом случае функция должна вернуть true. 
Если после прохода по всем элементам множество не содержит повторяющихся элементов, 
функция должна вернуть false.

*/

function containsDuplicate(nums) {
  const set = new Set(nums); // создаем Set из массива
  return set.size !== nums.length; // сравниваем длину Set с длиной исходного массива
}
