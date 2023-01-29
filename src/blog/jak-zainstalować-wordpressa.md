---
title: Jak zainstalować Wordpressa?
description: Jak zainstalować Wordpressa ręcznie?
date: 2022-12-08T19:34:41.039Z
author: Przemek Miros
thumbnail: /assets/img/blog/blog-responsive.jpg
tags: ['wordpress']
color: blue
---
W tym artykule opiszę jak ręcznie zainstalować Wordpressa. Będziesz potrzebował klienta ftp (żeby przesłać pliki Wordpressa). Zacznij od pobrania ostatniej wersji z oficjalnej strony <https://wordpress.org/download/>  Następnie wypakuj pliki i prześlij je (przez klienta ftp, np Filezilla) do katalogu na serwerze w którym będą przechowywane pliki strony. Teraz przejdź do phpMyadmin z panelu operatora hostingu. Utwórz nową bazę danych dla Wordpressa. 

Mamy pliki Wp na serwerze i pustą bazę danych, możemy rozpocząć instalację. Żeby uruchomić kreatora instalacji poprostu uruchom stronę, powinien się pokazać taki ekran.

![Wordpress - ręczna instalacja](/assets/img/wordpress-kursy-instalacacja-1.jpg "Wordpress - ręczna instalacja")

 Kliknij "Zaczynajmy" żeby przejść do kolejnego ekranu. Przygotuj nazwę bazy danych, hasło i adres serwera bazy. Dobrą praktyką jest zmiana prefiksu bazy danych z domyslnego na własny, co powinno zwiększyć bezpieczeństwo strony.

![Wordpress - ręczna instalacja - dane](/assets/img/wordpress-kursy-instalacacja-2.jpg "Wordpress - ręczna instalacja - dane")

Jeżeli wszystkie dane są poprawne, powinieneś zobaczyć taki ekran

![Wordpress - ręczna instalacja - potwierdzenie](/assets/img/wordpress-kursy-instalacacja-3.jpg "Wordpress - ręczna instalacja - potwierdzenie")

Kliknij "Uruchom instalacje", przejdziesz do ostatniego kroku instalacji

![](/assets/img/wordpress-kursy-instalacacja-4.jpg)

Wypełnij wszystkie wymagane pola i kliknij "Zainstaluj WordPressa".  Dobrą praktyką jest zaznaczenie "Proś wyszukiwarki o nieindeksowanie tej witryny" żeby nie indeksować strony na etapie budowy.

Gotowe. kojejnym krokiem będzie zalogowanie sie do panelu administarcyjnego strony.