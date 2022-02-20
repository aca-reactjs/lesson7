const arr = [2, 3, 5, 2, 4, 8, 8];

//   for (let i = 0; i <= arr.length; i += 1) {
//     count[arr[i]] = 0;
//   }

//   Object.keys(count).forEach((key) => {
//     arr.forEach((val) => {
//       if (+key === +val) {
//         count[key]++;
//       }
//     });
//   });

//   for (let i = 0; i < arr.length; i += 1) {
//     const el = arr[i];

//     counts[el] = counts[el] ? counts[el] + 1 : 1;
//   }

/*
  arr.forEach((el) => {
    counts[el] = counts[el] ? counts[el] + 1 : 1;
  });

  */

const countFrequencies = (arr) => {
  return arr.reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] + 1 : 1;

    return acc;
  }, {});
};

console.log(countFrequencies(arr));
