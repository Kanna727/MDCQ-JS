function subarraySum(arr, n, s) {
    let [sum, i, j] = [0, 0, 0];

    while (sum !== s || j < n - 1) {
        sum < s ?
            sum += arr[j++] :
            sum -= arr[i++];
    }

    return sum === s ?
        [i + 1, j] :
        [-1];
}

// console.log(subarraySum([1, 2, 3, 7, 5], 5, 12));
console.log(subarraySum([11, 9, 8, 7, 13, 5, 17], 7, 25));