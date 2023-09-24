---
layout: layouts/post.njk
title: Kurs Java Script od podstaw
description: "Chcąc nauczyć się nowoczesnego programowania w JavaScript możemy
  mieć niemały problem, tym bardziej jeżeli ograniczamy się do polskojęzycznego
  Internetu. "
author: Przemek
date: 2022-09-14T06:43:59.839Z
tags:
  - strony www
thumbnail: /blog/img/kursjs.jpg
---
Chcąc nauczyć się nowoczesnego programowania w JavaScript możemy mieć niemały problem, tym bardziej jeżeli ograniczamy się do polskojęzycznego Internetu. Istniejące w Internecie, najczęściej przestarzałe kursy JavaScript uczą starego podejścia, według których nie wypada już programować. Platformy e-learningowe są przepełnione kursami JavaScript do którego doklejony jest jakiś Framework i środowisko node.js – taki kurs uczy wszystkiego oprócz JavaScript i przy okazji odstrasza początkujących nawałem narzędzi. W YouTube są sympatyczne filmiki, które jednak marnują cenny czas kursanta, bo wiedzę, którą można zawrzeć w kilku zwięzłych zdaniach tłumaczy się tak aby przychód z prowadzenia kanału był jak największy – czyli rozwleka się stosunkowo mało materiału na wielogodzinne odcinki – które i tak promują jakiś inny płatny kurs…

