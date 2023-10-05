---
layout: layouts/post.njk
title: Standardy kodowania PHP, JS, CSS i HTML dla WordPress
description: Standardy kodowania to kosmetyka i raczej ciekawostka. Nie wpływają
  one zazwyczaj na wydajność ale mogą uchronić przed typowo ludzkimi błędami w
  trakcie programowania. Zespół kodujący i programujący rdzeń WordPressa
  przestrzega tych umownych reguł. Myślę, że warto je poznać, jeżeli tworzymy
  własne motywy, wtyczki lub wprowadzamy jakiekolwiek inne modyfikacje.
author: Przemek Miros
date: 2023-10-05T13:40:40.365Z
tags:
  - wordpress
thumbnail: /blog/img/standardy-wp.png
---
Standardy kodowania to kosmetyka i raczej ciekawostka. Nie wpływają one zazwyczaj na wydajność ale mogą uchronić przed typowo ludzkimi błędami w trakcie programowania. Zespół kodujący i programujący rdzeń WordPressa przestrzega tych umownych reguł. Myślę, że warto je poznać, jeżeli tworzymy własne motywy, wtyczki lub wprowadzamy jakiekolwiek inne modyfikacje.

> Cały kod w dowolnej bazie kodu powinien wyglądać tak, jakby go pisała jedna osoba, bez względu na to, ile osób wniosło swój wkład.
>
> Rick Waldron

## HTML

