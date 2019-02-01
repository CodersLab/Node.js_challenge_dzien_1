//Twój kod
// Po 4 sekundach od uruchomienia: Node.js
// Po 1 sekundzie od uruchomienia: się
// Od razu po uruchomieniu wyświetl: Witam
// Po 6 sekundach od uruchomienia: i korzystam
// Po 5 sekundach od uruchomienia: w konsoli
// Po 7 sekundach od uruchomienia: z funkcji czasu!
// Po 2 sekundach od uruchomienia: z
// Po 3 sekundach od uruchomienia: programem
setTimeout(() => {
    console.log('Node.js');
}, 4000);
setTimeout(() => {
    console.log('się');
}, 1000);
console.log("Witam");
setTimeout(() => {
    console.log('i korzystam');
}, 6000);
setTimeout(() => {
    console.log('w konsoli');
}, 5000);
setTimeout(() => {
    console.log('z funkcji czasu');
}, 7000);
setTimeout(() => {
    console.log('z');
}, 2000);
setTimeout(() => {
    console.log('programem');
}, 3000);
