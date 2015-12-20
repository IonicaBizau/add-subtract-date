const addSubtractDate = require("../lib");

var d = new Date(1989, 11, 20);

console.log(addSubtractDate.add(d, 2, "days"));
// => Fri Dec 22 1989 00:00:00 GMT+0200 (EET)

console.log(addSubtractDate.subtract(d, 1, "day"));
// => Thu Dec 21 1989 00:00:00 GMT+0200 (EET)

console.log(addSubtractDate.subtract(d, 1, "year"));
// => Wed Dec 21 1988 00:00:00 GMT+0200 (EET)

console.log(addSubtractDate.add(d, 10, "hours"));
// => Wed Dec 21 1988 10:00:00 GMT+0200 (EET)

console.log(addSubtractDate.add(d, 42, "minutes"));
// => Wed Dec 21 1988 10:42:00 GMT+0200 (EET)

console.log(addSubtractDate.add(d, 7, "seconds"));
// => Wed Dec 21 1988 10:42:07 GMT+0200 (EET)

console.log(addSubtractDate.add(d, 142, "milliseconds"));
// => Wed Dec 21 1988 10:42:07 GMT+0200 (EET)

console.log(addSubtractDate.subtract(d, 1, "week"));
// => Wed Dec 28 1988 10:42:07 GMT+0200 (EET)