Oczywiście **najpewniejszym i najpierwotniejszym źródłem wiedzy o języku programowania jest dokumentacja**. Polecam [dokumentację MDN](https://web.archive.org/web/20230129215430/https://developer.mozilla.org/pl/). Dokumentacja to tekst a serwisy dla programistów typu Stack-Overflow ma formę forum a nie wideo-porad, dlatego nauka programowania poprzez czytanie tekstu jest czymś naturalniejszym. Postanowiłem napisać kurs JavaScript w formie artykułu, który po prostu wprowadzi w JavaScript nowe osoby. Jeżeli ktoś już poznał podstawy JS, kurs ten zweryfikuje lub zaktualizuje wykorzystywane na co dzień techniki programowania JavaScript.

Na koniec wstępu przypomnę, że JavaScript to [najpopularniejszy język programowania](https://web.archive.org/web/20230129215430/https://mansfeld.pl/programowanie/najpopularniejsze-jezyki-programowania/) i warto się go uczyć lub chociaż poznać jego podstawy. Wiedza zdobyta w tym kursie pozwoli świadomiej dokonać wyboru dalszej ścieżki edukacji i tworzyć skrypty w czystym JavaScript jeżeli zajmujesz się tworzeniem stron lub aplikacji internetowych. Niewykluczone, że artykuł ten będzie ulegał częstym aktualizacjom – wszystko zależy od jego odbioru.

## Co jest potrzebne by programować w JavaScript?

Kod JavaScript wykonywany jest w przeglądarce. Nie potrzebujemy niczego innego poza zwykłą przeglądarką np. Google Chrome czy Mozilla Firefox. Google Chrome jest najpopularniejszą przeglądarką i wspiera najnowsze rozwiązania ale dla potrzeb tego kursu można skorzystać z dowolnej ulubionej przeglądarki internetowej.

Kod JavaScript możesz pisać w zwykłym notatniku ale polecam notatnik dla programistów, np. Notepad++ lub Visual Studio Code. Są to darmowe programy, które i tak prędzej czy później będziesz wykorzystywać skoro interesujesz się programowaniem. Programy takie kolorują składnię i powodują, że programowanie jest efektywniejsze z wielu innych powodów.

Kod JavaScript to dodatek do stron i aplikacji internetowych dlatego niezbędna jest chociaż minimalna wiedza jak budować proste strony w języku HTML. JavaScript jest dodatkiem do stron internetowych, który umieszczamy w tagach <script> lub w osobnych plikach .js, które dołączamy do strony internetowej za pomocą <script src=”plik.js”></script>. Drugie podejście jest bardziej profesjonalne i zwiększa czytelność kodu ale kod umieszczony w tagach <script></script> bezpośrednio w pliku .html będzie działał dokładnie tak samo.

### Jak debugować kod w JavaScript?

Debugowanie to wyszukiwanie i eliminacja błędów w kodzie. Błędy syntaktyczne w programowaniu powstają tak samo jak w ortografii – przez niewiedzę lub z przeoczenia. Dla początkujących programistów debugerem (czyli tym czymś co pokazuje błędy w kodzie) będzie konsola w przeglądarce internetowej, którą w Google Chrome uruchamiamy klawiszem F12. Praca ze stroną, na której umieszczamy kod JavaScript wygląda wtedy tak:

![](/blog/img/kurs-js-przegladarka.png)

Praca z przeglądarką i konsolą JavaScript

Jeżeli dysponujesz tylko jednym monitorem, całą przeglądarkę warto ścisnąć do połowy ekranu a na drugiej połowie wyświetlić edytor kodu. W ten sposób praca będzie bardziej efektywna.

## Co to jest JavaScript?

JavaScript to kod wykonywany domyślnie w przeglądarce (czyli po stronie klienta). Jest to język wysokiego poziomu (czyli programowanie polega na operowaniu wyższą abstrakcją a nie manipulacją w pamięci i bezpośrednio na procesorze). JavaScript to język interpretowany (program przed uruchomieniem nie musi być kompilowany) a jego specyfikacją jest ECMAScript. JavaScript wspiera *wieloparadygmatowość* – nie wymusza konkretnego stylu programowania i pozwala programować w sposób obiektowy i proceduralny. Ciekawostką jest fakt, że JavaScript nie ma nic wspólnego z językiem Java.

## Kurs JavaScript – podstawy

Poznawanie podstaw jakiegokolwiek języka programowania najlepiej rozpocząć od stworzenia aplikacji „Hello World”. Choć akurat w języku JavaScript jest nieco nieprecyzyjne, bo nie wiadomo czy słynny napis „Witaj Świecie” powinien być wyświetlony na bieżącej stronie lub w konsoli. Zazwyczaj chodzi o konsolę, bo napis na stronie wymaga posługiwaniu się elementami DOM. Stwórzmy na początek plik HTML **kursjs.html** o takiej zawartości:

```
<!DOCTYPE html>
 <html>
     <head>
         <meta charset="utf-8">
     </head>
     <body>
         <h1>Kurs JavaScript</h1>
         <script src="kursjs.js"></script>
     </body>
 </html>
```

Jak już można się domyślić musimy stworzyć w tym samym folderze plik kursjs.js. Plik ze skryptami dodaliśmy na końcu dokumentu HTML dla celów optymalizacyjnych – w dużym skrócie, strona szybciej się załaduje. Plik **kursjs.js** niech zawiera tylko taką instrukcję w jednej linii:

```
console.log("Witaj Świecie");
```

To nasz pierwszy program, który powinien wyświetlić w konsoli napis „Witaj Świecie”. Jak to powinno działać – widać na pierwszym zrzucie powyżej. Możemy przerobić nasz program tak aby wyświetlał napis w okienku pop-up. Instrukcję należy wtedy podmienić na:

```
alert("Witaj Świecie");
```

Efekt końcowy wygląda tak:

![](/blog/img/alert-w-javascript.png "Alert w JavaScript")

Alert wspominam z ciekawości i nie jest zalecanym rozwiązaniem w nowoczesnym JavaScripcie. Instrukcja alert blokuje ładowanie się strony internetowej i ogranicza interakcję z całą stroną do tego jednego przycisku dlatego stosowanie jej jest problematyczne z powodów technicznych i UX. Słynne *Hello World* lepiej zatem napisać na bazie instrukcji console.log();

Zauważ, że **wpisanie tych instrukcji bezpośrednio w konsoli i zatwierdzenie ich klawiszem ENTER** spowoduje też ponowne wyświetlenie się napisu *Witaj Świecie*. Tak działa JavaScript i można tak zrobić praktycznie z dowolnym kodem jaki stworzymy w ramach tego kursu.

Instrukcja console.log() jest bardzo przydatna w debugowaniu. Słowo *console* to obiekt a *log* to metoda tego obiektu. Istnieją jeszcze metody error i warn:

```
console.error("To jest błąd");
```

która pokaże nam napis wyróżniony na czerwono, oraz:

```
console.warn("To jest otrzeżenie");
```

która pokaże nam napis wyróżniony na żółto. Obie instrukcje podadzą także numer linii kodu w której zostały wywołane.

![](/blog/img/kurs-javascript-console-log-warn-error.png)

Instrukcje console.log(), console.error(), console.warn()

Jeżeli chcesz na tym etapie drążyć temat obiektu console odsyłam do dokumentacji: [https://developer.mozilla.org/pl/docs/Web/API/Console](https://web.archive.org/web/20230129215430/https://developer.mozilla.org/pl/docs/Web/API/Console)

We wstępie chciałbym jeszcze pokazać jak można korzystać z komentarzy w JavaScript. Podobnie jak w innych językach programowania podwójny kreska ukośna:

```
// komentarz
```

powoduje, że komentarzem staje się cała linia, a chcąc zamienić dany blok na komentarz użyjemy:

```
/* To jest komentarz
w wielu liniach */
```

Komentarze nie zmieniają niczego w tworzonych skryptach i są czymś w rodzaju notatek. Dodawanie znaków otwierających i zamykających komentarz to przydatny „mechanizm” podczas kursów programowania gdzie będziemy za jego pomocą wyłączać i włączać już napisane linie w edytorze kodu.

## Zmienne w JavaScript

Zmienne w JavaScript można deklarować za pomocą trzech instrukcji: *var*, *let*, *const*. Słowo kluczowe var było wykorzystywane od początku JS ale coraz rzadziej spotyka się słowo var w skryptach JavaScript. Bierze się to stąd, że zmienne deklarowane za pomocą *var* mają globalny zasięg a tego zwykło się unikać w nowoczesnym programowaniu – co nie oznacza, że jest to zabronione. Słowa *let* oraz *const* zostały wprowadzone w późniejszych wersjach ECMAScript i to te instrukcje polecam wykorzystywać w niniejszym kursie.

Deklaracja zmiennej pozwala na użycie danej zmiennej w kodzie.

```
let liczba;
```

Możemy też zainicjować zmienną podając od razu jej wartość:

```
let liczba = 100;
```

Instrukcja *let* pozwala nam na przypisanie nowej wartości. Słowo c*onst* sprawdzi się tam, gdzie nie spodziewamy się wystąpienia takiej potrzeby w przyszłości. Dzięki rozróżnianiu takich przypadków i używaniu *let* i *const* kod jest bezpieczniejszy, odporny na błędy i bardziej czytelny. Zmienne *const* określa się fachowo jako stałe. Oczywiście stosowanie *let* dla wartości, które nie ulegają zmianie nie jest błędem.

```
let liczba = 12;
liczba = 8;
console.log(liczba);
```

Te trzy instrukcje spowodują, że w konsola zwróci 8. Jeżeli w powyższym przykładzie zamiast *let* użyjemy *const*, konsola wyświetli błąd. *Wartości przypisane do stałej const mogą ulegać zmianie ale nie można tego robić za pomocą bezpośredniego przypisania, pokażę to na przykładach w dalszej części kursu.*

## Typy danych w JavaScript

W JavaScript zmienne mogą być różnego typu. Rozróżniamy ciągi znaków (string), liczby (number), zmienne boolowskie (bool), null, undefined oraz Symbol.

JavaScript jest dynamicznie typowany, co oznacza, że nie musimy deklarować typu zmiennej. Podobnie to wygląda w moim kolejnym ulubionym języku programowania PHP. Przykładowo, chcąc zadeklarować zmienną *imię* z wartością *Jan* piszemy po prostu:

```
const imie = 'Jan';
```

Ciągi znaków mogą mieć podwójny bądź pojedynczy cudzysłów. W JavaScript częściej zaleca się aby stosować jednak pojedyncze, ponieważ wówczas łatwiej pracuje się z szablonami HTML. Wiemy już jak deklarować liczby:

```
const wiek = 33;
```

Wartość dziesiętna może być średnią ocen. Zauważ, że separatorem części dziesiętnej jest kropka – tak jak w innych językach programowania:

```
const sredniaOcen = 4.8;
```

Przyszła pora na wartość boolowską czyli prawda / fałsz:

```
const zaliczonePraktyki = true;
```

Zmienna null to po prostu zmienna pusta.

```
const a = null;
```

Typ undefined możemy zadeklarować tak:

```
Typ undefined możemy zadeklarować tak:
```

Dla eksperymentu zróbmy jeszcze coś takiego:

```
let c;
```

Sprawdzenie typu zmiennej możemy dokonać za pomocą *typeof*.

```
console.log(typeof(imie)); // zwróci string
console.log(typeof(wiek)); // zwróci number
console.log(typeof(sredniaOcen)); // zwróci number
console.log(typeof(zaliczonePraktyki)); // zwróci true
console.log(typeof(a)); // zwróci object!
console.log(typeof(b)); // zwróci undefined
console.log(typeof(c)); // zwróci undefined
```

## Operacje i metody na ciągach znaków JavaScript

Operacje na ciągach znaków są bardzo ważne jeżeli chcemy tworzyć przy pomocy JavaScript przydatne skrypty. Najprostszą operacją jest łączenie ciągów, fachowo określana jako konkatenacja.

```
let string1 = 'Kurs';
let string2 = 'JavaScript';
console.log(string1+' '+string2);
```

Konsola zwróci nam 'Kurs JavaScript’.

W nowoczesnym JavaScript (od ES6) możemy użyć szablonów ciągów (ang. *Template String*) za pomocą grawisu czyli tego znaku: ` (ang. *backtick*):

```
console.log(`To jest ${string1} ${string2}`);
```

Dość często wykorzystywaną własnością jest **length**, która po prostu zwraca długość ciągu:

```
var string = "Witaj Świecie";
console.log(string.length);
```

Konsola powinna zwrócić liczbę 13.

Mamy też wygodne metody, które dokonują pewnych zmian w tekście:

* string.toUppercase(); – przekonwertuje wszystkie znaki na wersaliki (pot. duże litery) czyli 'WITAJ ŚWIECIE’.
* string.LowerCase(); – przekonwertuje wszystkie znaki na minuskuły (pot. małe litery) czyli 'witaj świecie’.

Kolejną ważną metodą jest substring. Zwraca ona fragment ciągu przyjmując do tego celu dwa argumenty. Jeden z nich to indeks początkowy a drugi końcowy. Indeks to kolejność znaków w ciągu, przy czym pierwszy znak ma indeks 0.

```
console.log(string.substring(0,5));
```

Metody można łączyć za sprawą płynnego interfejsu (ang. *fluent interface*):

```
console.log(string.substring(0,5).toLowerCase());
```

Ciągi znaków można przekonwertować na tablicę znaków lub poszczególnych jego fragmentów za pomocą metody split(). Metoda split() przyjmuje argument, który pozwala określić co ma być separatorem. Jeżeli będziemy mieli zdanie 'Witaj Świecie’ a separatorem będzie spacja, to obiektami takiej tablicy będą słowa 'witaj’ i 'świecie’. Jeżeli nie podamy żadnego paremetru, to ciąg zostanie „rozłożony” do tablicy na poszczególne litery:

```
let string = "Witaj Świecie";
let stringArray = string.split(' ');
console.log(stringArray);
```

![](/blog/img/kurs-javascript-metoda-split.png)

## Tablice w JavaScript

Tablica czyli array to kolejny typ danych. Można powiedzieć, że tablica to zmienna, która może przechowywać wiele wartości. Tablicę można stworzyć na wiele sposobów. Jeden z nich pokazałem przy okazji metody *split()* w poprzednim rozdziale. Tablicę można stworzyć za pomocą konstruktora:

const liczby = new Array();

Otrzymamy w ten sposób pustą tablicę. Możemy też od razu wprowadzić wartości do takiej tablicy:

```
const liczby = new Array(2,4,8,16,32,64);
console.log(liczby);
```

Możemy też użyć nawiasów kwadratowych. To dużo wygodniejsza inicjalizacji tablicy:

```
const liczby = [2,4,8,16,32,64];
```

JavaScript pozwala na mieszanie typów danych w jednej tablicy a także nie wymaga deklarowania jej wielkości np:

```
let osoba = ['Jan', 'Kowalski', 33];
```

Jak zdobyć teraz dostęp do konkretnych wartości w tej tablicy? Nic prostszego – posługujemy się indeksami:

```
console.log(osoba[0]);
console.log(osoba[1]);
console.log(osoba[2]);
```

### Dodawanie elementów do tablicy w JavaScript

Aby dodać element do tablicy możemy użyć zwykłego przypisania z indeksem:

```
osoba[3] = 'Warszawa';
console.log(osoba);
```

Oczywiście nie jest to efektywne dodawanie elementów na koniec, bo zmusza to do śledzenia przez programistę jaki jest ostatni indeks takiej tablicy lub uważać aby nie nadpisać już zajętych komórek. Dodanie elementu na koniec umożliwia metoda push():

```
osoba.push('00-001');
console.log(osoba);
```

Możemy też dodać element do tablicy na początek „przesuwając” każdy element w prawo aby ten pierwszy nie został nadpisany. Służy do tego metoda unshift():

```
osoba.unshift('Polska');
console.log(osoba);
```

Możemy też usunąć ostatni element tablicy za pomocą metody pop():

```
osoba.pop();
console.log(osoba);
```

Czasem może wystąpić sytuacja, że potrzebujemy zwrócić indeks konkretnej wartości w tablicy – od tego mamy metodę indexOf():

```
console.log(osoba.indexOf('Kowalski'));
```

Powinniśmy w naszym przykładzie otrzymać wartość 2.

Na sam koniec może nam się przydać umiejętność sprawdzenia czy dany obiekt jest tablicą. Służy do tego metoda isArray():

```
console.log(Array.isArray(osoba));
```

## Obiekty w JavaScript

Wiele języków posiada też tablice asocjacyjną typu klucz wartość. W JavaScript tego nie ma a do tego celu używa się prostej składni zarezerwowanej dla obiektów. Posiadamy dwa typy obiektów literały obiektów i konstruktory funkcji. Dostęp i możliwość przypisywania wartości zapewniają dwie formy notacji: notacja kropkowa i notacja z nawiasem klamrowym. Wszystko najlepiej pokazać na przykładzie:

```
let osoba = {
   imie: 'Jan',
   nazwisko: 'Kowalski',
   wiek: 33,
   adres: {
      ulica: 'Zielona 1/2',
      miasto: 'Warszawa',
      kodPocztowy: '00-001'
   },
   hobby: ['muzyka', 'programowanie', 'gry']
}
```

Możemy teraz wszystkie dane:

```
console.log(osoba);
```

![](/blog/img/kurs-javascript-obiekt-osoby.png "Przykładowy obiekt *osoba* w JavaScript")

lub wyświetlić konkretne wartości, np. nazwisko, kod pocztowy i hobby wymienione na pierwszym miejscu za pomocą notacji kropkowej:

```
console.log(osoba.nazwisko);
console.log(osoba.adres.kodPocztowy);
console.log(osoba.hobby[0]);
```

W ES6 wprowadzono łatwą możliwość tworzenia zmiennych za pomocą **przypisania destrukturyzującego**:

```
let {imie, nazwisko} = osoba;
console.log(imie, nazwisko);
```

a nawet:

```
let {imie, nazwisko, adres:{miasto}} = osoba;
console.log(imie, nazwisko, miasto);
```

### Tablice obiektów

Możemy mieć także tablicę obiektów. Przejdźmy od razu do przykładu:

```
osoby = [
   {
      id: 1,
      imie: 'Jan',
      nazwisko: 'Kowalski',
   },
   {
      id: 2,
      imie: 'Zuzanna',
      nazwisko: 'Nowak',
   },
   {
      id: 3,
      imie: 'Aleksander',
      nazwisko: 'Wiśniewski',
   },
];
```

W tym przypadku też możemy łatwo uzyskać dostęp do własności. Chcąc otrzymać wartość 'Zuzanna’ wybierzemy indeks 1 i nazwę tego pola:

```
console.log(osoby[1].imie);
```

Tablice obiektów bardzo przypominają format [JSON](https://web.archive.org/web/20230129215430/https://mansfeld.pl/programowanie/json-co-to-jest-czy-warto-uzywac/), wystarczyłoby dodać podwójny cudzysłów do nazw kluczy i wartości tam gdzie byłoby to konieczne. Aby otrzymać „prawdziwy” format JSON wystarczy dodać taką instrukcję:

```
let osobyJSON = JSON.stringify(osoby);
console.log(osobyJSON);
```

![](/blog/img/kurs-javascript-osoby-json.png "Zawartość zmiennej osobyJSON")

## Pętle JavaScript

Pętla to konstrukcja w programowaniu, która pozwala na cykliczne wykonywaniu instrukcji określoną ilość razy. Pojedynczy cykl nazywamy iteracją. Najprostszą i często wykorzystywaną pętlą jest **pętla for**:

```
for(let i = 0; i<5; i++){
   console.log(i);
}
```

Po słowie kluczowym *for*, inicjalizujemy zmienną *i*, która jest licznikiem, następnie podajemy wyrażenie logiczne, którego wartość true pozwala na kontynuowanie pętli. Ostatnie wyrażenie i++ to inkrementacja czyli zwiększenie wartości zmiennej i o 1.

Kiedy licznik i wzrośnie do wartości 5, zakończy on działanie pętli i w tym wypadku konsola zwróci: 0,1,2,3,4

Kolejnym rodzajem pętli jest pętla *while*. **Pętla while** może działać bardzo podobnie jak pętla *for*, ma jednak prostszą składnię:

```
let i = 0;
while(i<5){
   console.log(i);
   i++;
}
```

Poznane pętle mogą być przydatne po iterowaniu po tablicy obiektów z poprzedniego rozdziału. Długość tablicy możemy uzyskać za pomocą właściwości length. Zmodyfikujmy zatem pętlę for aby wyświetlić w konsoli imiona i nazwiska osób z obiektu *osoby*:

```
for(let i = 0; i<osoby.length; i++){
   console.log(osoby[i].imie+' '+osoby[i].nazwisko);
}
```

Takie posługiwanie się pętlą for jest OK ale są bardziej eleganckie metody na iterowaniu po tablicach. Okazuje się całe wyrażenie w nawiasie można znacznie skrócić za pomocą słowa kluczowego **of** i pozbyć się liczników:

```
for(let osoba of osoby){
   console.log(osoba.imie+' '+osoba.nazwisko);
}
```

Działa to tak, jakbyśmy do zmiennej osoba przypisywali w każdej iteracji wartość: osoby\[i]. Podobny efekt można uzyskać za pomocą **pętli forEach**, która wykonuje funkcję, która jest wykonywana przy każdej iteracji:

```
osoby.forEach(function(osoba){
   console.log(osoba.imie+' '+osoba.nazwisko);
});
```

Pętla map tworzy nową tablicę na podstawie tego co zwraca pętla. Najlepiej pokazać to na przykładzie:

```
const osobyNazwy = osoby.map(function(osoba){
   return osoba.imie+' '+osoba.nazwisko;
});
console.log(osobyNazwy);
```

Istnieje jeszcze pętla filter, która jak sama nazwa wskazuje, odfiltrowuje tablicę za pomocą warunku stawianego po słowie kluczowym return:

```
const osobyNowak = osoby.filter(function(osoba){
   return osoba.nazwisko === 'Nowak';
});
console.log(osobyNowak);
```

Metody forEach, map jak i filter są mogą być uważane za przykład cukru składniowego, bo dość łatwo można uzyskać ten sam efekt za pomocą standardowych pętli, jednak zajęło by to zdecydowanie więcej linii kodu.

## Instrukcje warunkowe JavaScript

Instrukcje warunkowe to bloki kodu, które pozwalają wykonać instrukcje w sytuacji, kiedy został spełniony określony warunek.

### Instrukcja if w JavaScript

Tym warunkiem może być umieszczone w nawiasie wyrażenie logiczne tuż po słowie kluczowym *if*. Jeżeli wartość tego wyrażenia logicznego ma wartość **true**, instrukcje lub blok kodu zostaje wykonany. Jeżeli wartość to **false**, blok kodu jest pomijany i ewnetualnie wykonywany jest blok znajdujący się po słowie kluczowym *else*:

```
let liczba = 3;
if (liczba == 3) {
   console.log('Liczba jest równa 3');
} else {
   console.log('Liczba nie jest równa 3');
}
```

Oczywiście dwa znaki równości to nie jedyne operatory porównania. **Operatory porównania** pozwalają na tworzenie wyrażeń logicznych mających na celu porównać dwie wartości.

* **a == b** zwraca prawdę jeżeli a i b przechowują tę samą wartość
* **a === b** zwraca prawdę jeżeli a i b przechowują tę samą wartość i są tego samego typu.
* **a != b** zwraca prawdę, jeżeli wartości nie są równe
* **a !== b** zwraca prawdę jeżeli a i b przechowują różną wartość lub są różnego typu.
* **a < b** zwraca prawdę jeżeli a jest mniejsze od b
* **a > b** zwraca prawdę jeżeli a jest większe od b
* **a <= b** zwraca prawdę jeżeli a jest mniejsze lub równe b
* **a >= b** zwraca prawdę jeżeli a jest większe lub równe b

Zwróć uwagę, że w dwóch ostatnich przykładach najpierw mamy „dzióbek”.

Istnieją też **operatory logiczne** AND, OR, XOR i NOT:

* **a && b** to odpowiednik logicznego *a i b* – całe zdanie zwraca prawdę jeżeli a i b zwracają prawdę,
* **a || b** to odpowiednik logicznego *a lub b* – całe zdanie zwraca prawdę jeżeli a lub b zwraca prawdę,
* **!a** to odpowiednik logicznego *nie a* – zwraca prawdę jeżeli a zwraca fałsz.
* **a ^ b** to odpowiednik logicznego *xor* – zwraca prawdę jeżeli dokładnie tylko jedno z wyrażeń (a lub b) zwraca prawdę a drugie wyrażenie zwraca fałsz.

Istnieje też skrócona wersja instrukcji *if*, którą określa się jako operację trójskładnikową lub wyrażeniem warunkowym (ang. ternary operator). Powyższy przykład można przekształcić w taki sposób:

```
let liczba = 3;
console.log(liczba == 3 ? 'Liczba jest równa 3' : 'Liczba nie jest równa 3');
```

Sprawdźmy jak możemy wykorzystać ternary operator w praktyce. Załóżmy że do zmiennej deliveryInfo, chcemy przypisać tekst, który informuje o o brakującej kwocie do darmowej wysyłki lub o tym, że już obowiązuje darmowa dostawa. Taka informacja może wyświetlić się w sklepie internetowym:

```
let freeDeliveryTreshold = 300;
let basektValue = 250;
let freeDeliveryInfo = basketValue >= 300 ? 'Darmowa wysyłka!' : 'Do darmowej wysyłki pozostało: '.freeDeliveryTreshold-basketValue;
```

Taki jednolinijkowiec jest wygodniejszy niż użycie if – else.

### Instrukcja switch – case w JavaScript

Istnieją też inne konstrukcje warunkowe, które w niektórych przypadkach mogą być bardziej wygodne od poznanego przed chwilą if. Jednym z nich jest switch. Pozwala on szybko tworzyć serię instrukcji warunkowych, które mogą być przydatne przy mapowaniu przycisków:

```
let litera = 'a';
switch(litera){
   case 'a':
      console.log('arbuz');
      break;
   case 'b':
      console.log('banan');
      break;
   case 'c':
      console.log('cytryna');
      break;   
} 
```

## Funkcje w JavaScript

Funkcje w programowaniu to wydzielony zbiór kodu, który może być wywołany w innym miejscu. Funkcja może posiadać własne zmienne lokalne, przyjmować argumenty, może zwracać konkretną wartość i może być też użyta jako argument innej funkcji. Najlepiej wszystko pokazać na przykładach.

Najprostsza funkcja nie przyjmuje żadnych argumentów. Wykonuje procedurę, czyli kod jaki umieszczono wewnątrz nawiasów klamrowych. Deklarację funkcji rozpoczyna słowo kluczowe *function*:

```
function napisz(){
   console.log("Witaj Świecie!");
}
```

Tego typu kod się nie wykona sam z siebie. Funkcję trzeba wywołać podając jej nazwę i ewentualne argumenty w nawiasie. W tym przypadku nie mamy argumentów dlatego otworzymy i od razu zamkniemy nawias:

```
napisz();
```

Jak widać, działanie funkcji nie różni się od napisania zwykłej instrukcji console.log(); Funkcja może przyjmować argumenty – zupełnie tak jak w matematyce. Argumenty to po prostu zmienne, którym można nadać konkretne wartości przy wywoływaniu funkcji. Fachowo mówimy, że parametryzujemy kod funkcji. Sztywny napis *Witaj Świecie!* można sparametryzować w ten sposób:

```
function napisz(napis){
   console.log(napis);
}
```

To spowoduje, że przy wywoływaniu funkcji możemy w argumencie umieścić tekst do wyświetlenia:

```
napisz("Cześć!");
```

Funkcja może zwracać wartość i powiedzieliśmy, że może być argumentem innej funkcji. Łatwo to pokazać na dodawaniu:

```
function suma(skladnik1, skladnik2){
   return skladnik1+skladnik2;
}
console.log(suma(2,3));
```

Konsola oczywiście zwróci 5.

```
console.log(suma(2,suma(3,5)));
```

Samo wywołanie funkcji suma nie zwróci wartości 0 lecz NaN. Nie jest to zazwyczaj oczekiwane zachowanie tego typu funkcji. Nie podając żadnych argumentów przy wywołaniu funkcji suma() ona „nie wie”, że logiczną wartością do zwrócenia będzie 0. Aby uzyskać taki efekt, wystarczy podać przy deklaracji **domyślne wartości argumentów**, które są zastosowane wtedy, kiedy nie podamy wszystkich argumentów przy wywoływaniu funkcji:

```
function suma(skladnik1=0, skladnik2=0){
   return skladnik1+skladnik2;
}
```

Teraz, wywołanie funkcji suma() bez argumentów zwróci 0 bo zostanie zwrócona wartość operacji 0+0.

### Funkcje strzałkowe

W dokumentacji ES6 wprowadzono funkcje strzałkowe (ang. *arrow functions*), które różnią się zapisem. Powodują, że możemy proste funkcje zapisać w jednej linii czystego kodu. Przykład z sumą można zapisać tak:

```
let suma = (skladnik1=0, skladnik2=0) => {
   return skladnik1+skladnik2;
}
```

Jak widać, pozbyliśmy się słowa kluczowego function i doszła nam strzałka przed nawiasem klamrowym. W przypadku tak prostej funkcji możemy pójść jeszcze dalej i usunąć nawiasy klamrowe oraz słowo kluczowe return:

```
let suma2 = (skladnik1=0, skladnik2=0) => skladnik1+skladnik2;
```

W przypadku gdy istnieje tylko jeden argument, można usunąć nawet nawias otaczający argumenty.

```
let kwadrat = podstawa => Math.pow(podstawa, 2);
```

Teraz wystarczy normalnie wywołać funkcję aby otrzymać kwadrat z liczby np. z dwójki:

```
console.log(kwadrat(2));
```

W tym przykładzie bardzo fajnie widać jak funkcja strzałkowa upraszcza zapis. Jest to przykład *cukru syntaktycznego*, czyli elementów w syntaksie języka programowania, który nie dodaje nowych funkcjonalności a jedynie „upiększa” zapis kodu.

## Programowanie obiektowe JavaScript

Po opanowaniu funkcji płynnie można przejść do obiektów w JavaScript. W tym rozdziale poznasz **podstawy programowania orientowanego obiektowo w JavaScript**.

### Funkcje konstruktora

Zobaczmy jak definiujemy funkcję konstruktora (ang. *constructor function*). Nazwy konstruktorów w odróżnieniu od zwykłych funkcji rozpoczynamy wielką literą. Przy funkcjach konstruktora, mówimy że nawiasie mamy właściwości. Obiekt Osoba posiada zatem właściwości: imię, nazwisko i dataUrodzenia.

```
function Osoba (imie, nazwisko, dataUrodzenia){
   this.imie = imie;
   this.nazwisko = nazwisko;
   this.dataUrodzenia = dataUrodzenia;
}
```

Instancję obiektu tworzymy tak jak w innych językach programowania za pomocą słowa kluczowego *new*:

```
const osoba1 = new Osoba("Jan", "Kowalski", "12.03.2001");
```

Możemy teraz wyświetlić obiekt:

```
console.log(osoba1);
```

Dostęp do poszczególnych właściwości zapewnia poznana wcześniej notacja kropkowa:

```
console.log(osoba1.imie);
```

W naszym obiekcie Osoba zdefiniowaliśmy tylko właściwości. Metody można tworzyć za pomocą słowa kluczowego function:

```
function Osoba (imie, nazwisko, dataUrodzenia){
   this.imie = imie;
   this.nazwisko = nazwisko;
   this.dataUrodzenia = dataUrodzenia;
   this.getImieNazwisko = function() {
      return this.imie + ' ' + this.nazwisko;
   }
}
const osoba1 = new Osoba("Jan", "Kowalski", "12.03.2001");
```

Metodę obiektu możemy teraz wywołać tak:

```
console.log(osoba1.getImieNazwisko());
```

### Metody prototypowe

Możemy też zdefiniować metody prototypowe (ang. *prototype methods*). Takie definiowanie metod jest wydajniejsze. Różnica polega też na tym, że nie będą one widoczne bezpośrednio jako składowa obiektu i nie będą miały dostępu do danych innych niż publiczne:

```
function Osoba (imie, nazwisko, dataUrodzenia){
   this.imie = imie;
   this.nazwisko = nazwisko;
   this.dataUrodzenia = dataUrodzenia;
}
Osoba.prototype.getImieNazwisko = function() {
   return this.imie + ' ' + this.nazwisko;
}
```

### Klasy w JavaScript

W 2015 roku w specyfikacji ES6 (czyli ECMA Script 2015) wprowadzono słowo kluczowe class. Dzięki niemu można tworzyć klasy w podobny sposób jak w innych językach programowania obiektowego. Tutaj znowu nic się nie zmienia w praktyce, a poniższy przykład to tylko przerobienie powyższego kodu na nowocześniejszy zapis:

```
class Osoba {
   constructor(imie, nazwisko, dataUrodzenia){
      this.imie = imie;
      this.nazwisko = nazwisko;
      this.dataUrodzenia = dataUrodzenia;
   }
   getImieNazwisko() {
      return this.imie + ' ' + this.nazwisko;
   }
}
```

Tworzenie instancji obiektu, odwoływanie się do własności i metod wygląda dokładnie tak samo. Metoda getImieNaziwsko jest z automatu dodawana do prototypu. Jest to zatem kolejny przykład cukru syntaktycznego w JavaScript.

## DOM w JavaScript

DOM to obiektowy model dokumentu  (ang. *Document Object Model*). Jest to obiektowa reprezentacja strony internetowej w pamięci przeglądarki. Dzięki DOM możemy manipulować elementami strony internetowej i nasłuchiwać zdarzeń za pomocą JavaScriptu. Przeglądarka interpretuje kod HTML i przekształca go w model obiektowy. W narzędziach dla programistów DOM strony internetowej jest zaprezentowany w postaci kodu HTML i w ramach tego kursu można też go tak postrzegać – jako roboczy i żywy kod HTML bieżącej strony internetowej, który możemy modyfikować „w locie”. Czytaj więcej w osobnym artykule: [Co to jest DOM](https://web.archive.org/web/20230129215430/https://mansfeld.pl/webdesign/co-to-jest-dom-shadow-dom-virtual-dom/)?

![HMTL DOM](/blog/img/jskurs.jpg "Reprezentacja DOM w postaci kodu HTML w przeglądarce Chrome")

Aby móc poznać działanie DOM, dopiszmy do naszego pliku kursjs.html dodatkowe elementy DOM:

```
<body>
   <h1>Kurs JavaScript</h1>
   <div id="witaj">Witaj Świecie!</div>
   <div class="opis">
      <p>
         Napis "Witaj Świecie!" (ang. Hello World)  ma na celu demonstrację języka, środowiska bądź biblioteki, w której został napisany.
      </p>
   </div>
</body>
```

*Kod JavaScript możemy wprowadzać do naszego pliku kursjs.js lub do znaczników <script></script> w pliku kursjs.html*

Nadrzędnym elementem DOM jest *document*. To za pomocą tego obiektu będziemy odwoływali się do każdego elementu znajdującego się w bieżącej stronie internetowej. Aby zatem „wybrać” istniejący div o identyfikatorze *witaj* użyjmy poniższego kodu:

```
let element = document.getElementById('witaj');
console.log(element);
```

Element taki możemy przypisać do zmiennej aby wygodniej nim manipulować i nie było konieczności pisania tej linijki przy następnych operacjach. Kiedy zmienną element przekażemy do funkcji console.log() nasz <div> zostanie wyświetlony w konsoli w postaci kodu HTML.

Istnieje też nowszy i znacznie wygodniejszy sposób wybierania elementów z DOM. Wybieranie elementów bardzo przypomina wówczas budowanie selektorów znanych z CSS i jQuery. Mowa o metodach querySelector() i querySelectorAll(). Ta pierwsza wybiera pierwszy element zgadzający się z selektorem umieszczonym w nawiasie a ta druga wybiera wszystkie elementy, przy czym umieszcza je w NodeList, którą można używać podobnie jak tablicę. Poznaliśmy jak działają tablice dlatego nie będzie to stanowiło dla nas żadnego problemu.

```
let element = document.querySelector('#witaj');
```

Chcąc wybrać oba elementy <div> możemy również użyć starszego podejścia:

```
let divs = document.getElementsByTagName('div');
```

lub nowszego:

```
let divs = document.querySelectorAll('div');
```

Dla klas użylibyśmy document.getElementsByClassName ale zaleca się używać już nowszego zapisu:

```
let klasa = document.querySelectorAll('.nazwa-klasy');
```

Używanie metody querySelector poza prostszą składnią zapewnia łatwiejsze iterowanie po elementach wygenerowanych tablic. Tradycyjne metody zwracają HTMLCollection a querySelector zwraca wspomniany NodeList, którymi łatwiej się można posługiwać.

Skoro potrafimy wybierać elementy, dokonajmy przykładowych modyfikacji. Za pomocą JavaScript można dynamicznie nadać styl elementom zupełnie tak jak posługiwalibyśmy się atrybutem style:

```
element.style.backgroundColor = "yellow";
```

W taki sposób można nadawać też inne właściwości CSS:

```
element.style.color = "blue";
```

Wykluczając dość rzadkie przypadki (jak np. tworzenie animacji) w praktycznych scenariuszach dość rzadko się z tego korzysta i do dynamicznego stylowania elementów tworzy się klasy CSS.

```
<style>
   .naglowek{
      color:red;
      border:1px solid black;
   }
</style>
```

W kodzie JS dodajemy bądź usuwamy klasy odpowiedzialne za poszczególne style:

```
element.classList.add('naglowek');
element.classList.remove('naglowek');
```

W JavaScript można dodawać i usuwać dowolne atrybuty. Stwórzmy poprawny link do dowolnej strony internetowej:

```
<a href="https://google.pl" class="link">Link</a>
```

Wybierzmy element i skorzystajmy z metody setAttribute:

```
let link = document.querySelectorAll('.link');
link.setAttribute('target', '_blank');
```

Od tej pory link powinien się otwierać w nowym oknie. Możemy też sprawdzić czy dany element ma konkretny atrybut, pobrać jego wartość a nawet całkowicie je usunąć. Służą do tego odpowiednio:

```
element.hasAttribute('class');
element.getAttribute('class');
element.removeAttribute('class');
```

Kolejną modyfikacją w DOM może być zmiana zawartości:

```
element.innerHTML="<p>JavaScript jest łatwy!</p>";
```

Istnieje też podobna właściwość innerText, która traktuje wprowadzoną wartość jako zwykły tekst. W praktyce oznacza, to że przykładowy tag <p> zostanie zakodowany jako: &lt;p&gt;

Elementy, którymi manipulujemy w JavaScript wcale nie muszą być najpierw stworzone w czystym HTML. Możemy jest stworzyć dynamicznie i umieścić w dowolnym miejscu na stronie. Być może zdarzy się sytuacja, że będziemy chcieli sklonować istniejący element DOM:

```
element2 = element.cloneNode(true);
```

Argument true, powoduje, że kopiowana jest też cała zawartość wewnątrz klonowanego elementu div. Aby sklonowany element pojawił się w DOM, musimy napisać jeszcze jedną instrukcję, która jednocześnie określa gdzie ma się on pojawić.

```
element.after(element2);
```

Spowoduje, że skolonowany element pojawi się po elemencie źródłowym i jak można się domyślić istnieje jeszcze metoda before().

Element DOM można stworzyć całkowicie od podstaw – bez konieczności kopiowania istniejących elementów:

```
nowyElement = document.createElement('div');
```

Po tej instrukcji – podobnie jak wyżej – musimy zdecydować gdzie ma zostać umieszczony nowyElement. Stworzony dynamicznie div jest pusty, aby umieścić w nim jakąś zawartość można użyć poznanej nam już właściwości innerHTML:

```
element.before(nowyElement);
nowyElement.innerHTML = '<h3>Hej</h3>';
```

### Wywoływanie i obsługa zdarzeń w JavaScript

Za pomocą JavaScript możemy nasłuchiwać zdarzeń, wywoływać je i wykonywać kod kiedy dane zdarzenie nastąpi. Zdarzenia to przykładowo kliknięcie na przycisk, przewinięcie strony, najechanie myszą, wciśnięcie przycisku na klawiaturze, zmiana rozmiaru okna ale też samo załadowanie się strony.

Aby zaznajomić się ze zdarzeniami stwórzmy przycisk:

```
<button id="btn">Wciśnij mnie!</button>   
```

Teraz możemy stworzyć eventListener. Funkcja addEventListener przyjmuje dwa argumenty. Pierwszym z nich jest samo zdarzenie, które będzie nasłuchiwane a w drugim argumencie znajduje się funkcja lub odwołanie do funkcji ,która ma wykonać kod kiedy zdarzenie będzie miało miejsce:

```
przycisk = document.querySelector('#btn');
przycisk.addEventListener('click', function(){
   console.log("Brawo! Wciśnięto przycisk.");
});  
```

Możemy też obsłużyć inne zdarzenia, takie jak najechanie myszą na dany element jak i moment, w którym kursor opuszcza pole danego elementu. Nic nie stoi na przeszkodzie, aby wiele różnych eventów dotyczyły jednego elementu DOM:

```
przycisk.addEventListener('mouseover', przyciskMouseOver);
przycisk.addEventListener('click', przyciskClick);
przycisk.addEventListener('mouseout', przyciskMouseOut);
```

Zauważ, że tutaj nie umieściłem ciała funkcji a tylko jej nazwę. Funkcja, która ma się wykonać po danym zdarzeniu może być w innym miejscu zdefiniowana w dowolnym miejscu jak standardowa funkcja:

```
przycisk = document.querySelector('#btn');

function przyciskClick(){
   przycisk.innerHTML = "Click!";
}
function przyciskMouseOver(){
   przycisk.innerHTML = "Zaraz będzie click...";
}
function przyciskMouseOut(){
   przycisk.innerHTML = "???";
}
```

Do funkcji, która reaguje na dane zdarzenie można przekazać parametr zdarzenia, który umożliwi nam ingerować w standardowe zachowanie elementów. Przykładem może być kliknięcie na link:

```
<a href="https://google.pl" class="stop">Link</a>
```

W JavaScript wybieramy element i będziemy nasłuchiwali kliknięcia:

```
link = document.querySelector('.stop');
link.addEventListener('click', function(e){
   e.preventDefault();
});
```

Za pomocą preventDefault() wyłączamy standardowe działanie linku przez co jego kliknięcie nie spowoduje opuszczenia bieżącej strony. Podobnie można zrobić z formularzami. Podłączając się do zdarzenia submit możemy zapobiec odświeżeniu strony:

```
formularz.addEventListener("submit", function(e) {
   e.preventDefault();
});
```

Zabawę z formularzami zostawmy sobie na inną okazję.

### Podsumowanie

Mam nadzieję, że ten kurs zachęci do nauki JavaScript i spowoduje, że moje wcześniejsze artykuły z kawałkami kodów JavaScript będą bardziej zrozumiałe. Szczerze mówiąc, rzadko kiedy wychodzę poza ramy tego kursu. Znajomość JavaScript na tym poziomie pozwala tworzyć użyteczny kod i może być punktem wyjściowym do nauki programowania wprost z dokumentacji. Znajomość tego typu podstaw JavaScript ułatwia poznawanie bibliotek, dostosowywania przypadkowych kodów JavaScript znalezionych w Internecie a także nauki popularnych frameworków z darmowych źródeł.