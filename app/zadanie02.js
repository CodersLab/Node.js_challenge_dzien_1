/**
 2. Odpowiednia kolejność
 Napisz program, który wypisze poniższe tekst zgodnie z zadaną kolejnością. Najpierw jest informacja po jakim
 czasie od uruchomienia programu tekst powinien się pojawić, a następnie jaki to tekst. Jaki tekst się ułożył :) ?

 Po 4 sekundach od uruchomienia: Node.js
 Po 1 sekundzie od uruchomienia: się
 Od razu po uruchomieniu wyświetl: Witam
 Po 6 sekundach od uruchomienia: i korzystam
 Po 5 sekundach od uruchomienia: w konsoli
 Po 7 sekundach od uruchomienia: z funkcji czasu!
 Po 2 sekundach od uruchomienia: z
 Po 3 sekundach od uruchomienia: programem

 */

setTimeout(function () {
    console.log('Node.js');
},4000);

setTimeout(function () {
    console.log('się');
},1000);

console.log('Witam');

setTimeout(function () {
    console.log('i korzystam');
},6000);

setTimeout(function () {
    console.log('w konsoli');
},5000);

setTimeout(function () {
    console.log('z funkcji czasu!');
},7000);

setTimeout(function () {
    console.log('z');
},2000);

setTimeout(function () {
    console.log('programem');
},3000);

