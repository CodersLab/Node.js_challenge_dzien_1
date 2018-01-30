//Twój kod

process.argv.forEach((number, index) => {
    if (index < 2) {
        return;
    }
    sleepSort(number, index);
});


function sleepSort(number, index) {
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber)) {
        console.log("Parametr " + index + " nie jest liczbą: " + number);
        return;
    }
    setTimeout(() => { console.log(number); }, parsedNumber * 1000);
}