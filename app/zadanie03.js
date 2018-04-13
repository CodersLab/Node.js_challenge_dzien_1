/**
 3. Dodawanie
 * Napisz program Node.js, który może przyjąć dwa argumenty: dwie liczby. Pamiętaj, że argumenty są zawsze
 tekstem - zamień je w liczbę np. za pomocą Number(liczba) lub parseInt(liczba).

 Następnie wykonaj dodawanie tych dwóch liczb i je wypisz.

 Przykładowo uruchomienie:

 node ./zadanie03.js 2 4
 Powinno wypisać 6.

 * Jeżeli chcesz to możesz spróbować zrobić bardziej zaawansową wersję tego zadania. Twój program umożliwia
 w niej podanie dowolnej ilości liczb jako argumenty i wyświetla ich sumę. Przykładowo uruchomienie:

 node ./zadanie03.js 1 2 3 4
 Powinno wypisać 10.

 Pamiętaj, że dwa pierwsze argumenty tablicy process.argv trzeba pominąć!
 */


var sum = 0;
for(var i=2; i<process.argv.length; i++){
    sum += Number(process.argv[i]);
}

console.log(sum);
