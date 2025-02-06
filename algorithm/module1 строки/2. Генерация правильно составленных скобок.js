function generateParenthesis(n) {
  const result = [];
  let count = 0;

  backtrack("", 0, 0);

  return result;

  function backtrack(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
    //console.log("count: ", count++);
  }
}

// 1. Используется рекурсия (backtrcing) для построения всех
// 	возмонжных комбинаций
//
//  Аргументы
// 	current - текущая строка скобок.
// 	open - колличество открытых скобок
//	close - колличество закрытых скобок
//
//	Когда строка достигает 2*n символов, добавляем ее в result.
//	n- это длина пар скобок, следовательно 2*n это колл-во всех скобок.
//
//
//
//
//
//
//

function generateParenthesis2(n) {
  let result = [];
  let queue = [{ str: "", open: 0, close: 0 }];

  while (queue.length > 0) {
    let { str, open, close } = queue.shift();
    //console.log("str: ", str, "open: ", open, "close: ", close);
    if (str.length === 2 * n) {
      result.push(str);
      //console.log("str: ", str);
      continue;
    }
    if (open < n) {
      queue.push({ str: str + "(", open: open + 1, close: close });
    }
    if (close < open) {
      queue.push({ str: str + ")", open: open, close: close + 1 });
    }
    //console.log("queue: ", queue, "count: ", count++);
  }

  return result;
}

// 1. Используя очередь (queue) для хранения
// промежуточных состояний (str, open, close)
//
// 2. Начинаем с пустой строки и нулевого
// колличества открытых и закртых скобок
//
// 3. В цикле извлекаем элементы из очереди и добавляем '(' или ')', если это
// возможно
//
//	4. Когда строка достигает 2*n символов, добавляем ее в result.
//	n- это длина пар скобок, следовательно 2*n это колл-во всех скобок.
//
// 	я Перебираю все возможные последовтельности, но за счет контроя open и close
//  создаю только правильные скобочные выржаения
//

// function generateParenthesis3(n) {
//   let result = [];
//   let queue = [{ str: "", open: 0, close: 0 }];
//   let { str, open, close } = queue.shift();

//   queue.push({ str: str + "(", open: open + 1, close: close });
//   console.log("str:", str);
//   queue.push({ str: str + "(", open: open + 1, close: close });
//   console.log("str:", { str });

//   queue.push({ str: str + "(", open: open + 1, close: close });

//   queue.push({ str: str + ")", open: open, close: close + 1 });
//   queue.push({ str: str + ")", open: open, close: close + 1 });
//   queue.push({ str: str + ")", open: open, close: close + 1 });

//   console.log(" queue: ", queue);

//   return queue;
// }

//console.log(generateParenthesis2(1)); // ["()"]
//console.log(generateParenthesis2(2)); // [ '(())', '()()' ]
console.log(generateParenthesis(11)); // ["((()))","(()())","(())()","()(())","()()()"]
//console.log(generateParenthesis2(4)); // ["((()))","(()())","(())()","()(())","()()()"]
