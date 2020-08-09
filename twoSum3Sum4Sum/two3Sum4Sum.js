const restSum = (nums, currentElement, target, start, end) => {
  const result = [];

  while(start < end) {
    const startElement = nums[start];
    const endElement = nums[end];
    const sum = startElement + endElement + currentElement;

    if(sum < target) {
      start++
    } else if (sum > target) {
      end--
    } else {
      result.push([currentElement, startElement, endElement]);
      while(start < end && nums[start] === nums[start + 1]) start++;
      while(start < end && nums[end] === nums[end - 1]) end--;
      start++;
      end--;
    }
  }
  return result;
}

const threeSum = (nums, target, start, n) => {
  const result = [];
  for (let i = start; i < n; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue;
    }

    const current = nums[i];
    const threeSums = restSum(nums, current, target, i + 1, n - 1);
    threeSums.forEach(threeSum => {
      result.push(threeSum);
    });
  }
  return result;
}

const fourSum = (nums, target) => {
  nums.sort((a,b) => a - b);
  const result = [];
  const n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const element = nums[i];
    const fourSums = threeSum(nums, target - element, i + 1, n);
    fourSums.forEach(fourSum => {
      result.push([element, ...fourSum])
    })
  }
}
