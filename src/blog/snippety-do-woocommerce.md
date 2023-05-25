---
layout: layouts/post.njk
title: Przydatne snippety do Woocommerce
description: Opis
author: Przemek Miros
date: 2023-05-23T11:53:45.446Z
tags:
  - strony www
thumbnail: /blog/img/blog-woo.png
---
**Wsparcie dla Woocommerce w customowym motywie Wp**

Bardzo ważny snippet, którego możesz użyć do dodania obsługi WooCommerce do dowolnego motywu WordPress:

```
function mytheme_add_woocommerce_support() {
	add_theme_support( 'woocommerce' );
	add_theme_support( 'wc-product-gallery-zoom' );
	add_theme_support( 'wc-product-gallery-lightbox' );
	add_theme_support( 'wc-product-gallery-slider' );
} 
add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );
```

**Dodawanie niestandardowej waluty do Woocommerce**

Skopiuj i wklej ten kod do pliku functions.php motywu i zamień kod i symbol waluty na własny. Po zapisaniu zmian powinien być dostępny w ustawieniach WooCommerce.

```
add_filter( ‘woocommerce_currencies’, ‘add_my_currency’ ); 
function add_my_currency( $currencies ) { 
 $currencies[‘ABC’] = __( ‘Currency name’, ‘woocommerce’ ); 
 return $currencies;
}add_filter(‘woocommerce_currency_symbol’, ‘add_my_currency_symbol’, 10, 2); 
function add_my_currency_symbol( $currency_symbol, $currency ) 
{ 
 switch( $currency ) { 
 case ‘ABC’: 
 $currency_symbol = ‘$’; 
 break; 
 } 
 return $currency_symbol;
}
```

**Usuń meta dane produktu na stronie pojedynczego produktu**

```
remove_action( ‘woocommerce_single_product_summary’, ‘woocommerce_template_single_meta’, 40 );
```

**Usuń miejsca dziesiętne zerowe w cenie produktu**

```
add_filter( ‘woocommerce_price_trim_zeros’, ‘__return_true’ );
```

**Ukryj ilość na stronie koszyka**

```
function remove_quantity_column( $return, $product ) {
 if ( is_cart() ) return true;
}
add_filter( 'woocommerce_is_sold_individually', 'remove_quantity_column', 10, 2 );
```

**Ogranicz długość notatki zamówienia woocommerce**

```
add_filter( 'woocommerce_checkout_fields', 'limit_order_note_length' );
function limit_order_note_length( $fields ) {
 $fields['order']['order_comments']['maxlength'] = 200;
 return $fields;
}
```

**Pokaż niestandardowe pola płatności według identyfikatora produktu**

```
add_action( 'woocommerce_checkout_fields', 'hqhowdotcom_cutom_checkout_field_conditional_logic' );function hqhowdotcom_cutom_checkout_field_conditional_logic( $fields ) {foreach( WC()->cart->get_cart() as $cart_item ){
     $product_id = $cart_item['product_id'];//change 2020 to your product id
   if( $product_id == 2020 ) {
    $fields['billing']['billing_field_' . $product_id] = array(
     'label'     => __('Custom Field on Checkout for ' . $product_id, 'woocommerce'),
     'placeholder'   => _x('Custom Field on Checkout for ' . $product_id, 'placeholder', 'woocommerce'),
     'required'  => false,
     'class'     => array('form-row-wide'),
     'clear'     => true
    );
   }}// Return checkout fields.
 return $fields;}
```

**Ukryj wszystkie metody wysyłki oprócz bezpłatnej wysyłki**

```
function only_show_free_shipping_when_available( $rates, $package ) {
 $new_rates = array();
 foreach ( $rates as $rate_id => $rate ) {
  // Only modify rates if free_shipping is present.
  if ( 'free_shipping' === $rate->method_id ) {
   $new_rates[ $rate_id ] = $rate;
   break;
  }
 }if ( ! empty( $new_rates ) ) {
  //Save local pickup if it's present.
  foreach ( $rates as $rate_id => $rate ) {
   if ('local_pickup' === $rate->method_id ) {
    $new_rates[ $rate_id ] = $rate;
    break;
   }
  }
  return $new_rates;
 }return $rates;
}add_filter( 'woocommerce_package_rates', 'only_show_free_shipping_when_available', 10, 2 );
```

**Usuń kartę produktu na stronie pojedynczego produktu**

```
add_filter( ‘woocommerce_product_tabs’, ‘remove_product_tabs’, 98 );function remove_product_tabs( $tabs ) {
 // Remove the additional information tab
 unset( $tabs[‘additional_information’] ); 
 return $tabs;
}
```

**Dodaj nowy kraj do listy krajów**

Żeby dodać nowy kraj do listy krajów, użyj tego fragmentu kodu w pliku function.php folderu motywu:

```
function woo_add_my_country( $country ) {
 $country[“AEDUB”] = ‘Dubai’;
 return $country;
}add_filter( ‘woocommerce_countries’, ‘woo_add_my_country’, 10, 1 );
```

**Usuń okruszki**

Oto snippet, który pomoże Ci usunąć okruszki z Woocommerce:

```
add_action( ‘init’, ‘remove_wc_breadcrumbs’ );
function remove_wc_breadcrumbs() {
   remove_action( ‘woocommerce_before_main_content’, ‘woocommerce_breadcrumb’, 20, 0 );
}
```

