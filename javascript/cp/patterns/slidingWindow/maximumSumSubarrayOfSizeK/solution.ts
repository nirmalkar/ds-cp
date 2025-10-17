const maximumSumSubarrayOfSizeK = (k: number, arr: number[]): number => {
    let currentSum = 0;
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    maxSum = currentSum;
    for (let i = k; i < arr.length; i++) {
        currentSum = currentSum - arr[i - k] + arr[i];
        if (currentSum > maxSum) maxSum = currentSum;
    }
    return maxSum;
};
const maximumSumSubarrayOfSizeKResult = maximumSumSubarrayOfSizeK(
    3,
    [2, 1, 5, 1, 3, 2]
);
console.log(maximumSumSubarrayOfSizeKResult);

// Complexity
// Time: O(n)
// Space: O(1)
