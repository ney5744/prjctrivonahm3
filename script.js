"use strict";

//завдання 1 - рекурсія

function recursiveOddSumTo(number) {
    if (number <= 0) return 0; 
    if (number % 2 !== 0) {
        return number + recursiveOddSumTo(number - 2);
    } 
    else {
        return recursiveOddSumTo(number - 1);
    }
}

console.log(recursiveOddSumTo(1));  // 1
console.log(recursiveOddSumTo(10)); // 25


//завдання 2 - ітерація

function iterativeOddSumTo(number) {
    let sum = 0; 
    for (let i = 1; i <= number; i += 2) {
        sum += i;
    }
    return sum;
}

console.log(iterativeOddSumTo(1));  // 1
console.log(iterativeOddSumTo(10)); // 25