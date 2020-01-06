export const stringPeeler = (aString: string): string => {
  if (aString.length > 2) return aString.slice(1, -1);
  else return undefined;
};

export const vowelCounter = (aString: string): number => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  const letters = aString.split("");
  for (let i = 0; i < letters.length; i++) {
    for (let e = 0; e < vowels.length; e++) {
      if (letters[i] === vowels[e]) {
        count++;
      }
    }
  }
  return count;
};

export const scrabbleCalulator = (word: string): number => {
  let wordScore = 0;
  const scores = [
    1,
    3,
    3,
    2,
    1,
    4,
    2,
    4,
    1,
    8,
    5,
    1,
    3,
    1,
    1,
    3,
    10,
    1,
    1,
    1,
    1,
    4,
    4,
    8,
    4,
    10
  ];
  const letters = word.split("");
  let previousLetter1 = 0;
  let previousLetter2 = 0;
  letters.forEach(letter => {
    let currentLetter = letter.charCodeAt(0) - 65;
    if (currentLetter >= 0) {
      if (currentLetter !== 29) {
        wordScore += scores[letter.charCodeAt(0) - 65];
      } else if (currentLetter === 29) {
        wordScore -= scores[previousLetter1];
      }
    } else if (currentLetter < 0) {
      if (previousLetter1 >= 0) {
        wordScore += scores[previousLetter1];
      } else if (previousLetter1 < 0) {
        wordScore += scores[previousLetter2];
      }
    }
    previousLetter2 = previousLetter1;
    previousLetter1 = currentLetter;
  });
  if (word.slice(-1) === "D") {
    wordScore *= 2;
  } else if (word.slice(-1) === "T") {
    wordScore *= 3;
  }
  return wordScore;
};

export const phoneNumberGenerator = (numbers: number[]): string => {
  if (numbers.length !== 10) {
    throw new Error("Invalid format");
  }
  const s = (start, end) => {
    let str = "";
    for (let i = start; i <= end; i++) {
      str += numbers[i];
    }
    return str;
  };
  return `(${s(0, 2)}) ${s(3, 5)}-${s(6, 9)}`;
};

export const wordSpinner = (aString: string): string => {
  const words = aString.split(" ");
  const newString = [];
  words.forEach(word => {
    if (word.length >= 5) {
      const newWord = word
        .split("")
        .reverse()
        .join("");
      newString.push(newWord);
    } else newString.push(word);
  });
  return newString.join(" ");
};
