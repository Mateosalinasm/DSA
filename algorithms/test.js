// const numbers = [12,2,45,6,7,5,4,5,7,5,34,67,54,4,3,345,566,67,876,5,475]

// const sortedNumbers = numbers.sort((a, b) => a - b)

// console.log(sortedNumbers)


// const indexOfSortedArr = (n, target) => {
//     let min = 0
//     let max = n-1


//     for (const el of n) {
//         if (el > target){

//         } else if ( el < target) {

//         } else {
//             return target
//         }
//     }

// }

// indexOfSortedArr([2, 5, 8, 12, 16, 21, 27, 32, 36, 40, 44])




// const betterTwoSum = (numbs, target) => {
//     const hashTable = {}

//     for (let i = 0; i < numbs.length; i++) {
//         const complement = target - numbs[i]

//         if (complement in hashTable) {
//             return [hashTable[complement], i]
//         } 
//         hashTable[numbs[i]] = i
//     }

//     return []
// }

// console.log(betterTwoSum([2,3,5,6,4,2,99,43,2,6,8], 9))


// const summation = (n) => {
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum += i
//         console.log(sum)
//     }
//     return sum
// }

// console.log(summation(10))


// function naturalSum(n) {
//     return (n * (n + 1) / 2)
// }

// console.log(naturalSum())




// arr = [ 'a', 'c', 's', 'h']
// arr1 = [ 'd', 'g', 'u', 's']

// Array 

// const commonItems = (arr1, arr2) => {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 return true
//             }
//         }   
//     }
//     return false
// }

// console.log(commonItems(['a', 'c', 's', 'h'], ['d', 'g', 'u']))


// const efficientCommonItems = (arr1, arr2) => {
//     const set = new Set(arr1)

//     for (let i = 0; i < arr2.length; i++) {
//         if (set.has(arr2[i])) {
//             return true
//         }
//     }
//     return false
// }

// console.log(efficientCommonItems(['a', 'c', 's', 'h'], ['d', 'g', 'u', 'c']))

// array1 = [ 'a', 'c', 's', 'h']
// array2 = [ 'd', 'g', 'u']
// const efficientCommonItems2 = (arr1, arr2) => {
    // loop through first array and create object where properties === items in the array
    // loop through second array and check if item in second array exists on created object.
//     let map = {}
//     for (let i = 0; i < arr1.length; i++) {
//         if (!map[arr1[i]]) {
//             const item = arr1[i]
//             map[item] = true
//         }
//     }
//     console.log(map)

//     for (let j = 0; j < arr2.length; j++) {
//         if (map[arr2[j]]) {
//             return true
//         }
//     } 
//     return false
// }

// console.log(efficientCommonItems2(array1, array2))

// const efficientCommonItems3 = (arr1, arr2) => {
//     const commonItem = arr1.some(item => arr2.includes(item))
//     return commonItem
// }

// console.log(efficientCommonItems3(array1, array2))


// const strings = ['a', 'b', 'c', 'd'];
// strings.splice(1, 1, 'cha')
// console.log(strings)


// class MyArray {
//     constructor() {
//         this.length = 0
//         this.data = {}
//     }
//     get(index) {
//         return this.data[index]
//     }
//     push(item) {
//         this.data[this.length] = item
//         this.length++
//         return this.length
//     }
//     pop() {
//         const lastItem = this.data[this.length - 1]
//         delete this.data[this.length - 1]
//         this.length-- 
//         return lastItem
//     }
// }

// const newArray = new MyArray()
// newArray.push('hi')
// newArray.push('you')
// console.log(newArray)


function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'That\'s not right'
    }

    const backwards = []
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    }

    return backwards.join('')
    // const splitStringAndReverse = str.split('').reverse().join('')
    // console.log(splitStringAndReverse)
}

console.log(reverse("hello"))

const reverse2 = str => str.split('').reverse().join('')