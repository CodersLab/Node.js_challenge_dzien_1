//Twój kod

const showNum = process.argv.forEach( (element, index) => {
    if (index >= 2) {
        setTimeout( () => {
            console.log(Number(element));
        }, Number(element)*1000);
    }
});