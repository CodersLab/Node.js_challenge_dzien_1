//Twój kod
console.log(process.argv.filter(val => !isNaN(val)).reduce(((acc, val) => acc + Number(val)), 0));
