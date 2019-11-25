// 1.chunk
// import chunk from "../tools/chunk";

// let array = chunk([1, 2, 3, "zxc", false, 6, 7], 10);
// console.log(array)

// 2.compact
// import compact from "../tools/compact";

// let array = compact([1, 2, 3, "zxc", false, 6, 7, true, 1.1, NaN, undefined, null, 0, ""]);
// console.log(array)


// 3.concat
// import concat from "../tools/concat";

// let array = concat(2, [3], [[[4]]]);
// console.log(array)


// 4.difference
import difference from "../tools/difference";

let array = difference([2, 1], [2, 3]);
console.log(array)