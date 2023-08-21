Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
Solve:

const twoSum = (numbs, target) => {
    for (let i = 0; i < numbs.length; i++) {
        for (let j = i + 1; j < numbs.length; j++) {
            if (numbs[i] + numbs[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([3,41,5,67,6,2,5,9], 70))

Time Complexity: O(n^2)

To improve the time complexity we can use a hash table. By using a hash table we can get the result in O(n) time. To use a hash table we must define a variable that will store the elements of the array as keys and their indices as values. Then we're going to iterate over the array and define a variable called complement. The complement is the difference between the target and the current element 'arr[i]'. Then we're going to check if the complement exists as a key in the hash table. If it does exist we will return the hash table with the complement key in brackets, i. If the complement value is found this means that we found a pair of elements whose sum is equal to the target. If the complement is not found in the hash table then we store the current element 'arr[i]' as a key in the hash table and set its value to the current index i. If the loop finishes iterating through the whole array and the complement is never found then we return an empty array.



const betterTwoSum = (numbs, target) => {
    const hashTable = {}
    
    for (let i = 0; i < numbs.length; i++) {
        const complement = target - numbs[i]
        
        if (complement in hashTable) {
            return [hashTable[complement], i]
        } 
        hashTable[numbs[i]] = i
    }

    return []
}

console.log(betterTwoSum([2,3,5,6,4,2,99,43,2,6,8], 4))



Naive Version

function hasPairWithSum(arr, sum) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1 ; j < len; j++){
            if (arr[i] + arr[j] === sum) {
                return true
            }
        }
    }
    return false
}

Better Version

function hasPairWithSum(arr, sum){
    const mySet = new Set()
    const len = arr.length
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true
        }
        mySet.add(sum - arr[i])
    }
    return false
}