**Zamień tytuł strony sklepu**

Za pomocą tego bloku kodu możesz szybko zmienić tytuł swojego sklepu. Po prostu zastąp zwracaną wartość preferowaną nazwą.

```
add_filter( ‘woocommerce_page_title’, ‘shop_page_title’);
function shop_page_title($title ) {
 if(is_shop()) {
 return “My new title”;
 }
 return $title;
}
```

**Przekieruj do strony kasy po dodaniu produktu do koszyka**

Aby poprawić konwersje sprzedażowe, możesz automatycznie przekierować do strony kasy po dodaniu produktu do koszyka za pomocą następującego kodu:

```
add_action( ‘add_to_cart_redirect’, ‘add_to_cart_checkout_redirect’, 16 );
function add_to_cart_checkout_redirect() {
    global $woocommerce;
    $checkout_url = $woocommerce->cart->get_checkout_url();
    return $checkout_url;
}
```

**Usuń kategorie produktów ze strony sklepu**

Jeśli chcesz pozbyć się określonej kategorii produktów ze strony sklepu, ten kod jest bardzo przydatny. Kod ukryje wszystkie produkty z wymienionych kategorii.

```
add_action( ‘pre_get_posts’, ‘remove_categories_shop’ );function remove_categories_shop( $q ) {if ( ! $q->is_main_query() ) return;if ( ! $q->is_post_type_archive() ) return;if ( ! is_admin() && is_shop() && ! is_user_logged_in() ) {$q->set( ‘tax_query’, array(array(‘taxonomy’ => ‘product_cat’,‘field’ => ‘slug’,// Don’t display products in these categories on the shop page
 ‘terms’ => array( ‘color’, ‘flavor’, ‘spices’, ‘vanilla’ ),‘operator’ => ‘NOT IN’)));
 }remove_action( ‘pre_get_posts’, ‘remove_categories_shop’ );}
```

**Usuwanie nazwy firmy z kasy WooCommerce**

Aby usunąć pole nazwy firmy z kasy WooCommerce, wystarczy użyć hook'a **woocommerce_checkout_fields**, a następnie zastosować filtr, aby usunąć ustawienie pola \[billing] \[billing_company] ze zwróconej tablicy.

```
add_filter( ‘woocommerce_checkout_fields’ , ‘remove_company_name’ ); function remove_company_name( $fields ) { 
   unset($fields[‘billing’][‘billing_company’]); 
   return $fields;
}
```

Uwaga: Tą samą metodą można również anulować ustawienia innych pól. Oto przykład:

```
add_filter( ‘woocommerce_checkout_fields’ , ‘custom_remove_woo_checkout_fields’ );
 
function custom_remove_woo_checkout_fields( $fields ) {// remove billing fields
 unset($fields[‘billing’][‘billing_first_name’]);
 unset($fields[‘billing’][‘billing_last_name’]);
 unset($fields[‘billing’][‘billing_company’]);
 unset($fields[‘billing’][‘billing_address_1’]);
 unset($fields[‘billing’][‘billing_address_2’]);
 unset($fields[‘billing’][‘billing_city’]);
 unset($fields[‘billing’][‘billing_postcode’]);
 unset($fields[‘billing’][‘billing_country’]);
 unset($fields[‘billing’][‘billing_state’]);
 unset($fields[‘billing’][‘billing_phone’]);
 unset($fields[‘billing’][‘billing_email’]);
 
 // remove shipping fields 
 unset($fields[‘shipping’][‘shipping_first_name’]); 
 unset($fields[‘shipping’][‘shipping_last_name’]); 
 unset($fields[‘shipping’][‘shipping_company’]);
 unset($fields[‘shipping’][‘shipping_address_1’]);
 unset($fields[‘shipping’][‘shipping_address_2’]);
 unset($fields[‘shipping’][‘shipping_city’]);
 unset($fields[‘shipping’][‘shipping_postcode’]);
 unset($fields[‘shipping’][‘shipping_country’]);
 unset($fields[‘shipping’][‘shipping_state’]);
 
 // remove order comment fields
 unset($fields[‘order’][‘order_comments’]);
 
 return $fields;
}
```

**Usuwanie pole województwo w kasie WooCommerce**

```
function remove_state_field( $fields ) {
 unset( $fields[‘state’] );
 return $fields;
}
add_filter( ‘woocommerce_default_address_fields’, ‘remove_state_field’ );
```

**Szybko przetłumacz dowolny ciąg znaków**

```
add_filter('gettext',  'translate_text');
add_filter('ngettext',  'translate_text');
 
function translate_text($translated) {
     $translated = str_ireplace('Choose and option',  'Select',  $translated);
     return $translated;
}
```

**Wyklucz kategorię z widżetu kategorii WooCommerce**

```
add_filter( 'woocommerce_product_categories_widget_args', 'woo_product_cat_widget_args' );

function woo_product_cat_widget_args( $cat_args ) {
	
	$cat_args['exclude'] = array('16');
	
	return $cat_args;
}
```

**Zamień „Brak w magazynie” na „sprzedane”**

```
add_filter('woocommerce_get_availability', 'availability_filter_func');

function availability_filter_func($availability)
{
	$availability['availability'] = str_ireplace('Out of stock', 'Sold', $availability['availability']);
	return $availability;
}
```

**Wyświetlaj „produkt już w koszyku” zamiast przycisku „dodaj do koszyka”**

