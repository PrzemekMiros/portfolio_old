---
title: Kurs Eleventy - Instalacja
description: Kurs z generatora stron statycznych Eleventy
date: 2022-11-25T19:43:40.029Z
author: Przemek Miros
thumbnail: /assets/img/blog/blog-responsive.jpg
tags: ['jamstack']
color: green
---
Masz już dosyć Wordpressa? Mam dla Ciebie dobrą alternatywę - generator stron statycznych Eleventy. W tym mini kursie pokaże Ci jak zbudować ponadprzecięnie szybką witrynę w pełni zoptymalizowaną pod SEO, a do tego z CMS'em :)

Musisz znać HTML, CSS, podstawy JavaScript i Gita. Jak widzisz to nie są duże wymagania, a nawet jeżeli jeszcze nie znasz Gita to z tym tutorialem nie będzie problemu, a przy okazji poznasz jego absolutne podstawy. Dobra, to do dzieła!

Zaczniemy od przygotowania środowiska (Node.js) i instalacji GIT. Przejdź na stronę https://nodejs.org/en/ i zainstaluj ostatnią stabilna wersję, w momencie pisania tego samouczka mamy wersję 18.12.1.

Instalacja jest bardzo prosta, po pobraniu i uruchomieniu kreatora instalacji wszystko może zostac domyślnie, poprostu klikaj "Dalej" aż przejdziesz cały proces instalacji. Następnie otwórz wiersz poleceń i sprawdź czy instalacja przebiegła prawidłowo, jeżeli jest wszystko ok, to po wpisaniu poniższego polecenia powinna wyświetlic Ci się aktualna wersj Node.js

```javascript
node -v
```

Lecimy dalej, teraz zainstaluj GIT'a. Skorzystaj z NPM (Menadżer pakietów node), wpisz komendę:

```javascript
npm install git
```

Następnie sprawdź czy się poprawnie zainstalował sprawdzając wersję analogicznie jak poprzednio z instalacją Node.js, czyli:

```javascript
git -v
```

Jeżeli wszystko jest w porządku wyświetli sie aktualna wersja jak poniżej:

```javascript
git version 2.38.0.windows.1
```

Jak już mamy przygotowane srodowisko przechodzimy do sedna, czyli instalacji generatora stron statycznych Eleventy. Zacznij od utworzenia folderu z nazwą projektu w którym będą wszystkie pliki. Możesz to zrobić poprostu w edytorze wizualnym albo w konsoli wpisując 

```javascript
mkdir nazwaprojektu
```

Nastepnie przechodzimy do folderu

```javascript
cd nazwaprojektu
```

I otwieramy edytor kodu, korzystając z komendy

```javascript
code .
```

To polecenie otworzy domyślny edytor kodu, u mnie jest to Visual Studio Code.

Możesz zamknąć wiersz poleceń, od teraz wygodniej będzie korzystać z terminala w budowanego w VST.
Inicjujemy node'a poleceniem 

```javascript
npm init -y
```

W katalogu głównym utworzył się plik konfiguracyjny o nazwie package-lock.json z zależnościami, na ten moment ten plik nie będzie nam potrzebny więc go pomijamy.

Teraz instalujemy eleventy przez npm

```javascript
npm install @11ty/eleventy --save-dev
```

Jak już pewnie zauważeś że utworzył się kolejny plik o nazwie package.json

Plik zawiera kofigurację projektu