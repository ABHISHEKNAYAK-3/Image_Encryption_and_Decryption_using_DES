// Selection Sort Implementation in JavaScript

// Selection Sort Algorithm
// Time Complexity: O(n²)
// Space Complexity: O(1)

function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted portion
        let minIdx = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        // Swap the minimum element with the first element of unsorted portion
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    
    return arr;
}

// Example usage
let arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);

let sortedArr = selectionSort(arr);
console.log("Sorted array:", sortedArr);

// Another example with random numbers
let numbers = [5, 3, 8, 4, 2, 7, 1, 6];
console.log("\nOriginal array:", numbers);

let sortedNumbers = selectionSort(numbers);
console.log("Sorted array:", sortedNumbers);
