function bubbleSort(array) {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      if (array[j] > array[i]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}
function selectionSort(array) {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    let min = array[i];
    let minIndex = i;
    for (let j = i; j <= arrayLength; j += 1) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }
}
function insertionSort(array) {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    const value = array[i];
    for (let j = i - 1; j >= 0; j -= 1) {
      if (array[j] > value) {
        array[j + 1] = array[j];
        array[j] = value;
      }
    }
  }
}
function quickSort(array, left, right) {
  if (array.length > 1) {
    let pivotIndex = partition(array, left, right);
    console.log(left, right, pivotIndex);
    if (left < pivotIndex - 1) {
      quickSort(array, left, pivotIndex - 1);
    }
    if (pivotIndex < right) {
      quickSort(array, pivotIndex, right);
    }
  }
  return array;
}
function partition(array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (array[left] < pivot) {
      left += 1;
    }
    while (array[right] > pivot) {
      right -= 1;
    }
    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left += 1;
      right -= 1;
    }
  }
  return left;
}

//나누는거임
function merge(left, right) {
  console.log(left, right, "merge");
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else result.push(right[rightIndex++]);
  }
  const leftRemain = left.slice(leftIndex);
  const rightRemain = right.slice(rightIndex);

  return result.concat(leftRemain).concat(rightRemain);
}
function mergeSort(array) {
  if (array.length < 2) {
    return array; //항목이 하나일 때 return
  }

  const midIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex, array.length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

const array = [1, 31, 4, 2, 123, 45, 2, 3, 4, 5, 7];
let sortedArray = mergeSort(array);

console.log(sortedArray);