Oczywistością jest, że kod HTML jaki generuje szablon, wtyczka i wszelkie snippety w functions.php powinny przechodzić [walidację W3C](https://web.archive.org/web/20230206220741/https://validator.w3.org/).

**Mimo, że HTML5 tego nie wymaga**, wszystkie tagi HTML powinny być zamykane. W przypadku węzłów jest to dosyć trywialne zadanie, każdy rozpoczęty <div> musi mieć zakończenie w postaci </div> – bez przeplatania. W przypadku tagów, które zamykają się samoczynnie powinno się dodawać ukośnik po dokładnie jednej spacji. Choć <br> i <br/> są poprawnymi tagami z perspektywy specyfikacji HTML5, w WordPressie powinno się stosować:

```
<br />
```

Tagi i atrybuty, które są przeznaczone dla komputerów powinny być pisane małą literą. Jeżeli jakieś tagi służą ludziom (np. tag title lub alt) wielkość liter powinna być zgodna z gramatyką.

```
<img loading="lazy" src="https://..." alt="Standardy kodowania w systemie WordPress">
```

Przykład powyżej jednocześnie pokazuje, że w przypadku cudzysłowów obowiązują zasady z XHTML czyli zamiast pojedynczego **’** używamy podwójny **„**.

W przypadku wcięć, stosujemy tabulatory a nie spacje. Mieszając PHP i HTML w jednym skrypcie wcięcia powinny odzwierciedlać logiczną strukturę dla kodu źródłowego PHP.

## CSS

Nawias otwierający powinien być umieszczony po jednej spacji po ostatnim selektorze. Wcięcia w stylach CSS powinny być robione tabulatorami. Pomiędzy sekcjami dodajemy dwie linie przerwy. Każdy selektor powinien być w osobnej linii co oznacza, że zapis wielu selektorów oddzielonych przecinkiem w ramach jednej reguły powinien wyglądać następująco:

```
.woocommerce table.shop_table th,
.woocommerce table.shop_table tbody th, 
.woocommerce table.shop_table tfoot td,
.woocommerce table.shop_table tfoot th {
   font-weight:300 !important;
   text-transform:uppercase;
}
```

Nazwy klas i identyfikatorów powinny mieć naturalne nazwy, które można łatwo skojarzyć. Wszystko zapisujemy małą literą a separatorem jest myślnik. Unikamy podkreśleń, camelcase i nadmiernego zawężania:

```
.navbar-mobile .navbar-nav {
   display: flex;
}
```

Selektory atrybutów powinny mieć cudzysłowia:

```
input[type="text"] {
   border:1px solid #aaa;
}
```

Właściwości też zapisujemy małą literą za wyjątkiem nazw fontów. Gdziekolwiek można, stosujmy stenografię (ang. *shorthand*) czyli skrótowe definicje oraz skrótowy zapis kolorów achromatycznych w hexach:

```
.wpcf7-form-control {
   width:100%;
   border:1px solid #aaa;
   padding-left:1rem;
}
```

W motywach WordPress zaleca się porządkować właściwości według kolejności:

* display,
* position,
* box-model,
* kolory,
* inne

Lub alfabetycznie, np:

```
section {
   margin: 0;
   padding: 4rem 0 4rem;
}
```

Wartości po dwukropku stawiamy po jednej spacji, nawiasów nie uzupełniamy spacjami. Nawet po wartości ostatniej właściwości stawiamy średnik. Używamy podwójnych cudzysłowów. Nazwy fontów otaczamy cudzysłowem tylko wtedy kiedy nazwa zawiera spację. Ciężar fontu font-weight podajemy w liczbach np. 400 a nie normal. Do wartości 0 nie dodajemy jednostki. Zaleca się aby line-height nie posiadało jednostek. Dla niecałkowitych wartości liczbowych np. w rgba dodajemy 0 wiodące.

```
.class {
   background-image: url('images/bg.png');
   font-family: "Helvetica Neue", sans-serif;
   font-weight: 700;
   text-shadow:
      0 -1px 0 rgba(0, 0, 0, 0.6),
      0 1px 0 #eee;
   line-height: 1.5;
   transition-property: opacity, background, color;
   box-shadow:
      0 0 0 1px #5b9dd9,
      0 0 2px 1px rgba(32, 142, 192, 0.75);
}
```

Zapytania medialne dodajemy na końcu stylu. Kod wewnątrz klamr @media ma dodatkowe wcięcie. Ewentualne długie komentarze powinny przerywać linię na co najwyżej 80 znaku. Można używać komentarzy CSS dla spisu treści. Edytując CSS należy edytować konkretne wartości zamiast nadpisywać je dodając kolejne selektory.

## JavaScript

Przy tworzeniu motywów lub wtyczek często będzie potrzeba napisania chociaż kilku linii JavaScript. nie można obejść się bez JavaScript. Standardy pisania kodu JavaScript dla WordPressa są bardzo podobne do standardów [jQuery – JavaScript Style Guide](https://web.archive.org/web/20230206220741/https://contribute.jquery.org/style-guide/js/).

Wcięcia wykonujemy tabulatorem. Unikamy białych znaków na końcu linii lub w pustych wierszach. Jedna linia powinna zawierać nie więcej niż 80 znaków. Maksymalnie 100 biorąc pod uwagę tabulatory. Instrukcje if, else, for, while, try – zawsze używają nawiasów klamrowych a ich ciało znajduje się w nowej linii.

Obiekty i tablice mogą być deklarowane w jednej linii jeżeli są stosunkowo zwięzłe. W przeciwnym wypadku muszą być rozpisane na wiele wierszy. Argumenty w nawiasach posiadają dodatkową spację po obu stronach:

```
var myPost = { title: 'test', val: 4 };
var myPost = {
   title: 'test',
   val: 4
};
```

Nie polegamy na ASI, zawsze dodajemy średnik na końcu każdej instrukcji.

Łańcuchowe wywołania zapisujemy w wielu liniach:

```
element
   .addClass( 'active' )
   .removeClass('unactive');
```

Gdzie tylko można zamiast var używany const lub let.

Nazwy zmiennych i funkcji powinny być logicznymi pełnymi słowami, które trafnie opisują funkcję. Wyjątek mogą stanowić jednoliterowe zmienne iteratorów w pętlach. W przeciwieństwie do konwencji przyjętej w PHP, w Javascript używamy camelCase z pierwszą literką małą.

W nazewnictwie klas obowiązuje UpperCamelCase czyli pierwsza litera jest wielka.

Ciągi znaków otaczamy pojedynczym cudzysłowem. Znakiem ucieczki jest lewy ukośnik.

Deklarując tablicę używamy nawiasów kwadratwych zamiast new Array();

## PHP

Wcięcia w kodzie PHP powinny stanowić tabulatory a nie spacje. Wyjątek stanowi seria atrybutów, gdzie wartości są wyrównane w jednej kolumnie:

```
$args = array(
   'category'      => $category_id,
   'posts_per_page'=> 64);
}
```

Ciągi znaków otaczamy podwójnym cudzysłowem:

```
echo "Do darmowej przesyłki pozostało: ";
```

Nie używamy konstrukcji else if zamiast tego używamy elseif. Deklarując tablice używamy dłuższego zapisu array() a nie nawiasów klamrowych. Nie używamy skrótowych tagów <?= $var ?> zamiast tego uzywamy standardowych tagów otwierających w jednej linii bądź wielu:

```
<?php echo $var; ?>
```

Wyrażenia SQL można dzielić na wiele linii. Instrukcje SQL takie jak UPDATE, WHERE, powinny być pisane wielkimi literami.

Jeżeli już jesteśmy przy bazie danych, należy unikać bezpośrednich zapytań SQL wtedy kiedy to możliwe.

Nazwy funkcji, zmiennych, akcji i filtrów zapisujemy z małej litery (nigdy camelCase). Separatorem jest podkreślenie. Kod powinien sam się dokumentować – nazwy powinny być naturalne i nasuwać skojarzenie z funkcją jaką pełnią w kodzie.

Pierwsze litery w nazwach klas powinny być duże a separatorem też jest podkreślenie.

```
class My_Walker extends Walker {
   var $db_fields = array(
   'parent' => 'menu_item_parent',
   'id'     => 'db_id'
);
```

W nazwach plików, separatorem jest myślnik. Nazwę pliku zapisujemy małymi literami np. *single-portfolio.php* Unikamy znaków diakrytycznych. Nazwy plików z definicjami klas poprzedzamy słowem class- np. *class-my-plugin.php*

Czytelność kodu jest ważniejsza od genialnych skrótów ale śmiało można używać trójskładnikowych operatorów warunkowych:

```
echo ( $cart_total < $free_shipping_threshold ) ? "Do darmowej wysyłki pozostało..." : "Darmowa wysyłka!";
```

### Podsumowanie

Spójny styl kodu ułatwia jego pisanie a zalety płynące z jego stosowania można odczuć nawet wtedy kiedy pracujemy w pojedynkę. Zrozumiałe nazwy funkcji czy zmiennych powinny być nawykiem przy pisaniu kodu niezależnie w jakim języku piszemy kod czy też tego jakiego używamy frameworka.