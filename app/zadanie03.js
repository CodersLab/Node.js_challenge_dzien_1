//Twój kod

const number_1 = process.argv[2];
const number_2 = process.argv[3];

if (typeof number_1 === 'undefined' || typeof number_2 === 'undefined') {
    console.log("Brak wymaganych co najmniej dwóch argumentów!");
    process.exit(1);
}


let sum = 0;

process.argv.forEach((param, index) => {
    if (index > 1) {
        param = parseInt(param);
        if (isNaN(param)) {
            console.log("Wszystkie parametry muszą być liczbami!");
            process.exit(1);
        }
        sum += param;
    }
 });

console.log(sum);