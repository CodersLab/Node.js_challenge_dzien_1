//Twój kod

const arrText = {
    4: "Node.js",
    1: "się",
    0: "Witam",
    6: "i korzystam",
    5: "w konsoli",
    7: "z funkcji czasu!",
    2: "z",
    3: "programem"
};

for (let i in arrText) {
    setTimeout( () => {
        console.log(arrText[i]);
    }, i*1000);
}