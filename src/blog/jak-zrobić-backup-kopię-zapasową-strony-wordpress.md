---
layout: layouts/post.njk
title: Jak zrobić backup, kopię zapasową strony WordPress
description: W jednym z artykułów pisałem, że od robienia kopii zapasowych
  WordPress jest hosting i w pełni podtrzymuję swoje stanowisko. Automatyczny
  skrypt, który tworzy kopię zapasową zarówno plików jak i bazy danych w równych
  odstępach czasu (np. 24 godziny) to standard w przypadku prawdziwego [hostingu
  WordPress](https://web.archive.org/web/20230330082729/https://mansfeld.pl/webhosting/hosting-wordpress/).
author: Przemek Miros
date: 2023-10-13T11:57:47.515Z
tags:
  - wordpress
thumbnail: https://przemekmiros.pl/blog/img/standardy-wp.png
---
W jednym z artykułów pisałem, że od robienia kopii zapasowych WordPress jest hosting i w pełni podtrzymuję swoje stanowisko. Automatyczny skrypt, który tworzy kopię zapasową zarówno plików jak i bazy danych w równych odstępach czasu (np. 24 godziny) to standard w przypadku prawdziwego [hostingu WordPress](https://web.archive.org/web/20230330082729/https://mansfeld.pl/webhosting/hosting-wordpress/). Takie kopie przydają się w codziennej pracy ze stroną kiedy aktualizujemy rdzeń CMSa, wtyczki i wprowadzamy różnego rodzaju zmiany, które jak wiadomo mogą doprowadzić do awarii. W przypadku jakichkolwiek problemów przywracamy kopię zmienionych plików, folderów bądź całej bazy danych z wszystkimi plikami, które zostały wykonane ubiegłej nocy.

W tym artykule dowiesz się jak wykonywać kopie zapasowe strony WordPress, bo warto dysponować **kopią serwisu internetowego przechowywaną poza hostingiem**. Taki backup strony WordPress może nam się przydać w różnych niestandardowych okolicznościach. Nigdy nie mamy na przykład pewności, że firma której powierzamy hosting naszej strony nagle nie zniknie wraz z wszystkimi backupami. Nawet duże chmury typu AWS czy Google Cloud mogą nas odciąć od całej infrastruktury w wyniku przeoczonych błędów płatności. Często jest tak, że firmy powierzają zaprzyjaźnionemu webmasterowi sprawy hostingowe a taki webmaster może się przecież rozchorować lub… też całkiem zniknąć. Takie odseparowane od hostingu kopie zapasowe, są w takich sytuacjach jedynym ratunkiem, który pozwoli odtworzyć i zreaktywować stronę nawet w najgorszych scenariuszach.

## Z czego składa się kopia strony WordPress?

Pełna **kopia strony WordPress składa z dwóch części**: zrzutu bazy danych i plików.

### Baza danych

Zrzut bazy danych to najcenniejszy element kopii WordPressa. Zawiera każdy wpis, komentarz i całą konfigurację wewnątrz panelu administracyjnego. Jest to najczęściej jeden plik z rozszerzeniem .sql, który nierzadko jest kompresowany.

### Pliki

Kopia plików zawiera główny folder strony WordPress z bardzo ważnymi plikami jak wp-config.php i .htaccess oraz zawartość trzech folderów:

* wp-admin
* wp-content
* wp-includes

Pliki, które kopiujemy są odpowiedzialne aż za pięć różnych rzeczy:

* Rdzeń WordPressa czyli Core
* Wtyczki WordPress
* Motywy WordPress
* Biblioteka mediów – w tym wszelkie obrazki
* Dodatkowe pliki, które przechowujemy razem ze stroną

*Aby oszczędzić miejsce na dysku i ułatwić proces przywracania, pliki są najczęściej kompresowane w popularne formaty jak zip czy tar.gz.*

## Krok 1: Wykonywanie kopii zapasowej bazy danych WordPress

Kopię zapasową bazy danych możemy wykonać na wiele sposobów. Najczęstszym i najpopularniejszym rozwiązaniem jest skorzystanie z narzędzia phpMyAdmin.

### Opcja 1: phpMyAdmin

phpMyAdmin to open-sourcowe narzędzie służące do stosunkowo łatwego zarządzania bazą danych MySQL.

![](https://web.archive.org/web/20230330082729im_/https://cdn.mansfeld.pl/wp-content/uploads/2020/01/przenoszenie-wordpress-eksport-bazy-danych-phpmyadmin-750x628.png)

phpMyAdmin – tworzenie kopii zapasowej bazy danych

Aby wykonać kopię zapasową bazy danych tworzymy eksport bazy danych. Po zatwierdzeniu opcji eksportu przyciskiem „Wykonaj” **plik ze zrzutem zostanie pobrany na lokalny dysk lokalny**. Wygląd aplikacji może się nieco różnić w zależności od dostawcy hostingu natomiast samo rozmieszczenie elementów GUI powinno być podobne.

### Opcja 2: SSH i linia poleceń – mysqldump

Jeżeli nie mamy dostępu do aplikacji phpMyAdmin a mamy dostęp do linii poleceń (i mamy podstawowe pojęcie o zarządzaniu poprzez SSH serwerem SQL) możemy wygenerować zrzut bazy danych za pomocą komendy:

```

```

### Opcja 3: Panel dostawcy hostingu

Czasem kopię zapasową można pobrać wprost z panelu do zarządzania hostingiem i bazami SQL.

![](https://web.archive.org/web/20230330082729im_/https://cdn.mansfeld.pl/wp-content/uploads/2023/03/kopia-zapasowa-bazy-w-panelu.png)

Tworzenie kopii zapasowej w panelu OVH

Jeżeli nie masz dostępu do żadnej z powyższych metod skontaktuj się ze wsparciem technicznym hostingu i zapytaj jak możesz pobrać kopię zapasową bazy danych twojej strony WordPress.

## Krok 2: Wykonywanie kopii plików strony WordPress

### Opcja 1: FTP

Aby wykonać kopię plików w najprostszy sposób musimy mieć dostęp do konta FTP. Dane logowania konta FTP pozwolą zalogować się na nasz hosting za pomocą klienta FTP i skopiować wszystkie pliki jakie znajdują się na naszym hostingu. **Adres serwera, login i hasło** znajdują się najczęściej w panelu hostingowym lub tam dopiero tworzymy login i ustalamy hasło. Jak zawsze możemy zapytać wsparcie techniczne o pomoc w ich odnalezieniu.

Istnieje wiele programów, które realizują połączenia FTP ale najpopularniejszym jest FileZilla:

![](https://web.archive.org/web/20230330082729im_/https://cdn.mansfeld.pl/wp-content/uploads/2023/03/kopiowanie-plikow-wordpress-ftp-1.png)

Kopiowanie plików poprzez FTP

Pobieramy pliki i opcjonalnie możemy je spakować dowolną aplikacją do archiwizacji plików.

### Opcja 2: SSH – tworzenie archiwum plików z linii komend

Metoda SSH jak zwykle ograniczy się do jednej komendy i pobrania paczki ze skompresowanymi plikami. Przechodzimy do głównego folderu strony WordPress i zatwierdzamy taką komendę:

```

```

To spowoduje utworzenie pliku wordpress.zip z wszystkimi plikami jakie były wewnątrz bieżącego folderu. Teraz możemy pobrać archiwum nie zapominając o jego usunięciu z serwera.

## Wtyczki do tworzenia kopii zapasowych WordPress

Choć stworzenie prawdziwej i niezależnej kopii zapasowej WordPressa nie jest trudne ani czasochłonne to istnieje wiele wtyczek, które mają automatyzować ten proces. Poleganie na wtyczkach ma swoje minusy, ponieważ stosują one własne formaty zapisu, mają różnorakie limity i ich instalacja jest często konieczna także przy przywracaniu stworzonych przez nich kopii. Uważam jednak, że lepszy taki backup niż żaden dlatego poniżej zamieszczę listę wtyczek, które został oznaczone tagiem „backup” w repozytorium wtyczek WordPress. Wtyczki uszeregowano od najpopularniejszej:

* Jetpack – WP Security, Backup, Speed, & Growth
* All-in-One WP Migration
* UpdraftPlus WordPress Backup Plugin
* Duplicator – WordPress Migration & Backup Plugin
* BackWPup – WordPress Backup Plugin
* Migration, Backup, Staging – WPvivid
* BackUpWordPress
* Backuply – Backup, Restore, Migrate and Clone
* Database Backup for WordPress
* BlogVault WordPress Backup Plugin – Migration, Staging, and Backups
* Total Upkeep – WordPress Backup Plugin plus Restore & Migrate by BoldGrid
* WP STAGING – Backup Duplicator & Migration

### Podsumowanie

Niezależna od hostingu kopia zapasowa serwisu WordPress może okazać się przydatna w różnych sytuacjach. Posiadanie backupu serwisu nie jest trudne do wykonania ani czasochłonne a gwarantuje stuprocentową pewność utrzymania serwisu WordPress nawet w najbardziej beznadziejnych i pechowych scenariuszach. Istnieje wiele wtyczek do wykonywania backupu strony WordPress jednak mają one ograniczenia a niekiedy celowe limity aby zmusić użytkownika do zakupu płatnych wersji.