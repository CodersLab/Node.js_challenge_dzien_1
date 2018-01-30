addArgv = tab => tab.reduce((x, y) => Number(x) + Number(y));

console.log(addArgv(process.argv.slice(2)))