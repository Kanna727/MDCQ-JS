/*
https://practice.geeksforgeeks.org/problems/-rearrange-array-alternately-1587115620/1

Given a sorted array of positive integers. Your task is to rearrange the array elements alternatively i.e first element should be max value, second should be min value, third should be second max, fourth should be second min and so on.
Note: Modify the original array itself. Do it without using any extra space. You do not have to return anything.

Example 1:

Input:
n = 6
arr[] = {1,2,3,4,5,6}
Output: 6 1 5 2 4 3
Explanation: Max element = 6, min = 1, 
second max = 5, second min = 2, and 
so on... Modified array is : 6 1 5 2 4 3.
Example 2:

Input:
n = 11
arr[]={10,20,30,40,50,60,70,80,90,100,110}
Output:110 10 100 20 90 30 80 40 70 50 60
Explanation: Max element = 110, min = 10, 
second max = 100, second min = 20, and 
so on... Modified array is : 
110 10 100 20 90 30 80 40 70 50 60.
*/

function rearrange(arr, n) {
    let [minIndex, maxIndex, maxValue] = [0, n - 1, arr[n - 1] + 1];
    for (let i = 0; i < n; i++) {
        arr[i] += arr[i % 2 === 0 ? maxIndex-- : minIndex++] % maxValue * maxValue;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(arr[i] / maxValue);
    }

    return arr;
}

function rearrangeWithExtraSpace(arr, n) {
    const auxArray = [];
    let [left, right] = [0, n - 1];

    while (left < right) {
        auxArray.push(arr[right--]);
        auxArray.push(arr[left++]);
    }

    if (left === right) {
        auxArray.push(arr[left]);
    }

    return auxArray;
}

console.log(rearrange([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 14));