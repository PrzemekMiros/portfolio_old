---
title: Jak wyświetlić na stronie własny typ postów?
description: Jak wyświetlić na stronie własny typ postów w Wordpressie
author: Przemek Miros
date: 2023-01-08T19:34:41.039Z
tags:
  - wordpress
thumbnail: /blog/img/wordpress-kurs-petla.jpg
---


Niestandardowe typy postów zapewniają elastyczność w tworzeniu różnych rodzajów stron bez zanieczyszczania wbudowanych wpisów i stron. Możliwości są nieograniczone: możesz tworzyć niestandardowe typy postów dla takich rzeczy, jak przepisy, dokumenty, projekty, realizacje itd… Dane te są jednak bezużyteczne, jeśli nie jesteśmy w stanie wyświetlić ich tam, gdzie chcemy. 

Dlatego użyjemy klasy WP_Query. Jest to potężne narzędzie, które może pobierać wszelkiego rodzaju dane z bazy WordPressa. Pokażę Ci jak używać klasy WP_Query do skonstruowania pętli która wyświetli nietandardowe typy postów w dowolnie wybranym przez Ciebie miejscu.

## Kiedy użyć klasy WP Query?

Klasa WP_Query jest powszechnie używana do pobierania niestandardowych danych typu post poza domyślną pętlą. Pozwala na tworzenie wielu pętli na jednej stronie. Jeśli próbujesz zmienić domyślne parametry zapytania dla strony posta, powinieneś użyć filtra pre_get_posts.

Załóżmy, że pracujesz w witrynie, która używa niestandardowego typu postu. Musisz wyświetlać najnowsze posty na swojej stronie głównej. Szybkie przypomnienie – podstawowa struktura pętli wygląda tak:

```php
<?php
$the_query = new WP_Query(); ?>
<?php if ( $the_query->have_posts() ) : ?>
  <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
    <!-- Zawartość -->
  <?php endwhile; ?>
  <?php wp_reset_postdata(); ?>
<?php endif; ?>
```

Zauważ, że klasa WP_Query przyjmuje argumenty w formacie tablicy, ale jeśli nie są one zdefiniowane, WordPress powróci do wartości domyślnych. Aby zapytać o niestandardowe typy postów, wystarczy zdefiniować post_type na liście argumentów. W naszym przypadku stworzymy nową tablicę do przechowywania naszych argumentów:

```php
<?php
$args = array(
  'post_type' => 'nazwaposta',
  'posts_per_page' => 3
);
$the_query = new WP_Query( $args ); ?>
<?php if ($the_query->have_posts()) : ?>
  <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
    <h2><?php the_title(); ?></h2>
  <?php endwhile; ?>
  <?php wp_reset_postdata(); ?>
<?php endif; ?>
```

Wygenerowany kod będzie wyglądał tak:

```html
<h2>Tytuł wpisu 1</h2>
<h2>Tytuł wpisu 2</h2>
<h2>Tytuł wpisu 3</h2>
```

Najpierw utworzyliśmy tablicę o nazwie $args, która zawiera nasze argumenty. Wewnątrz tablicy zdefiniowaliśmy post_type jako nazwaposta, a posts_per_page jako 3. Następnie rozpoczynamy pętlę, dołączając tablicę $args podczas tworzenia instancji klasy WP_Query. Następnie przeglądamy wszystkie znalezione posty i wyświetlamy tytuł każdego posta.

## Bardziej rozbudowany przykład

W następnym przykładzie dodamy więcej parametrów do naszej listy argumentów i wyświetlimy więcej niż tylko tytuł posta:

```php
<?php
$args = array(
    'post_type' => 'nazwaposta',
    'posts_per_page' => -1,
    'order' => 'ASC',
    'category_name' => 'nazwakategorii'
);
$the_query = new WP_Query( $args ); ?>
<?php if ( $the_query->have_posts() ) : ?>
  <div class="hero-container">
    <?php while($the_query->have_posts()) : $the_query->the_post();?>
      <div class="hero">
        <?php if ( get_the_post_thumbnail() ) : ?>			 
            <?php the_post_thumbnail(); ?>
        <?php endif; ?>
        <h2><?php the_title(); ?></h2>
        <?php the_content(); ?>
      </div>
    <?php endwhile; ?>
  </div>
  <?php wp_reset_postdata(); ?>
<?php endif; ?>
```

Tutaj dodaliśmy kilka dodatkowych parametrów: Ustawiłem kolejność na ASC, która wyświetli posty w kolejności alfabetycznej, zaczynając od A, ograniczyłem również kategorię. Aby uzyskać bardziej szczegółowe odniesienie do parametrów, zapoznaj się z oficjalną dokumentacją.

### Upewnij się, że slug jest poprawny

Standardem WordPressa jest używanie pojedynczych nazw dla slugów typu post, np. post i strona. Staram się postępować zgodnie z konwencją podczas konfigurowania własnego niestandardowego typu postu.

### Nie zapomnij wp_reset_postdata

Ponieważ tworzymy niestandardową pętlę poza główną pętlą WordPress, potrzebujemy wp_reset_postdata(), aby wszystko wróciło na swoje miejsce. Pominięcie tej linii spowoduje wiele błedów!

### Nie używaj zmiennej $wp_query

$wp_query to nazwa zmiennej używana w głównej pętli WordPressa. Można go nadpisać, przypisując swoją niestandardową pętlę do tej zmiennej: $wp_query = new WP_Query( $args ); Użycie wp_reset_postdata() powinno zresetować wszystko, ale generalnie unikam nazywania moich zapytań $wp_query na wszelki wypadek. $the_query , $my_query są całkowicie w porządku.