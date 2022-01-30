function search(array: number[], x: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) {
      return i;
    }
  }
  return -1;
}
