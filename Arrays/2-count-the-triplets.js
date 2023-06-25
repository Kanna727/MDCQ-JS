/*
https://practice.geeksforgeeks.org/problems/count-the-triplets4615/1

Given an array of distinct integers. The task is to count all the triplets
such that sum of two elements equals the third element.

Example 1:

Input:
N = 4
arr[] = {1, 5, 3, 2}
Output: 2
Explanation: There are 2 triplets:
1 + 2 = 3 and 3 + 2 = 5

Example 2:

Input:
N = 3
arr[] = {2, 3, 4}
Output: 0
Explanation: No such triplet exits
*/

function countTriplet(arr, n) {
    let result = 0;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(arr[i], true);
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (map.has(arr[i] + arr[j])) {
                result++;
            }
        }
    }

    return result;
}

console.log(countTriplet([1, 5, 3, 2], 4));