```
/**
 * Change the add to cart text on single product pages
 */
add_filter( 'woocommerce_product_single_add_to_cart_text', 'woo_custom_cart_button_text' );

function woo_custom_cart_button_text() {

	global $woocommerce;
	
	foreach($woocommerce->cart->get_cart() as $cart_item_key => $values ) {
		$_product = $values['data'];
	
		if( get_the_ID() == $_product->id ) {
			return __('Already in cart - Add Again?', 'woocommerce');
		}
	}
	
	return __('Add to cart', 'woocommerce');
}

/**
 * Change the add to cart text on product archives
 */
add_filter( 'add_to_cart_text', 'woo_archive_custom_cart_button_text' );

function woo_archive_custom_cart_button_text() {

	global $woocommerce;
	
	foreach($woocommerce->cart->get_cart() as $cart_item_key => $values ) {
		$_product = $values['data'];
	
		if( get_the_ID() == $_product->id ) {
			return __('Already in cart', 'woocommerce');
		}
	}
	
	return __('Add to cart', 'woocommerce');
}
```

**Ukryj liczbę produktów w widoku kategorii**

```
add_filter( 'woocommerce_subcategory_count_html', 'woo_remove_category_products_count' );

function woo_remove_category_products_count() {
	return;
}
```

**Ustaw wymagane pola płatności na koncie**

```
add_filter( 'woocommerce_checkout_fields', 'woo_filter_account_checkout_fields' );
 
function woo_filter_account_checkout_fields( $fields ) {
	$fields['account']['account_username']['required'] = true;
	$fields['account']['account_password']['required'] = true;
	$fields['account']['account_password-2']['required'] = true;

	return $fields;
}
```

**Zmień nazwę karty produktu**

```
add_filter( 'woocommerce_product_tabs', 'woo_rename_tab', 98);
function woo_rename_tab($tabs) {

 $tabs['description']['title'] = 'More info';

 return $tabs;
}
```

**Dodaj niestandardowe pole do odmiany produktu**

```
//Display Fields
add_action( 'woocommerce_product_after_variable_attributes', 'variable_fields', 10, 2 );
//JS to add fields for new variations
add_action( 'woocommerce_product_after_variable_attributes_js', 'variable_fields_js' );
//Save variation fields
add_action( 'woocommerce_process_product_meta_variable', 'variable_fields_process', 10, 1 );

function variable_fields( $loop, $variation_data ) { ?>	
	<tr>
		<td>
			<div>
					<label></label>
					<input type="text" size="5" name="my_custom_field[]" value=""/>
			</div>
		</td>
	</tr>

<tr>
		<td>
			<div>
					<label></label>
					
			</div>
		</td>
	</tr>
<?php }
 
function variable_fields_process( $post_id ) {
	if (isset( $_POST['variable_sku'] ) ) :
		$variable_sku = $_POST['variable_sku'];
		$variable_post_id = $_POST['variable_post_id'];
		$variable_custom_field = $_POST['my_custom_field'];
		for ( $i = 0; $i < sizeof( $variable_sku ); $i++ ) :
			$variation_id = (int) $variable_post_id[$i];
			if ( isset( $variable_custom_field[$i] ) ) {
				update_post_meta( $variation_id, '_my_custom_field', stripslashes( $variable_custom_field[$i] ) );
			}
		endfor;
	endif;
}
```

**Lista kategorii produktów WooCommerce**

```
$args = array(
    'number'     => $number,
    'orderby'    => $orderby,
    'order'      => $order,
    'hide_empty' => $hide_empty,
    'include'    => $ids
);

$product_categories = get_terms( 'product_cat', $args );

$count = count($product_categories);
 if ( $count > 0 ){
     echo "<ul>";
     foreach ( $product_categories as $product_category ) {
       echo '<li><a href="' . get_term_link( $product_category ) . '">' . $product_category->name . '</li>';
        
     }
     echo "</ul>";
 }
```

**Zmień nadawcę w email Woocommerce**

```
function woo_custom_wp_mail_from_name() {
        global $woocommerce;
        return html_entity_decode( get_option( 'woocommerce_email_from_name' ) );
}
add_filter( 'wp_mail_from_name', 'woo_custom_wp_mail_from_name', 99 );

function woo_custom_wp_mail_from() {
        global $woocommerce;
        return html_entity_decode( get_option( 'woocommerce_email_from' ) );
}
add_filter( 'wp_mail_from_name', 'woo_custom_wp_mail_from_name', 99 );
```

**Zwróć identyfikatory polecanych produktów**

```
function woo_get_featured_product_ids() {
	// Load from cache
	$featured_product_ids = get_transient( 'wc_featured_products' );

	// Valid cache found
	if ( false !== $featured_product_ids )
		return $featured_product_ids;

	$featured = get_posts( array(
		'post_type'      => array( 'product', 'product_variation' ),
		'posts_per_page' => -1,
		'post_status'    => 'publish',
		'meta_query'     => array(
			array(
				'key' 		=> '_visibility',
				'value' 	=> array('catalog', 'visible'),
				'compare' 	=> 'IN'
			),
			array(
				'key' 	=> '_featured',
				'value' => 'yes'
			)
		),
		'fields' => 'id=>parent'
	) );

	$product_ids = array_keys( $featured );
	$parent_ids  = array_values( $featured );
	$featured_product_ids = array_unique( array_merge( $product_ids, $parent_ids ) );

	set_transient( 'wc_featured_products', $featured_product_ids );

	return $featured_product_ids;
}
```

