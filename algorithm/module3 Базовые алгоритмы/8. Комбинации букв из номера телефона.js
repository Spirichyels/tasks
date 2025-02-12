/*
Комбинации букв из номера телефона
Дана строка, содержащая цифры от 2 до 9 включительно. Вернуть все возможные комбинации букв, которые могут представлять данное число. Вернуть ответ в любом порядке.

Ниже приведено соответствие цифр и букв (как на кнопках телефона). Обратите внимание, что цифра 1 не соответствует никаким буквам.

  

Пример 1:

**Вход:** digits = "23"
**Выход:** ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Пример 2:

**Вход:** digits = ""
**Выход:** []

Пример 3:

**Вход:** digits = "2"
**Выход:** ["a","b","c"]

 

Ограничения:

0 <= digits.length <= 4
digits[i] является цифрой в диапазоне ['2', '9'].
Алгоритм 1
Данная задача связана с генерацией всех возможных комбинаций букв, которые могут представлять данную цифру.

Для решения этой задачи можно использовать рекурсивный подход. Мы можем рассмотреть каждую цифру в строке digits по очереди и сгенерировать все возможные комбинации для следующих цифр.

Для каждой цифры, имеющей соответствующие ей буквы на кнопках телефона, мы будем рекурсивно вызывать функцию для следующей цифры. Наша базовая ситуация будет заключаться в том, что когда строка digits будет пустой, мы добавим текущую комбинацию в наш список ответов.

Таким образом, на каждой итерации мы будем сгенерировать все возможные комбинации для текущей цифры и вызывать функцию рекурсивно для следующей цифры. После вызова рекурсивной функции для следующей цифры, мы будем объединять текущие буквы с каждой комбинацией, полученной из следующей цифры.

Когда мы достигнем последней цифры, мы добавим полученную комбинацию в список ответов. В конце процесса мы вернем список всех возможных комбинаций букв.

Таким образом, решение данной задачи сводится к рекурсивной генерации всех возможных комбинаций для всех цифр в строке digits.

Описание решения:

Создаем объект keypad, в котором хранится соответствие цифр и букв на клавиатуре телефона.
Создаем пустой массив result, в который будут добавляться все возможные комбинации букв.
Создаем функцию helper, которая будет рекурсивно собирать все комбинации букв. Она принимает два аргумента: digits - оставшиеся цифры, и current - текущая комбинация букв.
В теле функции helper:
Проверяем, если digits.length === 0, значит все цифры были использованы и можно добавить текущую комбинацию current в массив result.
Если current !== '', то добавляем current в массив result.
Рекурсивно вызываем функцию helper со срезом digits.slice(1) (оставшиеся цифры) и новой комбинацией current + letters[i].
Вызываем функцию helper со значением digits.
Возвращаем массив result.

*/
const letterCombinations = (digits) => {
  const keypad = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result = [];

  const helper = (digits, current = "") => {
    if (digits.length === 0) {
      if (current !== "") {
        result.push(current);
      }
      return;
    }

    const letters = keypad[digits[0]];
    for (let i = 0; i < letters.length; i++) {
      helper(digits.slice(1), current + letters[i]);
    }
  };

  helper(digits);

  return result;
};
