/*Дана строка s. Найдите длину самой длинной подстроки без повторяющихся символов. Пример 1:

**Вход:** s = "abcabcbb"
**Выход:** 3
**Объяснение:** Ответ - "abc", длина равна 3.

Пример 2:

**Вход:** s = "bbbbb"
**Выход:** 1
**Объяснение:** Ответ - "b", длина равна 1.

Пример 3:

**Вход:** s = "pwwkew"
**Выход:** 3
**Объяснение:** Ответ - "wke", длина равна 3.
Обратите внимание, что ответ должен быть подстрокой, "pwke" - это подпоследовательность, а не подстрока.

Ограничения:

0 <= s.length <= 5 * 104
s состоит из английских букв, цифр, символов и пробелов. 




Алгоритм 1
Задачу можно решить с использованием алгоритма двух указателей (слайдера).

Мы будем использовать два указателя - left и right. Изначально оба указателя указывают на начало строки s.

Затем мы будем двигать указатель right вправо, пока не встретим повторяющийся символ. При каждом сдвиге будем запоминать текущую длину подстроки без повторяющихся символов и обновлять максимальную длину.

Когда right встречает повторяющийся символ, мы сдвигаем указатель left на следующую позицию после повторяющегося символа и продолжаем движение right.

Мы продолжаем этот процесс до тех пор, пока right не достигнет конца строки s. В конце, найденная максимальная длина будет являться ответом.

Например, рассмотрим строку "abcabcbb":

Изначально left=0 и right=0. Длина текущей подстроки без повторений равна 1. Максимальная длина равна 1.
Перемещаем right на 1. Теперь right=1 и символ на этой позиции - "b". Его нет в текущей подстроке без повторений. Длина текущей подстроки без повторений равна 2. Максимальная длина равна 2.
Перемещаем right на 2. Теперь right=2 и символ на этой позиции - "c". Его нет в текущей подстроке без повторений. Длина текущей подстроки без повторений равна 3. Максимальная длина равна 3.
Перемещаем right на 3. Теперь right=3 и символ на этой позиции - "a". Его нет в текущей подстроке без повторений. Длина текущей подстроки без повторений равна 4. Максимальная длина равна 4.
Перемещаем right на 4. Теперь right=4 и символ на этой позиции - "b". Он уже есть в текущей подстроке без повторений. Поэтому мы сдвигаем left на следующую позицию после первого вхождения символа "b" и переходим к шагу 3.
...
Перемещаем right на 8. Теперь right=8 и символ на этой позиции - "b". Он уже есть в текущей подстроке без повторений. Поэтому мы сдвигаем left на следующую позицию после первого вхождения символа "b" и переходим к шагу 3.
...
Таким образом, максимальная длина подстроки без повторений в данной строке равна 3.

*/

function lengthOfLongestSubstring(s) {
  let maxLength = 0; // переменная для хранения длины самой длинной подстроки
  let substring = ""; // переменная для хранения текущей подстроки без повторяющихся символов

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // проверяем, есть ли текущий символ в текущей подстроке
    if (substring.includes(char)) {
      // находим индекс повторяющегося символа в текущей подстроке
      const index = substring.indexOf(char);

      // обновляем текущую подстроку, отсекая все символы до повторяющегося символа
      substring = substring.slice(index + 1);
    }

    // добавляем текущий символ в текущую подстроку
    substring += char;

    // обновляем длину самой длинной подстроки, если текущая подстрока стала длиннее
    maxLength = Math.max(maxLength, substring.length);
  }

  return maxLength;
}

// Примеры использования:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
