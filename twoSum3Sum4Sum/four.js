var fourSum = function(nums, target) {
  const r = [];
  nums.sort((a,b) => a - b);
  const isNonIn = _arr => {
    for (let i = 0; i < r.length; i++) {
      if (_arr.join('-') === r[i].join('-')) return false;
    }
    return true
  }

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        const sum = nums[i] + nums[j] + nums[k]
        if (nums.slice(k + 1).includes(target - sum)) {
          const _arr = [nums[i], nums[j], nums[k], target - sum];
          if (isNonIn(_arr)) r.push(_arr);
        }
      }
    }
  }
  return r
}
