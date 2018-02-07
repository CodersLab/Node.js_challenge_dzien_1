function sumProcess() {
    let sum = 0;
    for (i = 2; i < process.argv.length; i++) {
        sum += parseInt(process.argv[i]);
    }
    console.log(sum);
}
sumProcess();