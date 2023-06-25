/*
https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number)
which has the maximum sum and return its sum.

Example 1:

Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.
Example 2:

Input:
N = 4
Arr[] = {-1,-2,-3,-4}
Output:
-1
Explanation:
Max subarray sum is -1 
of element (-1)
*/

// Best explanation for this algo can be found at: https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
function maxSubarraySum(arr, n) {
    let [globalSum, localSum] = [arr[0], 0]; // globalSum should start with arr[0] to handle all -ve elements case

    for (let i = 0; i < n; i++) {
        localSum += arr[i];
        if (globalSum < localSum) {
            globalSum = localSum;
        }

        if (localSum < 0) {
            localSum = 0;
        }
    }

    return globalSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 9));