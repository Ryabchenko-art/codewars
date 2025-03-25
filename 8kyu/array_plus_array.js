/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/
let arr1 = [100, 200, 300]
let arr2 = [400, 500, 600]
function arrayPlusArray(arr1, arr2) {
    let array = 0;
    for (let i = 0; i < arr1.length; i++) {
        array += arr1[i];
    } for (let i = 0; i < arr2.length; i++) {
        array += arr2[i];
    }
    return array;//something went wrong
}
console.log(arrayPlusArray(arr1, arr2))