//Twój kod

const zadanie02 = {
    element1: {
        word: 'Node.js',
        time: 4,
    },
    element2: {
        word: 'się',
        time: 1,
    },
    element3: {
        word: 'Witam',
        time: 0,
    },
    element4: {
        word: 'i korzystam',
        time: 6,
    },
    element5: {
        word: 'w konsoli',
        time: 5,
    },
    element6: {
        word: 'z fukcji czasu!',
        time: 7,
    },
    element7: {
        word: 'z',
        time: 2,
    },
    element8: {
        word: 'programem',
        time: 3,
    },
};

for (let key in zadanie02){
    setTimeout(() => {
        console.log(zadanie02[key].word);
    }, zadanie02[key].time*1000);
}