**Ustaw minimalną kwotę zamówienia**

```
add_action( 'woocommerce_checkout_process', 'wc_minimum_order_amount' );
function wc_minimum_order_amount() {
	global $woocommerce;
	$minimum = 50;
	if ( $woocommerce->cart->get_cart_total(); < $minimum ) {
           $woocommerce->add_error( sprintf( 'You must have an order with a minimum of %s to place your order.' , $minimum ) );
	}
}
```

**Zamów według ceny, daty lub tytułu na stronie sklepu**

```
add_filter('woocommerce_default_catalog_orderby', 'custom_default_catalog_orderby');
 
function custom_default_catalog_orderby() {
     return 'date'; // Can also use title and price
}
```

**Dodaj odbiorcę wiadomości e-mail po zakończeniu zamówienia**

```
function woo_extra_email_recipient($recipient, $object) {
    $recipient = $recipient . ', your@email.com';
    return $recipient;
}
add_filter( 'woocommerce_email_recipient_customer_completed_order', 'woo_extra_email_recipient', 10, 2);
```

**Ustaw numer telefonu jako niewymagany**

```
add_filter( 'woocommerce_billing_fields', 'wc_npr_filter_phone', 10, 1 );
function wc_npr_filter_phone( $address_fields ) {
 $address_fields['billing_phone']['required'] = false;
 return $address_fields;
}
```

**Dodawanie niestandardowych pól do wiadomości e-mail**

Aby użyć tego kodu, wykonaj następujące kroki:

1. Dodaj ten fragment kodu do pliku functions.php motywu
2. Zmień nazwy kluczy meta we fragmencie kodu
3. Utwórz niestandardowe pole w poście zamówienia — np. klucz = wartość „Kod śledzenia” = abcdefg
4. Podczas następnej aktualizacji statusu lub podczas innego wydarzenia, które wysyła e-mail do użytkownika, zobaczy to pole w swoim e-mailu

```
add_filter(‘woocommerce_email_order_meta_keys’, ‘my_custom_order_meta_keys’);function my_custom_order_meta_keys( $keys ) {
 $keys[] = ‘Tracking Code’; // This will look for a custom field called ‘Tracking Code’ and add it to emails
 return $keys;
}
```

**Dodawanie niestandardowego pola do strony kasy**

Dodajmy nowe pole do kasy, po uwagach do zamówienia, podłączając się do następujących elementów:

```
add_action( 'woocommerce_after_order_notes', 'my_custom_checkout_field' );function my_custom_checkout_field( $checkout ) {echo '<div id="my_custom_checkout_field"><h2>' . __('My Field') . '</h2>';woocommerce_form_field( 'my_field_name', array(
        'type'          => 'text',
        'class'         => array('my-field-class form-row-wide'),
        'label'         => __('Fill in this field'),
        'placeholder'   => __('Enter something'),
        ), $checkout->get_value( 'my_field_name' ));echo '</div>';}
```

Następnie musimy sprawdzić poprawność pola po wysłaniu formularza kasy. W tym przykładzie pole jest wymagane, a nie opcjonalne:

```
add_action('woocommerce_checkout_process', 'my_custom_checkout_field_process');function my_custom_checkout_field_process() {
    // Check if set, if its not set add an error.
    if ( ! $_POST['my_field_name'] )
        wc_add_notice( __( 'Please enter something into this new shiny field.' ), 'error' );
}
```

Na koniec zapiszmy nowe pole, aby zmienić niestandardowe pola za pomocą następującego kodu:

```
add_action( 'woocommerce_checkout_update_order_meta', 'my_custom_checkout_field_update_order_meta' );function my_custom_checkout_field_update_order_meta( $order_id ) {
    if ( ! empty( $_POST['my_field_name'] ) ) {
        update_post_meta( $order_id, 'My Field', sanitize_text_field( $_POST['my_field_name'] ) );
    }
}
```

**Dodaj treść pod przyciskiem „Złóż zamówienie” w kasie WooCommerce**

```
add_action( 'woocommerce_review_order_after_submit', 'bbloomer_privacy_message_below_checkout_button' );
 
function bbloomer_privacy_message_below_checkout_button() {
   echo '<p><small>Some Text Here</small></p>';
}
```

**Dodaj tekst przed i po Dodaj do koszyka**

```
// Before Add to Cart Button: Can be done easily with woocommerce_before_add_to_cart_button hook, example:add_action( ‘woocommerce_before_add_to_cart_button’, ‘before_add_to_cart_btn’ );
 
function before_add_to_cart_btn(){
   echo ‘Some custom text here’;
}// After Add to Cart Button: If you are going to add some custom text after “Add to Cart” button, woocommerce_after_add_to_cart_button hook should help you. Example of usage this hookadd_action( ‘woocommerce_after_add_to_cart_button’, ‘after_add_to_cart_btn’ );
 
function after_add_to_cart_btn(){
    echo ‘Some custom text here’;
}
```

**Zmień kolejność pól kasy w WooCommerce**

Pierwszą rzeczą, o której musisz pamiętać, jest to, że pola są podzielone na grupy, a właściwie są 4 grupy:

* billing — adres rozliczeniowy
* wysyłka — Adres wysyłki
* konto — Logowanie do konta
* zamów — Informacje dodatkowe

