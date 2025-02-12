/*
Параллельные запросы с ограниченной параллельностью
Создайте функцию, которая принимает массив URL и функцию fetch, и запускает все запросы параллельно, но с ограниченным количеством одновременных запросов. Например, если вы запрашиваете 100 URL, но у вас есть ограничение в 5 одновременных запросов, то ваша функция должна гарантировать, что в любой момент времени 
не будет больше 5 одновременных запросов.

*/

var parallelPromisesWithLimit = async function (promisesArr, parallelLimit) {};

const testURLs = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
  "https://jsonplaceholder.typicode.com/posts/7",
  "https://jsonplaceholder.typicode.com/posts/8",
  "https://jsonplaceholder.typicode.com/posts/9",
  "https://jsonplaceholder.typicode.com/posts/10",
];

function mockFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Response from ${url}`);
    }, 1);
  });
}

async function test(time) {
  // Запуск 5 одновременных запросов
  const results = await parallelPromisesWithLimit(
    testURLs.map((url) => () => mockFetch(url)),
    time
  );

  return results;
}
