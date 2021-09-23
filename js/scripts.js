function processWord() {
  const word = document.getElementById("word").value;
  if (word.length === 0) {
    console.log("You didn't write any word. Try again.");
  } else {
    console.log(word);

    //One way, but no te best one

    // let result = (function (word) {
    //   let numberA = 0;
    //   for (const props in word) {
    //     if (word[props] === "a") {
    //       numberA++;
    //     }
    //   }
    //   return numberA;
    // })(word);

    (function (word) {
      numberofA = 0;
      position = word.indexOf("a");
      while (position != -1) {
        numberofA++;
        position = word.indexOf("a", position + 1);
      }
      console.log(numberofA);
    })(word);

    //One way, but not the best one

    //   let pickArticle = (word) => {
    //     const hWordsWithAn = [
    //       "honour",
    //       "herb",
    //       "hour",
    //       "honorable",
    //       "historic",
    //       "hotel",
    //     ];

    //     const vWordsWithA = [
    //       "user",
    //       "university",
    //       "european",
    //       "unit",
    //       "universe",
    //       "uranium",
    //     ];

    // const vowels = ["a", "e", "i", "o", "u"];

    // if (word.indexOf("a") === -1) {
    //   alert("perdiste, no haz acertado ninguna palabra!");
    // } else {
    //   alert("excelente, pero no se vale espiar el codigo fuente! :/");
    // }

    // for (const props in vowels) {
    //   if (vowels[props] === word.charAt(0)) {
    //     return "an";
    //   } else {
    //     return "a";
    //   }
    // }
    //   };

    const pickArticle = (word) => {
      const hWordsWithAn = [
        "honour",
        "herb",
        "hour",
        "honorable",
        "historic",
        "hotel",
      ];

      const vWordsWithA = [
        "user",
        "university",
        "european",
        "unit",
        "universe",
        "uranium",
      ];
      const startsWVowel =
        ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].indexOf(
          word.charAt(0)
        ) !== -1;

      return startsWVowel
        ? vWordsWithA.indexOf(word) !== -1
          ? "a"
          : "an"
        : hWordsWithAn.indexOf(word) !== -1
        ? "an"
        : "a";
    };

    console.log(pickArticle(word));
  }
}
