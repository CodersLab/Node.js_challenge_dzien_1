<img alt="Logo" src="https://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Node.js challenge

Witaj w challengu Node.js, gdzie codziennie przez 7 dni zdobędziesz konkretną dawkę informacji dotyczących Node.js oraz wykorzystasz ją w praktyce. **Pamiętaj żeby wykonywać dni challengu po kolei - od dnia pierwszego do ostatniego** (dzięki temu Twoja wiedza będzie poukładana i kompletna).

Każdy dzień to jeden temat przewodni. W jego ramach **stworzysz aplikację Node.js, która faktycznie będzie potrafiła coś zrobić** - od razu zobaczysz wynik swojej pracy.

___

> Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

**Do pełnego i satysfakcjonującego doświadczania tego challengu jest potrzebna znajomość JavaScript z elementami ES6.** Jeżeli potrzebujesz informacji z zakresu ES6 to znajdziesz je tutaj: [*tutorial ES6*][es6-tutorial].

## Jak zacząć?

1. Stwórz [*fork*][forking] repozytorium z zadaniami.
2. [*Sklonuj*][ref-clone] repozytorium na swój komputer.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

## Plan challengu

* Pierwszy dzień to wstęp do Twojej przygody z Node.js - dowiesz się w jaki sposób przygotować środowisko oraz jak pisać i testować programy Node.js.
* W kolejnych dniach dowiesz się w jaki sposób za pomocą Node.js wchodzić w interakcję z systemem operacyjnym (np. modyfikować pliki czy dokonywać szyfrowania).
* Druga część challengu jest poświęcona tworzeniu back-endu - dowiesz się jak stworzyć własny serwer.
* Pod koniec doświadczysz roli full-stack developera - stworzysz komunikujący się ze sobą front-end i back-end.  

___

# Dzień 1: Początki Node.js Developera

## Czym jest Node.js

<img alt="Node.js" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" width="250">

Node.js jest środowiskim uruchomieniowym JavaScript poza przeglądarką. Pozwala więc na użycie znanego Ci JS po stronie back-endu, ale także do tworzenia aplikacji systemowych, narzędziowych i innych.

Podczas tych 7 dni poznasz zarówno możliwości integracji z systemem operacyjnym, jak i stworzenia w pełni działającego back-endu. Dogłębne poznanie Node.js pozwala także wykorzystywać go w innych zastosowaniach, np. do pisania aplikacji okienkowych, mobilnych, w chmurze, IoT, czy sztucznych sieciach neuronowych. 

## Przygotowanie środowiska

Jeżeli jesteś programistą front-end to bardzo możliwe, że posiadasz już zainstalowany Node.js! Jest on szeroko używany w takich narzędziach jak WebPack czy Gulp.

Uruchom terminal/linię komend i wpisz następujące polecenie:

```cmd
node -v
```

Jeżeli zobaczysz napis podobny do tego:

```cmd
$ node -v
v6.9.5
```

to Twoje środowisko jest już gotowe do działania z Node.js - możesz pominąć dział _Instalacja Node.js_! Jeżeli widzisz natomiast informację o braku polecenia lub programu, bądź wersja jest poniżej v6 to wykonaj poniższe kroki.

### Instalacja Node.js

Wejdź na stronę [*pobierania Node.js*][download-node], wybierz wersję **LTS** odpowiednią dla Twojego systemu operacyjnego. Postępuj według wskazówek, żeby zainstalować Node.js.

> Jeżeli ciekawi Cię co oznacza wersja LTS - jest to taka wersja oprogramowania, której wsparcie zostało przedłużone (z ang. *long term support*). Nie będzie więc szybko porzucona i jest wspierana przez kilka lat.

## Uruchamianie programu Node.js

Wszystkie ćwiczenia będziesz wykonywać na plikach w folderze `app` tego repozytorium. **Pamiętaj, aby otrzorzyć linię komend/terminal i przejść nim do tego folderu.** Przykładowo, jeżeli to repozytorium sklonowałeś/aś do folderu `/home/ja/Node.js_challenge_dzien_1` to wykonaj komendę:
```cmd
cd /home/ja/Node.js_challenge_dzien_1/app
```

Teraz już możesz uruchomić program Node.js :) Wykonujemy to za pomocą komendy:

```cmd
node nazwa_pliku [ewentualne argumenty]
```

Śmiało, spróbuj to zrobić już teraz! W katalogu `app` znajduje się plik `test.js`, aby go uruchomić wpisz:

```cmd
node ./test.js
```

Powinna się pokazać poniższa informacja:
```cmd
Wygląda na to, że wszystko działa :)
```

> **Pamiętaj, aby linia komend/terminal był otwarty na katalogu `app`!**
>
> Jeżeli ta komenda nie działa u Ciebie to możesz ew. spróbować:
> ```cmd
> nodejs ./test.js
> ```
> Jeżeli nadal nic to nie da to jeszcze raz zainstaluj Node.js jeszcze raz, a następnie zrestatuj komputer.

