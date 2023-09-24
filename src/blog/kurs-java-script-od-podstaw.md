---
layout: layouts/post.njk
title: Kurs Java Script od podstaw
description: "Chcąc nauczyć się nowoczesnego programowania w JavaScript możemy
  mieć niemały problem, tym bardziej jeżeli ograniczamy się do polskojęzycznego
  Internetu. "
author: Przemek
date: 2023-09-24T06:43:59.839Z
tags:
  - strony www
thumbnail: /blog/img/kurs-javascript-podstawy-1170x720.jpg.webp
---
Chcąc nauczyć się nowoczesnego programowania w JavaScript możemy mieć niemały problem, tym bardziej jeżeli ograniczamy się do polskojęzycznego Internetu. Istniejące w Internecie, najczęściej przestarzałe kursy JavaScript uczą starego podejścia, według których nie wypada już programować. Platformy e-learningowe są przepełnione kursami JavaScript do którego doklejony jest jakiś Framework i środowisko node.js – taki kurs uczy wszystkiego oprócz JavaScript i przy okazji odstrasza początkujących nawałem narzędzi. W YouTube są sympatyczne filmiki, które jednak marnują cenny czas kursanta, bo wiedzę, którą można zawrzeć w kilku zwięzłych zdaniach tłumaczy się tak aby przychód z prowadzenia kanału był jak największy – czyli rozwleka się stosunkowo mało materiału na wielogodzinne odcinki – które i tak promują jakiś inny płatny kurs…

Oczywiście **najpewniejszym i najpierwotniejszym źródłem wiedzy o języku programowania jest dokumentacja**. Polecam [dokumentację MDN](https://web.archive.org/web/20230129215430/https://developer.mozilla.org/pl/). Dokumentacja to tekst a serwisy dla programistów typu Stack-Overflow ma formę forum a nie wideo-porad, dlatego nauka programowania poprzez czytanie tekstu jest czymś naturalniejszym. Postanowiłem napisać kurs JavaScript w formie artykułu, który po prostu wprowadzi w JavaScript nowe osoby. Jeżeli ktoś już poznał podstawy JS, kurs ten zweryfikuje lub zaktualizuje wykorzystywane na co dzień techniki programowania JavaScript.

Na koniec wstępu przypomnę, że JavaScript to [najpopularniejszy język programowania](https://web.archive.org/web/20230129215430/https://mansfeld.pl/programowanie/najpopularniejsze-jezyki-programowania/) i warto się go uczyć lub chociaż poznać jego podstawy. Wiedza zdobyta w tym kursie pozwoli świadomiej dokonać wyboru dalszej ścieżki edukacji i tworzyć skrypty w czystym JavaScript jeżeli zajmujesz się tworzeniem stron lub aplikacji internetowych. Niewykluczone, że artykuł ten będzie ulegał częstym aktualizacjom – wszystko zależy od jego odbioru.

## Co jest potrzebne by programować w JavaScript?

Kod JavaScript wykonywany jest w przeglądarce. Nie potrzebujemy niczego innego poza zwykłą przeglądarką np. Google Chrome czy Mozilla Firefox. Google Chrome jest najpopularniejszą przeglądarką i wspiera najnowsze rozwiązania ale dla potrzeb tego kursu można skorzystać z dowolnej ulubionej przeglądarki internetowej.

Kod JavaScript możesz pisać w zwykłym notatniku ale polecam notatnik dla programistów, np. Notepad++ lub Visual Studio Code. Są to darmowe programy, które i tak prędzej czy później będziesz wykorzystywać skoro interesujesz się programowaniem. Programy takie kolorują składnię i powodują, że programowanie jest efektywniejsze z wielu innych powodów.

Kod JavaScript to dodatek do stron i aplikacji internetowych dlatego niezbędna jest chociaż minimalna wiedza jak budować proste strony w języku HTML. JavaScript jest dodatkiem do stron internetowych, który umieszczamy w tagach <script> lub w osobnych plikach .js, które dołączamy do strony internetowej za pomocą <script src=”plik.js”></script>. Drugie podejście jest bardziej profesjonalne i zwiększa czytelność kodu ale kod umieszczony w tagach <script> bezpośrednio w pliku .html będzie działał dokładnie tak samo.

### Jak debugować kod w JavaScript?

Debugowanie to wyszukiwanie i eliminacja błędów w kodzie. Błędy syntaktyczne w programowaniu powstają tak samo jak w ortografii – przez niewiedzę lub z przeoczenia. Dla początkujących programistów debugerem (czyli tym czymś co pokazuje błędy w kodzie) będzie konsola w przeglądarce internetowej, którą w Google Chrome uruchamiamy klawiszem F12. Praca ze stroną, na której umieszczamy kod JavaScript wygląda wtedy tak:

![](/blog/img/kurs-js-przegladarka.png.webp)

DAa