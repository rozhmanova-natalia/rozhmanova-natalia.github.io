// Сортування бульбашкою: порівнюємо сусідні числа та міняємо їх місцями.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;

        // Після кожного проходу найбільше число опиняється в кінці.
        // Останні i чисел уже стоять на своїх місцях.
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // Якщо замін не було, масив уже відсортований.
        if (swapped === false) {
            break;
        }
    }

    return arr;
}

let numbers = [12, 5, 8, -3, 0, 5, 21, 1];

console.log("Original array:", numbers.join(", "));
bubbleSort(numbers);
console.log("Sorted array:", numbers.join(", "));
