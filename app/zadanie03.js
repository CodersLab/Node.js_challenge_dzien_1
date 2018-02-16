//Twój kod



process.argv.splice(0,2);

const fn = (prev, curr) => {
    return parseInt(prev) + parseInt(curr);
}

let	result = process.argv.reduce(fn);
console.log(result);