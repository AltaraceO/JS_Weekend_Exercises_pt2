function numberOfDuplicates(str) {
  str = str.toLowerCase().split("");
  let countObj = {};

  for (let i = 0; i < str.length; i++) {
    countObj[str[i]] ? countObj[str[i]]++ : (countObj[str[i]] = 1);
  }

  //   console.log(Object.values(countObj));
  return countObj;
}

numberOfDuplicates("AABB11");
console.log(numberOfDuplicates("Indivisibilities"));
