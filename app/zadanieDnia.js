//Twój kod
const argvArray = process.argv.slice(2);

argvArray.forEach(num => {
  let value = new Number(num);

  setTimeout(() => {
    console.log(num)    
  }, parseInt(value * 500)); //żeby mniej czekać na rozwiązanie ;)
});