const solutions = Object.entries(require('./solutions'));
const { BinaryMatrix } = require('./binary-matrix');

const cases = [
  [
    [
      [0, 0],
      [1, 1],
    ],
    0,
  ],
  [
    [
      [0, 0],
      [0, 1],
    ],
    1,
  ],
  [
    [
      [0, 0],
      [0, 0],
    ],
    -1,
  ],
  [
    [
      [0, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 1, 1, 1],
    ],
    1,
  ],
  [
    [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
    ],
    0,
  ],
];

solutions.forEach(([name, solution]) => {
  describe(`${name}: returns expected results:`, () => {
    cases.forEach(([arg, expected], c) => {
      const argString = `[${arg.map((row) => `[${row}]`)}]`;
      test(`input: ${argString}, output: ${expected}`, () => {
        expect(solution(new BinaryMatrix(arg))).toEqual(expected);
      });
    });
  });
});
