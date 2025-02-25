/*

Заголовок столбца в Excel по номеру

Получив целое число columnNumber, верните соответствующий заголовок столбца, как он отображается в таблице Excel.

Например:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
Пример 1:

**Входные данные:** columnNumber = 1
**Выходные данные:** "A"
Пример 2:

**Входные данные:** columnNumber = 28
**Выходные данные:** "AB"
Пример 3:

**Входные данные:** columnNumber = 701
**Выходные данные:** "ZY"
Ограничения:

1 <= columnNumber <= 231 - 1
Алгоритм 1
Для решения данной задачи мы можем использовать 
алфавит в качестве системы счисления. 
Каждая буква алфавита будет представлять определенное число. 
Например, буква "A" будет представлять число 1, буква "B" - 2, и так далее.

Сначала мы определяем количество разрядов в искомом столбце, 
находим его значение в десятичной системе счисления и затем 
преобразуем его в соответствующий заголовок столбца.

Для определения количества разрядов мы последовательно делим входное число 
на 26 и увеличиваем счетчик разрядов на 1 до тех пор, пока число не станет 
меньше или равно нуля.

Затем мы начинаем со старшего разряда и находим значение каждого разряда. 
Для этого мы находим остаток от деления числа на 26 и определяем соответствующую 
букву алфавита. Затем мы делим исходное число на 26 и переходим к следующему разряду.

Наконец, мы объединяем найденные буквы в обратном порядке и возвращаем 
полученный заголовок столбца.

Например, для входного числа 28 мы имеем два разряда. 
Первый разряд равен (28 - 1) % 26 = 1, что соответствует букве "B". 
Второй разряд равен (28 - 1) / 26 - 1 = 1, что соответствует букве "A". 
Таким образом, заголовок столбца для числа 28 - "AB".

*/

function convertToTitle(columnNumber) {
  let result = "";
  while (columnNumber > 0) {
    const num = (columnNumber - 1) % 26;
    result = String.fromCharCode(num + 65) + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  return result;
}
