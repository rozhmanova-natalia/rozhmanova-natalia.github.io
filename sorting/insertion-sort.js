// Сортування вставками: вставляємо число на потрібне місце серед попередніх.
function insertionSort(arr) {
    // Починаємо з другого числа: перше саме по собі вже відсортоване.
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Зсуваємо більші числа на одну позицію праворуч.
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Вставляємо збережене число на звільнене місце.
        arr[j + 1] = current;
    }

    return arr;
}

let numbers = [12, 5, 8, -3, 0, 5, 21, 1];

console.log("Original array:", numbers.join(", "));
insertionSort(numbers);
console.log("Sorted array:", numbers.join(", "));
