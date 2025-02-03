function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a + b;
}

let result = add(5, 5); // No error
console.log(result);

try {
  let result2 = add("hello", 5); // Throws an error
  console.log(result2);
} catch (e) {
  console.error(e);
}
