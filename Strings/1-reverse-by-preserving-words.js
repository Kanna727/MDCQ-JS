/*
https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1

Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

Example 1:

Input:
S = i.like.this.program.very.much
Output: much.very.program.this.like.i
Explanation: After reversing the whole
string(not individual words), the input
string becomes
much.very.program.this.like.i
Example 2:

Input:
S = pqr.mno
Output: mno.pqr
Explanation: After reversing the whole
string , the input string becomes
mno.pqr
*/

function reverseWords(s) {
    // return s.split('.').reverse().join('.'); JS way
    const arr = [];
    let word = '';

    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            arr.push(word + s[i]);
            break;
        }
        if (s[i] === '.') {
            arr.push(word);
            word = '';
            continue;
        }
        word += s[i];
    }

    let result = '';
    for (let j = arr.length - 1; j >= 0; j--) {
        result += arr[j];
        if (j > 0) {
            result += '.';
        }
    }

    return result;
}

console.log(reverseWords('pqr.mno'));
