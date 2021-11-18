function isogram(str) {
  str = str.toLowerCase();
  let counter = "";

  for (let i = 0; i < str.length; i++) {
    log = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        log++;
      }
      if (log !== 1 && log !== 0) {
        counter++;
      }
    }
  }
  return !counter;
}

console.log(isogram("Dermatoglyphics"));
console.log(isogram("moOse"));
console.log(isogram("aba"));
