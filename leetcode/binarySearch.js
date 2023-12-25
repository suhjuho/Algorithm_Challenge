const search = function (nums, target) {
  let [start, end] = [0, nums.length - 1];
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (nums[mid] < target) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else if (target < nums[mid]) {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    } else {
      return mid;
    }
  }

  return -1;
};