## Flow aplikacji Node.js

Kiedy uruchamiamy program napisany w Node.js poprzez wskazanie pliku, to jest on traktowany podobnie jak w przeglądarkowym JavaScript-cie. Wykonywane są wszystkie komendy od góry do dołu.

## Podstawowe API Node.js

Nauczymy się teraz kilku podstawowych i standardowych funkcji/metod wbudowanych w Node.js i dostępnych dla nas od razu. To pomoże nam zrozumieć działanie Node oraz wykonać pierwsze operacje.

### Hello, World, czyli jak wypisywać własne komunikaty?

W Node.js możesz korzystać z bardzo podobnego API do wypisania tekstu, jak w przypadku przeglądarki. Jest to przemyślana decyzja twórców Node, żeby front-endowiec mógł łatwo wykorzystać nowe narzędzie.

W związku z tym aby w linii komend/terminali wypiswać dowolną informację możesz skorzystać np. z:

```JS
console.log('Mój tekst');
```

### Funkcje czasu

Możemy także wykorzystać standardowe funkcje czasu takie jak np.:

```JS
setTimeout(() => {
    //Funkcja wykona się po 2s.
}, 2000);
```

czy

```JS
setInterval(() => {
    //Funkcja wykona się co 1s.
}, 1000);
```

Należy zwrócić szczególną uwagę na znaczenie tych funkcji w kontekście Node.js.

Jeżeli nasz program zawiera np. komendę która od razu ma coś zrobić i nic więcej - to od razu po jej wykonaniu Node.js zakończy wykonywane programu.

Jeżeli jednak w naszym kodzie jest `setTimeout`, `setInterval` (lub inne funkcje powodujące uruchomienie czegoś w przyszłości) to Node.js zgodnie z naszą intencję nie zakończy od razu programu.

- W przypadku setTimeout dopiero po wykonaniu odroczonej w czasie funkcji program zakończy się.
- Użycie setInterval spowoduje natomiast, że _taki program w Node.js nigdy sam się nie zakończy w normalnych warunkach_. Aby go zakończyć najprościej będzie użyć `clearInterval` lub ręcznie zakończyć proces (np. skrótem `Ctrl+C`).

Jeżeli korzystasz z WebPacka, czy Gulpa z `watch` to znasz już miejsce gdzie jest to potrzebne. Dzięki temu proces działa cały czas i wykonuje powierzone mu zadania.

Za kilka dni zobacysz, że takie specjalne traktowanie pewnych funkcji przez Node.js jest też bardzo przydatne przy budowaniu back-endu.

### Przykład

Oto przykładowy program Node.js, który wypisuje po jednym znaku "Hello, World", a na końcu przerywa swoje działanie.

```JavaScript
const text = 'Hello, World!';

let counter = 0;
//Program wyświetla po znaku z tekstu...
const intervalId = setInterval(() => {
    console.log(text[counter]);
    counter++;
    
    //...ręcznie musimy mu powiedzieć kiedy należy przerwać wykonywanie - wtedy proces Node.js się zakończy
    if (counter === text.length){
        clearInterval(intervalId);
    }
}, 400);
```

Po uruchomieniu takiego programu zobaczymy:
```cmd
$ node ./test.js
H
e
l
l
o
,

W
o
r
l
d
!

$_
```

## Argumenty

Na samym początku, podczas uruchamiania programu, była informacja o opcjonalnych argumentach. Są to dane wejściowe, które możemy przekazać do naszego programu - są one **jak parametry funkcji**.

Korzystając z różnych narzędzi możesz trafić na sytuację, że przekazujemy do programu Node.js jakiś argument, np.:

```cmd
gulp watch
```

> To polecenie jest tak na prawdę wewnętrznie skrótem np. do:
> ```cmd
> node /home/some/path/bin/gulp.js watch
> ```

Jeżeli będziemy potrafili obsłużyć przekazywane argumenty, to nasz program może stać się przydatnym narzędziem.

### Zmienna globalna `process`

W każdym programie Node.js masz do dyspozycji zmienną globalną `process`, która reprezentuje uruchomienie właśnie Twojego programu. Można z niej odczytać wiele informacji na temat środowiska uruchomieniowego.

### Odczytywanie argumentów

Aby otrzymać listę wszystkich argumentów możemy wykorzystać tablicę `process.argv`. Zawiera ona następujące informacje:

1. Pierwszy argumentem jest pełna ścieżka do procesu interpretera Node.js.
2. Drugi argument to pełna ścieżka do głównego pliku Twojego programu.
3. Drugi i kolejne argumenty mogą być dodatkowymi argumentami - przekazywanymi właśnie podczas uruchamiania programu.

Zobacz poniższy kod:

