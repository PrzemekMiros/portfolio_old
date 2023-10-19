---
layout: layouts/post.njk
title: Shortcode w WooCommerce – jak z nich korzystać?
description: hęć dołączenia listy produktów WooCommerce do stron czy wpisów to
  częsta potrzeba, tym bardziej jeżeli sklep posiada blog lub jest to strona
  firmowa z bogatym katalogiem produktów. Pewnie wiele osób instaluje dodatkowe
  wtyczki nie wiedząc o tym, że możliwość dodania listy z odnośnikami
  i przyciskiem „dodaj do koszyka” to natywna i posiadająca mnóstwo możliwości
  funkcjonalność WooCommerce.
author: Przemek
date: 2022-08-09T09:56:16.870Z
tags:
  - wordpress
thumbnail: "#"
---
Chęć dołączenia listy produktów WooCommerce do stron czy wpisów to częsta potrzeba, tym bardziej jeżeli sklep posiada blog lub jest to strona firmowa z bogatym [katalogiem produktów](https://web.archive.org/web/20230330091138/https://mansfeld.pl/programowanie/katalog-produktow-wordpress/). Pewnie wiele osób instaluje dodatkowe wtyczki nie wiedząc o tym, że możliwość dodania listy z odnośnikami i przyciskiem „dodaj do koszyka” to natywna i posiadająca mnóstwo możliwości funkcjonalność WooCommerce.

Dodanie listy najnowszych produktów, bestsellerów lub wybranych przedmiotów z naszego sklepu jest możliwe w każdym miejscu sklepu za pomocą makr, które w środowisku WordPress określamy fachowo jako Shortcode.



Obraz-

Przykład wykorzystania shortocde w edytorze blokowym.





![](https://web.archive.org/web/20230330091138im_/https://cdn.mansfeld.pl/wp-content/uploads/2022/10/umieszczanie-shortcode-na-stronie-woocommerce.png)

Przykład wykorzystania shortocde w edytorze blokowym.

Napisałem już artykuł o tym jak stworzyć własny Shortcode. Możliwe do wykorzystania makra są już zaprogramowane w każdym sklepie WooCommerce nasze zadanie to tylko umieć zapytać o co nam chodzi.

## Shortcode Products w WooCommerce

Najprostszym makrem jest:

```
[ products ]
```

![](https://web.archive.org/web/20230330091138im_/https://cdn.mansfeld.pl/wp-content/uploads/2022/10/woocommerce-products-1-1170x481.png)

Lista produktów wygenerowana za pomocą shortcode w WooCommerce.

Products pozwala zwrócić całą listę produktów co jest mało praktyczne jeżeli chcemy zaprezentować wybraną ilość przedmiotów. Pewnie chcielibyśmy ograniczyć ilość wyświetlanych produktów do powiedzmy 16 sztuk. Wystarczy dodać opcjonalny atrybut limit:

```
[ products limit="16" ]
```

Jeżeli chcemy pokazać więcej elementów wraz z paginacją – tak jak to się dzieje na standardowych stronach sklepu – można użyć dodatkowego atrybutu pagination:

```
[ products limit="16" pagination="true"]
```

![](https://web.archive.org/web/20230330091138im_/https://cdn.mansfeld.pl/wp-content/uploads/2022/10/woocommerce-products-pagination-1170x550.png)

Lista produktów z paginacją wygenerowana za pomocą shortcode w WooCommerce.

Atrybut pagination określa wtedy ilość produktów wyświetlonych na jednej stronie. W analogiczny sposób można wykorzystać inne shortcody:

* **\[ featured_products ]** – wyświetli produkty polecane,
* **\[ sale_products ]** – wyświetli produkty, które są obecnie na wyprzedaży,
* **\[ best_selling_products ]** – wyświetli bestsellery,
* **\[ recent_products ]** – wyświetli najnowsze produkty,
* **\[ top_rated_products ]** – wyświetli produkty najlepiej oceniane.

Nie musimy znać tych wszystkich shortcodów na pamięć, bo i tak można zwrócić dowolną listę produktów za pomocą standardowego shortcode *products*. Jest to możliwe za pomocą wielu różnych atrybutów, które można dowolnie łączyć:

* **limit** określa ilość produktów do wyświetlenia – dozwolona wartość to liczba naturalna. Wartość -1 spowoduje wyświetlenie wszystkich produktów,
* **paginate** pozwala włączyć paginację – dozwolone wartości to: *true* i *false*,
* **orderby** określa sposób sortowania – dozwolone wartości to między innymi: *date*, *id*, *menu_order*, *popularity*, *rand*, *rating*, *title*,
* **order** pozwala zdefiniować, czy sortowanie ma być rosnące czy malejące – dozwolone wartości to: *asc*, *desc* (domyślna wartość to *asc*).
* **skus** pozwala przefiltrować wyniki według SKU oddzielonych przecinkami,
* **category** pozwala przefiltrować wyniki według kategorii (umieszczamy slug kategorii czyli nazwę uproszczoną) oddzielonych przecinkami,
* **tag** pozwala przefiltrować wyniki według tagów (umieszczamy slug tagu czyli nazwę uproszczoną) oddzielonych przecinkami,
* **class** pozwala dodać niestandardową klasę, która ułatwi stylowanie CSS listy,
* **on_sale** przefiltruje produkty i wyświetli przedmioty z rabatem – dozwolone wartości to *true*,
* **best_selling** spowoduje wyświetlenie się przedmiotów najlepiej sprzedających się – dozwolone wartości to *true*,
* **top_rated** przefiltruje produkty i wyświetli przedmioty najlepiej ocenione – dozwolone wartości to *true*,
* **attribute** wyświetli produkty z konkretnym atrybutem – dozwolone wartości to slug czyli uproszczona nazwa atrybutu,
* **terms** – lista termów atrybutu rozdzielonych przecinkami,
* **terms_operator** to operator dla termów „*AND”*, „*IN”* i „*NOT IN”*,
* **visibility** pozwala przefiltrować produkty według ustawień widoczności: *visible*, *catalog*, *search*, *hidden*, *featured*,
* **ids** – pozwala wyświetlić konkretne produkty według ID produktu.

Atrybuty można łączyć ze sobą w logiczny sposób i wyjątkiem są tylko trzy atrybuty on_sale, best_selling i top_rated, których nie można łączyć. Na koniec zaprezentuję parę przykładów użycia makra products:

```
[ products limit="8" category="bluzki, t-shirty" cat_operator="AND" orderby="date" order="DESC"]
```

Wyświetli 8 produktów, które są zarówno w kategorii bluzki i t-shirty. Sortowanie malejące według daty opublikowania produktu, czyli na samym początku zostaną wyświetlone najnowsze produkty.

```
[ products limit="8" category="bluzki, t-shirty" cat_operator="NOT IN" ]
```

Wyświetli 8 produktów, ze wszystkich kategorii oprócz kategorii bluzki i t-shirty.

```
[ products limit="8" category="bluzki, t-shirty" cat_operator="IN" ]
```

Wyświetli 8 produktów, które są albo w kategorii *bluzki* albo w kategorii *t-shirty*. Atrybut cat_operator można w tym przykładzie pominąć, bo *IN* to wartość domyślna.

```
[ products tag="dla-doroslych" ]
```

Wyświetli produkty z tagiem „dla-doroslych”.

## Inne shortcode w WooCommerce

WooCommerce implementuje jeszcze inne makra, które można użyć w obrębie całej witryny, na której aktywna jest wtyczka WooCommerce. W praktycznych scenariuszach rzadko się z nich korzysta ale warto wiedzieć, że mamy takie możliwości:

* **\[ product_categories ]** – wyświetli listę kategorii
* **\[ woocommerce_cart ]** – wyświetli zawartość koszyka,
* **\[ woocommerce_checkout ]** – wyświetli checkout,
* **\[ woocommerce_order_tracking ]** – umożliwi wyświetlić status zamówienia po wpisaniu szczegółów zamówienia.
* **\[ product_page id=”X” ]** – wyświetli zawartość pojedynczej strony produktowej,
* **\[ add_to_cart id=”X” ]** – wyświtli przycisk dodaj do koszyka, który doda do koszyka produkt o określonym ID.
* **\[ related_products ]** – wyświetli produkty powiązane,
* **\[ shop_messages ]** – wyświetli powiadomienia sklepowe.

### Używanie shortcodów WooCommerce w szablonach

Dowolne shortcody można też w wygodny sposób wywołać bezpośrednio w szablonach WooCommerce. Jest to przydatna metoda, kiedy tworzymy własne motywy WooCommerce lub organizujemy w kodzie zawartość strony głównej:

```
<?php echo do_shortcode("[ related_products ]"); ?>
```

### Tworzenie własnego shortcode WooCommerce

Mogą wystąpić sytuacje, w których standardowe atrybuty shortcode’ów WooCommerce będą niewystarczające i będziemy musieli stworzyć własny shortcode. W tym celu możemy skorzystać ze standardowego shortcode API dostępnego w WordPressie, którego działanie wyjaśniłem w poradniku [jak stworzyć własny shortcode WordPress](https://web.archive.org/web/20230330091138/https://mansfeld.pl/programowanie/tworzenie-makra-shortcode-wordpress/). W ciele funkcji wystarczy posłużyć się pętlą WordPressa i standardowymi (bądź nie) szablonami WooCommerce. W jednej z ostatnich realizacji, klient chciał wyświetlić produkty, których jest więcej niż 5 sztuk na stanie:

```
<?php
$args = array(
   'post_type'      => 'product',
   'posts_per_page' => 8,
   'meta_query'     => array(
      array(
         'key'     => '_stock',
         'value'   => 5,
         'compare' => '>',
         'type'    => 'NUMERIC'
      )
   )
);
$loop = new WP_Query( $args );
if ( $loop->have_posts() ) {
   while ( $loop->have_posts() ) : $loop->the_post();
      wc_get_template_part( 'content', 'product' );
   endwhile;
   } else {
   echo __( 'Brak produktów' );
   }
wp_reset_postdata();
?>
```

Całość wystarczy teraz opakować standardowym kodem generującym shortcode:

```
function moje_produkty_sc( $atts ){
   /* Treść shortcode */
 }
 add_shortcode( 'moje_produkty', 'moje_produkty_sc' );
```

### Podsumowanie

Shortcody WooCommerce to przydatne narzędzie zarówno dla dewelopera WooCommerce jak i właściciela sklepu WooCommerce, który chce umieścić w dowolnym miejscu funkcjonalne i atrakcyjne elementy związane z funkcjonalnościami WooCommerce. Na szczególną uwagę zasługuje makro *products*, które za pomocą wielu atrybutów możemy dowolnie personalizować i przefiltrować listy produktów, którą można wykorzystać w wielu sytuacjach. Przy bardziej skomplikowanych sytuacjach zawsze mamy możliwość stworzenia własnego shortcode, w którym możemy wykorzystać standardowe argumenty pętli WordPressa.

Jeżeli korzystasz z zamieszczonych w tym wpisie przykładów, usuń spację znajdującą się po otwierającym nawiasie kwadratowym i przed zamykającym nawiasem kwadratowym w każdym przykładzie shortcode.