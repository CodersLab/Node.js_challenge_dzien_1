// const two = process.argv[2];
// const three = process.argv[3];
//
// console.log(Number(two) + Number(three))


const arguments = process.argv.slice(2);

const sum = arguments.reduce((prev, curr) =>
Number(prev) + Number(curr));

console.log(sum);




