//Twój kod

let numOr0 = n => isNaN(n) ? 0 : n

const result = process.argv.reduce((acc, num) => {
    return acc + numOr0(parseInt(num));
},0);

console.log(result);