```JavaScript
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

Jeżeli uruchomisz swój program tak:

```cmd
node ./test.js
```

to zobaczysz przykładowo:

```cmd
0: /home/bin/node
1: /home/js/challenge/test.js
```

Możesz jednak przekazać dodatkowe argumenty, np.:

Jeżeli uruchomisz swój program tak:

```cmd
node ./test.js test 123 Halo halo
```

wtedy zobaczysz np.:

```cmd
0: /home/bin/node
1: /home/js/challenge/test.js
2: test
3: 123
4: Halo
5: halo
```

Jeżeli chcesz przekazać argument, który zawiera w środku spację, to otocz go `"` (cudzysłowem), np.:

```cmd
node ./test.js "Hello, World, dłuższy tekst!" test2
```

da np.:

```cmd
0: /home/bin/node
1: /home/js/challenge/test.js
2: Hello, World, dłuższy tekst!
3: test2
```

# Ćwiczenia

> Ćwiczenia wykonuj w odpowiednich plikach. W folderze `app` są one ponumerowane tak samo jak poniżej - zadaniu `1. Rozgrzewka` odpowiada plik `app/zadanie01.js` itd.
> Aby uruchomić zadanie podaj jego nazwę (pamiętaj, aby linia komend/terminal był otwarty na katalogu `app` tego repozytorium), np.:
> ```cmd
> node ./zadanie01.js
> ```

## 1. Rozgrzewka!

Napisz taki program Node.js, w którym wyświetlisz swoje imię i nazwisko. Następnie po 5 sekundach program powinien jeszcze wypisać `wita się z Node.js!` i zakończyć swoje działanie.

## 2. Odpowiednia kolejność

Napisz program, który wypisze poniższe tekst zgodnie z zadaną kolejnością. Najpierw jest informacja po jakim czasie od uruchomienia programu tekst powinien się pojawić, a następnie jaki to tekst. _Jaki tekst się ułożył :) ?_

- Po 4 sekundach od uruchomienia: `Node.js`
- Po 1 sekundzie od uruchomienia: `się`
- Od razu po uruchomieniu wyświetl: `Witam`
- Po 6 sekundach od uruchomienia: `i korzystam`
- Po 5 sekundach od uruchomienia: `w konsoli`
- Po 7 sekundach od uruchomienia: `z funkcji czasu!`
- Po 2 sekundach od uruchomienia: `z`
- Po 3 sekundach od uruchomienia: `programem`

### 3. Dodawanie

Napisz program Node.js, który może przyjąć dwa argumenty: dwie liczby. **Pamiętaj, że argumenty są zawsze tekstem - zamień je w liczbę np. za pomocą `Number(liczba)` lub `parseInt(liczba)`.**

Następnie wykonaj dodawanie tych dwóch liczb i je wypisz.

Przykładowo uruchomienie:

```cmd
node ./zadanie03.js 2 4
```

Powinno wypisać `6`.

> \* Jeżeli chcesz to możesz spróbować zrobić bardziej zaawansową wersję tego zadania. Twój program umożliwia w niej podanie dowolnej ilości liczb jako argumenty i wyświetla ich sumę. 
> Przykładowo uruchomienie:
> 
> ```cmd
> node ./zadanie03.js 1 2 3 4
> ```
> 
> Powinno wypisać `10`.
>
> Pamiętaj, że dwa pierwsze argumenty tablicy `process.argv` trzeba pominąć!

### Zadanie dnia: sleep sort

<img src="http://grimore.org/_media/fuss/algorithms/sorting/fuss_sort_sleep_sort.gif" alt="Sleep sort" width="250">

Sleep sort to zabawny sposób sortowania liczb. Polega on na tym, że każda liczba jest wypisana dopiero po tylu sekundach ile wynosi jej wartość.

Przykładowo posiadając liczby: `4, 1, 7, 4, 5` wypisujemy `4` po 4 sekundach, `1` po sekundzie, `7` po 7 sekundach itd. Przez to program w tym przypadku wykonuje się 7 sekund a jego wyjście wygląda w ten sposób:

```cmd
1
4
4
5
7
```

Stwórz program Node.js, który może przyjąć dowolną ilość argumentów: liczby. **Pamiętaj, że argumenty są zawsze tekstem - zamień je w liczbę np. za pomocą `Number(liczba)` lub `parseInt(liczba)`.** Pamiętaj, że dwa pierwsze argumenty tablicy `process.argv` trzeba pominąć!


Następnie wypisz w konsoli liczby od najmniejszej do największej korzystając ze sleep sort. Do zadania użyj `setTimeout`, a czas mnóż razy 1000 (żeby `1` odpowiadało jednej sekundzie).

Przykładowo uruchomienie programu w ten sposób:
```cmd
node ./zadanieDnia.js 8 4 10 8 4 6 1 2
```

Potrwa 10 sekund i wyświetli na końcu:

```cmd
1
2
4
4
6
8
8
10
```

**To wszystko na dziś - gratulacje! Do jutra :)**

<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[es6-tutorial]: http://qnimate.com/post-series/ecmascript-6-complete-tutorial/
[download-node]: https://nodejs.org/en/download/