Każda z tych grup zawiera pola, myślę, że wiesz które. I możesz bardzo łatwo zmienić ich kolejność za pomocą specjalnego parametru priorytetu.

Przykład — chciałbym, aby pole e-mail wyświetlało się jako pierwsze, mogę to zrobić za pomocą tych kilku linijek kodu:

```
add_filter( ‘woocommerce_checkout_fields’, ‘email_first’ );
 
function email_first( $checkout_fields ) {
 $checkout_fields[‘billing’][‘billing_email’][‘priority’] = 4;
 return $checkout_fields;
}
```

Po prostu ustawiając priorytet na niższą liczbę, ponieważ najniższa liczba to 10, więc ustawiliśmy go na 4 dla wiadomości e-mail, aby stał się pierwszym polem.

Oto lista numerów priorytetów dla pól rozliczeniowych:

* billing billing_first_name 10
* billing_last_name 20
* billing_company 30
* billing_country 40
* billing_address_1 50
* billing_address_2 60
* billing_city 70
* billing_state 80
* billing_postcode 90
* billing_phone 100
* billing_email 110

**Sprawdź, czy produkt należy do kategorii lub tagu produktu**

```
if( has_term( 4, ‘product_cat’ ) ) {
 // do something if current product in the loop is in product category with ID 4
}if( has_term( array( ‘sneakers’, ‘backpacks’ ), ‘product_cat’, 50 ) {
 // do something if product with ID 50 is either in category “sneakers” or “backpacks”
} else {
 // do something else if it isn’t
}if( has_term( 5, ‘product_tag’, 971 ) ) {
 // do something if product with ID = 971 has tag with ID = 5
}
```

**Zmień liczbę produktów wyświetlanych na stronie z listą produktów WooCommerce**

```
/**
 * Change number of products that are displayed per page (shop page)
 */
add_filter( 'loop_shop_per_page', 'new_loop_shop_per_page', 20 );

function new_loop_shop_per_page( $cols ) {
  // $cols contains the current number of products per page based on the value stored on Options -> Reading
  // Return the number of products you wanna show per page.
  $cols = 9;
  return $cols;
}
```

**Add custom check boxes fields above the terms and conditions in WooCommerce checkout**

```
add_action('woocommerce_checkout_before_terms_and_conditions', 'checkout_additional_checkboxes');
function checkout_additional_checkboxes( ){
    $checkbox1_text = __( "My first checkbox text", "woocommerce" );
    $checkbox2_text = __( "My Second checkbox text", "woocommerce" );
    ?>
    <p class="form-row custom-checkboxes">
        <label class="woocommerce-form__label checkbox custom-one">
            <input type="checkbox" class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" name="custom_one" > <span><?php echo  $checkbox1_text; ?></span> <span class="required">*</span>
        </label>
        <label class="woocommerce-form__label checkbox custom-two">
            <input type="checkbox" class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" name="custom_two" > <span><?php echo  $checkbox2_text; ?></span> <span class="required">*</span>
        </label>
    </p>
    <?php
}add_action('woocommerce_checkout_process', 'my_custom_checkout_field_process');
function my_custom_checkout_field_process() {
    // Check if set, if its not set add an error.
    if ( ! $_POST['custom_one'] )
        wc_add_notice( __( 'You must accept "My first checkbox".' ), 'error' );
    if ( ! $_POST['custom_two'] )
        wc_add_notice( __( 'You must accept "My second checkbox".' ), 'error' );
}
```

Extend admin fields in WooCommerce orders page

Sometimes you need to further extend the Admin Listing. For instance in the current problem i needed to add the serial numbers to the WooCommerce orders listing.

1. `edit_shop_order_columns` is the function where i am rearranging the fields
2. `shop_order_column` is the function where i am managing those fields and providing the values respectively.

```
add_filter( 'manage_edit-shop_order_columns', 'edit_shop_order_columns' ) ;
function edit_shop_order_columns( $columns ) {
 $columns = array(
  'cb' => '&lt;input type="checkbox" />',
  'order_number' => __( 'Order' ),
  'order_date' => __( 'Order Date' ),
  'order_status' => __( 'Status' ),
  'serial' => __( 'Serial Number' ),
  'order_total' => __( 'Order Total'),
 );
 return $columns;
}
add_action( 'manage_shop_order_posts_custom_column', 'shop_order_column', 10, 2);function shop_order_column( $column, $post_id ) {
 global $post;
 $arr = "";
 if ( 'serial' === $column ) {
  echo get_field('order_serial_number',$post_id);
 }
}add_filter( 'manage_edit-serialnumber_columns', 'edit_serialnumber_columns' );function edit_serialnumber_columns( $columns ) {$columns = array(
 'cb' => '&lt;input type="checkbox" />',
 'title' => __( 'Serial Numner' ),
 'products' => __( 'Linked Products' ),
 'SKU' => __( 'SKU' ),
 'status' => __( 'Status'),
 'date' => __( 'Added Date' )
);return $columns;
}add_action( 'manage_serialnumber_posts_custom_column', 'realestate_column', 10, 2);
function realestate_column( $column, $post_id ) {global $post;
 
 $arr = "";
 if ( 'products' === $column ) {
  $productlist = get_field('products',$post_id);
  foreach($productlist as $row) {
   $arr[] = get_the_title($row);
  }
  echo implode(",",$arr);
 }
 
 $sku = "";
 if ( 'SKU' === $column ) {
  $productlist = get_field('products',$post_id);
  foreach($productlist as $row) {
   $product = wc_get_product( $row );
   echo $row;
   $sku[] = $product->get_sku();
  }
  echo implode(",",$sku);
 }if ( 'status' === $column ) {
  echo get_field('available',$post_id);
 }}
```

