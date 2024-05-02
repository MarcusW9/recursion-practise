// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
    let copy = arr.slice()

    if (copy.length === 0) {
        return 1
    }
    return copy.shift() * productOfArray(copy) 
}

var sixty = productOfArray([1,2,3,10]) // 60
console.log(`productOfArray: ${sixty}`)

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

function contains(obj, val) {
if (typeof obj !== "object" || obj === null) {
    return obj === val 
}

for (const value of Object.values(obj)) {
    if (contains(value, val)) {
        return true
        }
    return false
    }
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
console.log(contains(nestedObject, 44)); // true

// Given a multi-dimensional integer array, return the total number of integers stored inside this array

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}
	return total + totalIntegers(array);
}

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven)

// Write a function that sums squares of numbers in list that may contain more lists

function sumSquares(arr) {
    if (arr.length === 0) {
        return 0
    }

    let total = 0 
    let first = arr.shift()

    if (Array.isArray(first)) {
        total += sumSquares(first)
    }
    if (Number.isInteger(first)) {
        total += first * first
    }
    return total + sumSquares(arr)
}


l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400


function replicate(times, number){
	if(times <= 0) return [];

	return [number].concat(replicate(times - 1, number));
}

console.log(replicate(3, 5)) // [5, 5, 5]

// The Fibonacci Sequence, is a numerical sequence where each number is the sum of the two numbers before it. 
// Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.

function fibonacci(num) {
    if (num < 2) {
        return num
    }
    return (fibonacci(num - 1) + fibonacci(num - 2))
}

console.log(fibonacci(8))


