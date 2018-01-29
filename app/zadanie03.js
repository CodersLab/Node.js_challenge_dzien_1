//Twój kod

const args = process.argv;
let sum = 0;

console.log("Suma dwoch pierwszych argumentow: " + (parseInt(args[2]) + parseInt(args[3])));

args.forEach((val, index) => {
    if (index !== 0 && index !== 1){
        sum += parseInt(val);
    }
});

console.log("Suma wszystkich argumentow: " + sum);
