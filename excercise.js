export const capitalize = (string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

export const reverse = (string) => {
  return string.split("").reverse().join("");
};

export const calculator = {
  sum: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mult: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

export const caesarCipher = (string, offset) => {
  const alphabet = [];
  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  const characters = string.split("");

  const symbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\/\- ]/;
  const capLetters = /[A-Z]/;

  const newIndex = (char) => {
    const lowerChar = char.toLowerCase();
    return alphabet[
      alphabet.indexOf(lowerChar) + offset > alphabet.length
        ? alphabet.indexOf(lowerChar) + offset - alphabet.length - 1
        : alphabet.indexOf(lowerChar) + offset
    ];
  };

  const encryptedChars = [];
  characters.map((char) => {
    if (symbols.test(char)) {
    } else {
      if (capLetters.test(char)) {
        char = newIndex(char).toUpperCase();
      } else {
        char = newIndex(char);
      }
    }
    encryptedChars.push(char);
  });

  return encryptedChars.join("");
};

export const analyzeArray = (array) => {
  return {
    average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
    min: array.sort((a, b) => a - b)[0],
    max: array.sort((a, b) => b - a)[0],
    length: array.length,
  };
};
