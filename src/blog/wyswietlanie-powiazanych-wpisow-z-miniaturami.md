---
title: Wyświetlanie powiązanych wpisów z miniaturami
description: Wyświetlanie powiązanych wpisów z miniaturami w Wordpressie
date: 2023-01-18T19:34:41.039Z
author: Przemek Miros
tags: 
  - wordpress
thumbnail: /blog/img/wordpress-kurs-powiazane-wpisy.jpg
---

W dzisiejszych czasach prawie wszystkie strony internetowe mają sekcję blogów i wszystkie firmy starają się przyciągnąć więcej odwiedzających dzięki nim.

Czasami proste triki sa bardzo skuteczne. Jednym z nich jest nawigacja po wpisach. Najpierw musimy otworzyć nasze pliki szablonów i znaleźć plik o nazwie single.php. Ten plik odpowiada za wyświetlanie pojedyńczego posta.

W każdym szablonie znajduje się domyślny kod który odpowiada za wyświetlanie poprzedniego i kolejnego wpisu. Domyślny tag templatki to the_post_navigation(). Ta funkcja pokazuje tylko następne i poprzednie nazwy postów z linkiem.

Najpierw skomentuj domyślny kod nawigacji po wpisie WordPress (użyj „//” na początku linii lub na początku użyj „/*”, a na końcu użyj „*/”.).

```html
//the_post_navigation();
/*the_post_navigation();*
```

Następnie musimy po prostu oddzielić następny i poprzedni link. Aby to zrobić, musimy zrozumieć te funkcje.

```php
get_previous_post();
get_next_post()
```

Myślę, że już rozumiesz, czym one są, podobnie jak ich nazwa, mają one pobierać funkcje następnego i poprzedniego wpisu. Wystarczy wskazać im załączone obrazy i tytuły. Oto nasz kod:

```php
//Previus post
$prev_post = get_previous_post();
/*title*/
$prev_title = get_the_title( $prev_post-&gt;ID); 
/*image*/
$prev_thumbnail = get_the_post_thumbnail( $prev_post-&gt;ID, 'large'); 
//Next post
$next_post = get_next_post();
/*title*/
$next_title = get_the_title( $next_post-&gt;ID); 
/*image*/
$next_thumbnail = get_the_post_thumbnail( $next_post-&gt;ID, 'large'); 
//you can change large to small...
```

Teraz mamy wszystkie rzeczy, których możemy użyć. Musimy tylko się do nich odwołać.

```php
$args = array(
   'prev_text'  =&gt; '&lt;div class="post-nav-image"&gt;'.$prev_thumbnail.'&lt;span&gt;'.$prev_title.'&lt;/span&gt;&lt;/div&gt;',
   'next_text'  =&gt; '&lt;div class="post-nav-image"&gt;'.$next_thumbnail.'&lt;span&gt;'.$next_title.'&lt;/span&gt;&lt;/div&gt;'
);
the_post_navigation( $args )
```

Teraz zrobiliśmy edycję domyślnej funkcji WordPressa z argumentami. Możesz odświeżyć stronę żeby zobaczyć nazwy następnego i poprzedniego posta oraz miniatury. 