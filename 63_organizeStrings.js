function organizeStrings(a, b) {
  a = [...new Set(a)];
  b = [...new Set(b)];
  let joinedReduced = [...a, ...b];

  return joinedReduced.sort();
}

console.log(organizeStrings("zzzaabbbkkkkkdddd", "lllmmmnnooopppqqq"));
