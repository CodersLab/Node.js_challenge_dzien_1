/**
 * Sleep sort to zabawny sposób sortowania liczb. Polega on na tym, że każda liczba jest wypisana dopiero po
 tylu sekundach ile wynosi jej wartość.

 Przykładowo posiadając liczby: 4, 1, 7, 4, 5 wypisujemy 4 po 4 sekundach, 1 po sekundzie, 7 po 7 sekundach
 itd. Przez to program w tym przypadku wykonuje się 7 sekund a jego wyjście wygląda w ten sposób:

 1
 4
 4
 5
 7
 Stwórz program Node.js, który może przyjąć dowolną ilość argumentów: liczby. Pamiętaj, że argumenty są
 zawsze tekstem - zamień je w liczbę np. za pomocą Number(liczba) lub parseInt(liczba). Pamiętaj, że dwa
 pierwsze argumenty tablicy process.argv trzeba pominąć!

 Następnie wypisz w konsoli liczby od najmniejszej do największej korzystając ze sleep sort. Do zadania
 użyj setTimeout, a czas mnóż razy 1000 (żeby 1 odpowiadało jednej sekundzie).

 Przykładowo uruchomienie programu w ten sposób:

 node ./zadanieDnia.js 8 4 10 8 4 6 1 2
 Potrwa 10 sekund i wyświetli na końcu:

 1
 2
 4
 4
 6
 8
 8
 10

 */

array = process.argv.slice(2);

array.forEach(function (value) {
    setTimeout(function () {
        console.log(value);
    }, Number(value)*1000)
})







