//Twój kod


process.argv.splice(0,2);

fn = (a, b) => {
    return parseInt(a) > parseInt(b);
}

process.argv.sort(fn);

for ( let i = 0; i< process.argv.length; i++){

let value = parseInt(process.argv[i]);

    setTimeout(() => {
console.log(parseInt(value))

    }, 1000*value);
}