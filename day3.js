function secondLargest(arr) {
  let sorted = [...new Set(arr)].sort((a, b) => b - a);
  return sorted[1];
}

console.log(secondLargest([10, 5, 10, 3]));