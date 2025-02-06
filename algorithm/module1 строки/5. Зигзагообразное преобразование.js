/*
Строка "PAYPALISHIRING" записана в виде зигзага на заданное количество строк, 
как показано ниже: (можете использовать фиксированный шрифт для лучшей читаемости)

P   A   H   N
A P L S I I G
Y   I   R

Затем прочитайте построчно: "PAHNAPLSIIGYIR"
Напишите код, который будет принимать строку и выполнять это преобразование 
для заданного количества строк:
string convert(string s, int numRows);

Пример 1:

**Вход:** s = "PAYPALISHIRING", numRows = 3
**Выход:** "PAHNAPLSIIGYIR"

Пример 2:

**Вход:** s = "PAYPALISHIRING", numRows = 4
**Выход:** "PINALSIGYAHRPI"
**Пояснение:**
P     I    N
A   L S  I G
Y A   H R
P     I

Пример 3:

**Вход:** s = "A", numRows = 1
**Выход:** "A"

Ограничения:

1 <= s.length <= 1000
s состоит из английских букв (в верхнем и нижнем регистрах), ',' и '.'.
1 <= numRows <= 1000 


Алгоритм 1
Зигзаг-преобразование строки
Дана строка s и число numRows, которое обозначает количество строк в зигзаг-преобразовании. 
Наша задача - преобразовать строку s в зигзаг-представление и затем прочитать ее построчно.

Преобразование происходит следующим образом:

Строка s разбивается на несколько групп символов, 
где каждая группа содержит numRows символов. Если длина строки s не кратна numRows, 
то последняя группа может содержать меньше символов.
Каждая группа символов записывается в отдельную строку. 
Строки размещаются в виде зигзага: первая строка идет сверху вниз, 
вторая строка идет по диагонали вверх-вниз, третья строка идет сверху вниз и так далее. 
Пример:
P   A   H   N
A P L S I I G
Y   I   R
Затем строки считываются построчно, чтобы получить конечную преобразованную строку.




*/

function convert(s, numRows) {
  // Если количество строк равно 1 или строка пустая, то возвращаем исходную строку
  if (numRows === 1 || s.length === 0) {
    return s;
  }

  const result = []; // Результирующий массив, в котором будут храниться строки
  const n = s.length; // Длина исходной строки

  const cycleLen = 2 * numRows - 2; // Длина одного цикла
  for (let i = 0; i < numRows; i++) {
    // Итерируемся по каждой строке
    for (let j = 0; j + i < n; j += cycleLen) {
      // Итерируемся по каждому символу в строке
      result.push(s[j + i]); // Добавляем символ в результирующий массив

      // Если текущая строка не является первой или последней и не выходит за пределы строки
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
        result.push(s[j + cycleLen - i]); // Добавляем символ в результирующий массив
      }
    }
  }

  return result.join(""); // Преобразуем массив в строку и возвращаем результат
}

function convert2(s, numRows) {
  // Если количество строк равно 1 или строка пустая, то возвращаем исходную строку
  if (numRows === 1 || s.length === 0) {
    return s;
  }

  const result = []; // Результирующий массив, в котором будут храниться строки
  const n = s.length; // Длина исходной строки

  const cycleLen = 2 * numRows - 2; // Длина одного цикла
  for (let i = 0; i < numRows; i++) {
    // Итерируемся по каждой строке
    for (let j = 0; j + i < n; j += cycleLen) {
      // Итерируемся по каждому символу в строке

      result.push(s[j + i]); // Добавляем символ в результирующий массив

      // Если текущая строка не является первой или последней и не выходит за пределы строки
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
        result.push(s[j + cycleLen - i]); // Добавляем символ в результирующий массив
      }
    }
  }

  //return result.join(""); // Преобразуем массив в строку и возвращаем результат
  return result; // Преобразуем массив в строку и возвращаем результат
}

let s = "PAYPALISHIRING";
let numRows = 3;

let newS = convert(s, numRows);
console.log(newS);
