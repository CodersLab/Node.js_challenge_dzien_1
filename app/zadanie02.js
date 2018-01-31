const msgText = {
    4: "Node.js",
    1: "się",
    0: "Witam",
    6: "i korzystam",
    5: "w konsoli",
    7: "z funkcji czasu!",
    2: "z",
    3: "programem"
};
for (let i in msgText) {
    setTimeout( () => {
        console.log(msgText[i]);
    }, i*1000);
}
