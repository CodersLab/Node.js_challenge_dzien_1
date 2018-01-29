//Twój kod
for (let i = 2; i < process.argv.length; i++) {
    let number = parseInt(process.argv[i]);
    let timeoutId = setTimeout(()=>{
        console.log(number)
    },number*1000);
}
