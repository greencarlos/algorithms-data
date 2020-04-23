/**
 * This is the original solution we tried to submit to LC
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var original = function (matrix) {
  // [x, y]
  const [n, m] = matrix.dimensions();
  let x = 0;
  let y = 0;

  while (x < n) {
    // moving right
    while (y < m) {
      // binary search down
      const mid = Math.floor((y + m) / 2);
      // console.log(mid, 'mid')
      const num = matrix.get(x, mid);

      if (num === 1) {
        return x;
      } else {
        y = mid + 1;
      }
    }

    y = 0;
    x += 1;
  }
  return -1;
};

/**
 * Solution using the "move from top-right to bottom-left" algorithm
 *
 * Time analysis:
 * - rows: O(rows), each row is visited only once
 * - cols: O(cols), each col is visited only once
 * - total: O(rows + cols)
 *
 * @param {binMat} binaryMatrix
 * @return {number}
 */
const topRightToBottomLeft = (binMat) => {
  // get the dimensions
  const [rows, cols] = binMat.dimensions();

  // start at the top right corner
  let [r, c] = [0, cols - 1];
  let result = -1;

  // traverse the grid from top right to bottom left
  while (c >= 0 && r < rows) {
    // if the current value is 1, update the result and move left
    if (binMat.get(r, c) === 1) result = c--;
    // otherwise we need to move to the next row
    else r += 1;
  }

  return result;
};

/**
 * Solution using binary search
 *
 * Time analysis:
 * - rows: O(rows), each row is visited only once
 * - cols: O(log_2(cols)), binary search over cols happens for each row
 * - total: O(rows * log_2(cols))
 * @param {binMat} binaryMatrix
 * @return {number}
 */
const binSearchColsByRow = (binMat) => {
  // get the dimensions
  const [rows, cols] = binMat.dimensions();

  // start at the top row
  let r = 0;
  let result = -1;

  // traverse the grid from top to bottom
  while (r < rows) {
    // find the left most column with binary search
    let first = 0;
    let last = result === -1 ? cols : result;
    while (first <= last) {
      const mid = Math.floor((first + last) / 2);
      const midVal = binMat.get(r, mid);
      if (midVal === 1) {
        result = mid;
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    }

    r += 1;
  }

  return result;
};

module.exports = {
  original,
  topRightToBottomLeft,
  binSearchColsByRow,
};