**Wyłącz zmienny przedział cenowy produktów WooCommerce**

```
add_filter( 'woocommerce_variable_price_html', 'variation_price_format_min', 9999, 2 );
  
function variation_price_format_min( $price, $product ) {
   $prices = $product->get_variation_prices( true );
   $min_price = current( $prices['price'] );
   $price = sprintf( __( 'From: %1$s', 'woocommerce' ), wc_price( $min_price ) );
   return $price;
}
```

**Ukryj kategorię WooCommerce w wynikach wyszukiwania**

```
function hide_rentals_from_search_pre_get_posts( $query ) {
 
 if (!is_admin() && $query->is_main_query() && $query->is_search()) {
 
 $query->set( ‘post_type’, array( ‘product’ ) );//in the current case i want to hide “rental” category, you can easily replace this with some other product category slug
 $tax_query = array(
 array(
 ‘taxonomy’ => ‘product_cat’,
 ‘field’ => ‘slug’,
 ‘terms’ => ‘rentals’, 
 ‘operator’ => ‘NOT IN’,
 ),
 );$query->set( ‘tax_query’, $tax_query );
 }
 
}add_action( ‘pre_get_posts’, ‘hide_rentals_from_search_pre_get_posts’);
```

**Usuń pola WooCommerce Checkout**

```
add_filter( 'woocommerce_checkout_fields' , 'custom_override_checkout_fields' );
  
function custom_override_checkout_fields( $fields ) { 
    unset($fields['billing']['billing_first_name']);
    unset($fields['billing']['billing_last_name']);
    unset($fields['billing']['billing_company']);
    unset($fields['billing']['billing_address_1']);
    unset($fields['billing']['billing_address_2']);
    unset($fields['billing']['billing_city']);
    unset($fields['billing']['billing_postcode']);
    unset($fields['billing']['billing_country']);
    unset($fields['billing']['billing_state']);
    unset($fields['billing']['billing_phone']);
    unset($fields['order']['order_comments']);
    unset($fields['billing']['billing_email']);
    unset($fields['account']['account_username']);
    unset($fields['account']['account_password']);
    unset($fields['account']['account_password-2']);
    return $fields;
}
```

Możesz dostosować powyższy kod, powiedzmy, że chcesz usunąć tylko pola adresu, wtedy kod wygląda tak:

```
add_filter( 'woocommerce_checkout_fields' , 'custom_override_checkout_fields' );
  
function custom_override_checkout_fields( $fields ) { 
    unset($fields['billing']['billing_address_1']);
    unset($fields['billing']['billing_address_2']);
    unset($fields['billing']['billing_city']);
    unset($fields['billing']['billing_postcode']);
    unset($fields['billing']['billing_country']);
    unset($fields['billing']['billing_state']);
    return $fields;
}
```

**Spraw, by koszyk zakupów Woocommerce był responsywny**

Dodaj ten kod do arkusza styli Woocommerce

