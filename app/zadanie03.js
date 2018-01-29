//Twój kod
const [ num1, num2 ] = process.argv.slice(2,4);
console.log(`${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}`);