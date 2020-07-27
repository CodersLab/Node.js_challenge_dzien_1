//Twój kod

process.argv.forEach(num => {
    setTimeout(() => {
        console.log(num)}, num);
});