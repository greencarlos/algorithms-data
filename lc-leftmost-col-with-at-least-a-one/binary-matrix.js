function BinaryMatrix(mat) {
  this._mat = mat;
  this._calls = 0;
  this.get = function (r, c) {
    this._calls += 1;
    if (this._calls <= 1000) return this._mat[r][c];
    throw new Error('Calls have exceeded 1,000');
  };

  this.dimensions = function () {
    return [this._mat.length, this._mat[0].length];
  };
}

module.exports = {
  BinaryMatrix,
};
