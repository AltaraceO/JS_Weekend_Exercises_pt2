function mumbling(arr) {
  arr = arr.toLowerCase();
  let letterByNumber = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      j === 0
        ? (letterByNumber += arr[i].toUpperCase())
        : (letterByNumber += arr[i]);
    }
    if (i !== arr.length - 1) {
      letterByNumber += "-";
    }
  }

  return letterByNumber;
}

console.log(mumbling("ABCD"));
