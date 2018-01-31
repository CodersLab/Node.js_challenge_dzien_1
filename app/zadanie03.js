//Twój kod

let sum = 0;

const addition = process.argv.forEach( (element, index) => {
    if (index >= 2) {
        sum += Number(element);
    }
});

console.log(sum);

