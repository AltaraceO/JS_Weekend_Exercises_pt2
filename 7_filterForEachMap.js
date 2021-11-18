let myRandomArray = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
let newArr = [];

// forEach --->

myRandomArray.forEach(function (item, idx) {
  if (idx % 2 === 0) {
    newArr.push(item.toUpperCase());
  }
  return;
});
console.log(newArr);
console.log(myRandomArray); //the original arr remains unchanged

// Map --->

const mappedRandom = myRandomArray.map(function (item) {
  return item.split("").join("-");
});

console.log(mappedRandom);

// Filter --->

numbers = [1, 2, 3, 4];
const letterE = myRandomArray.filter(
  (word) => word === "the" || word === "The"
);

console.log(letterE);
