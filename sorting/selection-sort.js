// Сортування вибором: шукаємо найменше число та ставимо його на початок.
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        // Шукаємо найменше число в невідсортованій частині масиву.
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Міняємо поточне число місцями зі знайденим найменшим.
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

let numbers = [12, 5, 8, -3, 0, 5, 21, 1];

console.log("Original array:", numbers.join(", "));
selectionSort(numbers);
console.log("Sorted array:", numbers.join(", "));