```
@media screen and (max-width: 766px) and (min-width: 300px) { /* START Make the cart table responsive */@media screen and (max-width: 600px) { / Force table to not be like tables anymore /
.woocommerce table.shop_table,
.woocommerce table.shop_table thead,
.woocommerce table.shop_table tbody,
.woocommerce table.shop_table th,
.woocommerce table.shop_table td,
.woocommerce table.shop_table tr {
display: block;
} / Hide table headers (but not display: none;, for accessibility) /
.woocommerce table.shop_table thead tr {
position: absolute;
top: -9999px;
left: -9999px;
} .woocommerce table.shop_table tr {
/border: 1px solid #d2d3d3; /
} .woocommerce table.shop_table td {
/ Behave like a “row” /
border: 1px solid #d2d3d3;
position: relative;
padding-left: 50% !important;
} .woocommerce table.shop_table {
border: none;
} .woocommerce table.shop_table td.product-spacer {
border-color: #FFF;
height: 10px;
} .woocommerce table.shop_table td:before {
/ Now like a table header /
position: absolute;
/ Top/left values mimic padding /
top: 6px;
left: 6px;
width: 25%;
padding-right: 10px;
white-space: nowrap;
} /
Label the data /
.woocommerce table.shop_table td.product-remove:before {
content: “DELETE”;
} .woocommerce table.shop_table td.product-thumbnail:before {
content: “IMAGE”;
} .woocommerce table.shop_table td.product-name:before {
content: “PRODUCT”;
} .woocommerce table.shop_table td.product-price:before {
content: “PRICE”;
} .woocommerce table.shop_table td.product-quantity:before {
content: “QUANTITY”;
} .woocommerce table.shop_table td.product-subtotal:before {
content: “SUBTOTAL”;
} .woocommerce table.shop_table td.product-total:before {
content: “TOTAL”;
} .woocommerce .quantity,
.woocommerce #content .quantity,
.woocommerce .quantity,
.woocommerce #content .quantity {
margin: 0;
} .woocommerce table.cart td.actions,
.woocommerce #content table.cart td.actions {
text-align: left;
border:0;
padding-left: 0 !important;
} .woocommerce table.cart td.actions .button.alt,
.woocommerce #content table.cart td.actions .button.alt {
float: left;
margin-top: 10px;
} .woocommerce table.cart td.actions div,
.woocommerce #content table.cart td.actions div,
.woocommerce table.cart td.actions input,
.woocommerce #content table.cart td.actions input {
margin-bottom: 10px;
} .woocommerce .cart-collaterals .cart_totals {
float: left;
width: 100%;
text-align: left;
} .woocommerce .cart-collaterals .cart_totals th,
.woocommerce .cart-collaterals .cart_totals td {
border:0 !important;
} .woocommerce .cart-collaterals .cart_totals table tr.cart-subtotal td,
.woocommerce .cart-collaterals .cart_totals table tr.shipping td,
.woocommerce .cart-collaterals .cart_totals table tr.total td {
padding-left: 6px !important;
} .woocommerce table.shop_table tr.cart-subtotal td,
.woocommerce table.shop_table tr.shipping td,
.woocommerce table.shop_table tr.total td,
.woocommerce table.shop_table.order_details tfoot th,
.woocommerce table.shop_table.order_details tfoot td {
padding-left: 6px !important;
border:0 !important;
} .woocommerce table.shop_table tbody {
padding-top: 10px;
} .woocommerce .col2-set .col-1,
.woocommerce .col2-set .col-1,
.woocommerce .col2-set .col-2,
.woocommerce .col2-set .col-2,
.woocommerce form .form-row-first,
.woocommerce form .form-row-last,
.woocommerce form .form-row-first,
.woocommerce form .form-row-last {
float: none;
width: 100%;
} .woocommerce .order_details ul,
.woocommerce .order_details ul,
.woocommerce .order_details,
.woocommerce .order_details {
padding:0;
} .woocommerce .order_details li,
.woocommerce .order_details li {
clear: left;
margin-bottom: 10px;
border:0;
} / make buttons full width, text wide anyway, improves effectiveness /
#content table.cart td.actions .button,
.woocommerce #content table.cart td.actions .input-text,
.woocommerce #content table.cart td.actions input,
.woocommerce table.cart td.actions .button,
.woocommerce table.cart td.actions .input-text,
.woocommerce table.cart td.actions input,
.woocommerce #content table.cart td.actions .button,
.woocommerce #content table.cart td.actions .input-text,
.woocommerce #content table.cart td.actions input,
.woocommerce table.cart td.actions .button,
.woocommerce table.cart td.actions .input-text,
.woocommerce table.cart td.actions input {
width: 100%;
font-size:12px !important;
} .woocommerce tfoot{
display:block !important;
}
.woocommerce tfoot td{
width:100% !important;
display:block !important;
}
/ keep coupon at 50% /
#content table.cart td.actions .coupon .button,
.woocommerce #content table.cart td.actions .coupon .input-text,
.woocommerce #content table.cart td.actions .coupon input,
.woocommerce table.cart td.actions .coupon .button,
.woocommerce table.cart td.actions .coupon .input-text,
.woocommerce table.cart td.actions .coupon input,
.woocommerce #content table.cart td.actions .coupon .button,
.woocommerce #content table.cart td.actions .coupon .input-text,
.woocommerce #content table.cart td.actions .coupon input,
.woocommerce table.cart td.actions .coupon .button,
.woocommerce table.cart td.actions .coupon .input-text,
.woocommerce table.cart td.actions .coupon input {
width: 48%;
font-size:12px !important;
} / clean up how coupon inputs display /
#content table.cart td.actions .coupon,
.woocommerce table.cart td.actions .coupon,
.woocommerce #content table.cart td.actions .coupon,
.woocommerce table.cart td.actions .coupon {
margin-top: 1.5em;
} #content table.cart td.actions .coupon .input-text,
.woocommerce table.cart td.actions .coupon .input-text,
.woocommerce #content table.cart td.actions .coupon .input-text,
.woocommerce table.cart td.actions .coupon .input-text {
margin-bottom: 1em;
} / remove cross sells, they interfere with flow between cart and cart totals + shipping calculator /
.woocommerce .cart-collaterals .cross-sells,
.woocommerce .cart-collaterals .cross-sells {
display: none;
} }
/* END Make the cart table responsive */ }
```

**Sprawdź, czy użytkownik zapłacił już za produkt w WooCommerce**

```
function CheckWhetherUserPaid() {$bought = false; // Set HERE ine the array your specific target product IDs$prod_arr = array( '21', '67' ); // Get all customer orders$customer_orders = get_posts( array(
 'numberposts' => -1,
 'meta_key' => '_customer_user',
 'meta_value' => get_current_user_id(),
 'post_type' => 'shop_order', // WC orders post type
 'post_status' => 'wc-completed' // Only orders with status “completed”
));foreach ( $customer_orders as $customer_order ) {// Updated compatibility with WooCommerce 3+
 $order_id = method_exists( $order, 'get_id' ) ? $order->get_id() : $order->id;
 $order = wc_get_order( $customer_order ); // Iterating through each current customer products bought in the order
 foreach ($order->get_items() as $item) {// WC 3+ compatibility
  if ( version_compare( WC_VERSION, '3.0', '<' ) ) { $product_id = $item['product_id']; } else { $product_id = $item->get_product_id();}// Your condition related to your 2 specific products Ids
 if ( in_array( $product_id, $prod_arr ) ) {
  $bought = true;
 }
}}// return “true” if one the specifics products have been bought before by customer
return $bought;}
```

