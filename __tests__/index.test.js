const { sum } = require("../src/index.ts");

console.log(sum);

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Add some random numbers Liz.
