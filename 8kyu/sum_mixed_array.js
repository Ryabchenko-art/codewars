/*
* Given an array of integers as strings and numbers, return the sum of the array values as if
*  all were numbers.

Return your answer as a number.*/

let x = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
function sumMix(x){
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        sum += parseFloat(x[i])
    }
    return sum
}
console.log(sumMix(x))