**Tryb wakacji / wstrzymania WooCommerce**

```
// Trigger Holiday Mode
add_action ('init', 'woocommerce_holiday_mode');
 
 
// Disable Cart, Checkout, Add Cart
function woocommerce_holiday_mode() {
   remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10 );
   remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
   remove_action( 'woocommerce_proceed_to_checkout', 'woocommerce_button_proceed_to_checkout', 20 );
   remove_action( 'woocommerce_checkout_order_review', 'woocommerce_checkout_payment', 20 );
   add_action( 'woocommerce_before_main_content', 'wc_shop_disabled', 5 );
   add_action( 'woocommerce_before_cart', 'wc_shop_disabled', 5 );
   add_action( 'woocommerce_before_checkout_form', 'wc_shop_disabled', 5 );
}
 
 
// Show Holiday Notice
function wc_shop_disabled() {
        wc_print_notice( 'Our Online Shop is Closed Today :)', 'error');
}
```

**Odmów realizacji transakcji, jeśli użytkownik ma oczekujące zamówienia**

```
Deny Checkout if User Has Pending Ordersadd_action('woocommerce_after_checkout_validation', 'deny_checkout_user_pending_orders');
 
function deny_checkout_user_pending_orders( $posted ) {
 
 global $woocommerce;
 $checkout_email = $posted['billing_email'];
 $user = get_user_by( 'email', $checkout_email );
  
 if ( ! empty( $user ) ) {
  $customer_orders = get_posts( array(
    'numberposts' => -1,
    'meta_key'    => '_customer_user',
    'meta_value'  => $user->ID,
    'post_type'   => 'shop_order', // WC orders post type
    'post_status' => 'wc-pending' // Only orders with status "completed"
  ) );
  foreach ( $customer_orders as $customer_order ) {
    $count++;
  }
  if ( $count > 0 ) {
     wc_add_notice( 'Sorry, please pay your pending orders first by logging into your account', 'error');
  }
 }
 
}
```

**Zmień pole autofokusa w kasie WooCommerce**

```
add_filter( 'woocommerce_checkout_fields', 'change_autofocus_checkout_field' );
 
function change_autofocus_checkout_field( $fields ) {
 $fields['billing']['billing_first_name']['autofocus'] = false;
 $fields['billing']['billing_email']['autofocus'] = true;
 return $fields;
}
```

**Pokaż wiadomość w kasie po wybraniu kraju**

```
// Part 1
// Add the message notification and place it over the billing section
// The "display:none" hides it by default
  
add_action( 'woocommerce_before_checkout_billing_form', 'echo_notice_shipping' );
  
function echo_notice_shipping() {
echo '<div class="shipping-notice woocommerce-info" style="display:none">Please allow 5-10 business days for delivery after order processing.</div>';
}
  
// Part 2
// Show or hide message based on billing country
// The "display:none" hides it by default
  
add_action( 'woocommerce_after_checkout_form', 'show_notice_shipping' );
  
function show_notice_shipping(){
     
    ?>
  
    <script>
        jQuery(document).ready(function($){
  
            // Set the country code (That will display the message)
            var countryCode = 'FR';
  
            $('select#billing_country').change(function(){
  
                selectedCountry = $('select#billing_country').val();
                  
                if( selectedCountry == countryCode ){
                    $('.shipping-notice').show();
                }
                else {
                    $('.shipping-notice').hide();
                }
            });
  
        });
    </script>
  
    <?php
     
}
```

**Wyłącz metodę płatności dla określonej kategorii**

```
add_filter( 'woocommerce_available_payment_gateways', 'unset_gateway_by_category' );
  
function unset_gateway_by_category( $available_gateways ) {
    if ( is_admin() ) return $available_gateways;
    if ( ! is_checkout() ) return $available_gateways;
    $unset = false;
    $category_ids = array( 8, 37 ); //change category id here 
    foreach ( WC()->cart->get_cart_contents() as $key => $values ) {
        $terms = get_the_terms( $values['product_id'], 'product_cat' );    
        foreach ( $terms as $term ) {        
            if ( in_array( $term->term_id, $category_ids ) ) {
                $unset = true;
                break;
            }
        }
    }
    if ( $unset == true ) unset( $available_gateways['cheque'] );
    return $available_gateways;
}
```

**Ogranicz pole uwag do zamówienia WooCommerce do określonej liczby znaków**

```
add_filter( 'woocommerce_checkout_fields', 'filter_checkout_fields' ); 
function filter_checkout_fields( $fields ) { 
   $fields['order']['order_comments']['maxlength'] = 180; 
   return $fields;
}
```

**Zaktualizuj główną cenę produktu po wybraniu wariantu produktu**

```php
add_action( 'woocommerce_variable_add_to_cart', 'custom_update_price_with_variation_price' );
  
function custom_update_price_with_variation_price() {
   global $product;
   $price = $product->get_price_html();
   wc_enqueue_js( "      
      $(document).on('found_variation', 'form.cart', function( event, variation ) {   
         if(variation.price_html) $('.summary > p.price').html(variation.price_html);
         $('.woocommerce-variation-price').hide();
      });
      $(document).on('hide_variation', 'form.cart', function( event, variation ) {   
         $('.summary > p.price').html('" . $price . "');
      });
   " );
}
```