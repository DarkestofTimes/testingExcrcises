import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./excercise.js";

test("returns Capitalized first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns reversed string", () => {
  expect(reverse("hello")).toBe("olleh");
});

test("returns calculated values", () => {
  expect(calculator.sum(3, 1)).toBe(4);
  expect(calculator.sub(3, 1)).toBe(2);
  expect(calculator.mult(3, 1)).toBe(3);
  expect(calculator.div(3, 1)).toBe(3);
});

test("returns 'encrypted' string ", () => {
  expect(caesarCipher("strinG, to test?", 4)).toBe("wxvmrK, xs xiwx?");
});

test("returns array average, min, max, length", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
