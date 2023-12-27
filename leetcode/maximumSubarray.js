const maxSubArray = function(nums) {
    const results = [];
    let maxSum = 0;

    for (let i = 0; i < nums.length; i++) {
        maxSum = Math.max(maxSum + nums[i], nums[i]);
        results.push(maxSum);
    }

    return Math.max(...results);
};
