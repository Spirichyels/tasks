function Map05() {
  //ПРАКТИКА

  const numbersOld = [1, 2, 3, 4, 5];
  const newArrayOld = numbersOld.map((number) => {
    return { age: number };
  });
  //console.log(newArrayOld);

  const words = ["Hello", "Word"];
  const wordsInfo = words.map((word) => {
    return {
      lettersCount: word.length,
    };
  });
  //console.log(wordsInfo);

  const words2 = ["Hello", "Word"];
  const wordsInfo2 = words2.map((word, index) => {
    return {
      orderNumber: index + 1,
      lettersCount: word.length,
    };
  });
  //console.log(wordsInfo2);

  const words3 = ["Hello", "Word"];
  const wordsInfo3 = words3.map((word, index, array) => {
    return {
      orderNumber: index + 1,
      lettersCount: word.length,
    };
  });
  console.log(wordsInfo3);

  //КОНЕЦ ПРАКТИКИ

  //ДОМАШНЕЕ ЗАДАНИЕ
}

export default Map05;
