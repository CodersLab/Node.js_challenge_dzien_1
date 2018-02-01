//Twój kod

let [element, index, ...array] = [...process.argv];

array.forEach((element) => {
    setTimeout(() => {console.log(element)},parseInt(element,10)*1000);
});
