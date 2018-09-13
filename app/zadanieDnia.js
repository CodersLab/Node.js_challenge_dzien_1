//Twój kod

const argv = process.argv;

for (let i = 2; i < argv.length; i++){

    setTimeout(()=> {
        console.log(Number(argv[i]));
    }, Number(argv[i]) * 1000);
}