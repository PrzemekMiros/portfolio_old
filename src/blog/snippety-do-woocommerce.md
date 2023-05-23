---
layout: layouts/post.njk
title: Snippety do Woocommerce
description: Opis
author: Przemek Miros
date: 2023-05-23T11:53:45.446Z
thumbnail: "#"
---
## Wsparcie dla Woocommerce w customowym motywie Wp

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

## Adding Custom Currency to WooCommerce

WooCommerce by default To add a custom currency in WooCommerce 2.0+, copy and paste this code in your theme functions.php file and swap out the currency code and symbol with your own. After saving changes, it should be available from your WooCommerce settings.

```

```

## Remove product meta on single product page

```

```

## Remove zero decimals in product price

```

```

## Hide quantity on cart page

```

```

## Limit woocommerce order note length

```

```

## Show custom billing checkout fields by product id

```

```

## Hide all shipping method but free shipping

In the user experience, you should automatically apply the free shipping method whenever possible, which helps customers feel more comfortable with your purchase.

The code snippet below will help you do this:

```

```

## Remove product tab on single product page

```

```

## **Add a new country to countries list**

To add a new country to the countries list, use this snippet inside the function.php file of your theme folder:

```

```

## **Remove the breadcrumbs**

If you want to remove the breadcrumbs, here is the quick snippet to help you remove woocommerce breadcrumbs from your pages:

```

```

## **Replace shop page title**

Using this block of code you can quickly replace the title of your shop. Just substitute the return value with your preferred name.

```

```

## **Redirect to checkout page after add to cart**

To improve the sales conversions , you can automatically redirect to checkout page after adding product to cart by using the following code:

```

```

## **Remove product categories from shop page**

If you want to get rid of a certain product category from your shop page, this code is very useful. The code will hide all the products from the mentioned categories.

```

```

## Removing company name from WooCommerce checkout

To remove the company name field from the WooCommerce checkout, all you need is use the hook **woocommerce_checkout_fields** and then apply a filter to unset the \[billing] \[billing_company] field from the array returned.

```

```

Note: You can also unset other fields using the same method. Here is another example:

```

```

## Remove the state field in the WooCommerce Checkout

```

```

## Quickly translate any string

```

```

## Exclude a category from the WooCommerce category widget

```

```

## Replace “Out of stock” by “sold”

```

```

## Display “product already in cart” instead of “add to cart” button

```

```

## Hide products count in category view

```

```

## Make account checkout fields required

```

```

## Rename a product tab

```

```

## Add a custom field to a product variation

```

```

## List WooCommerce product Categories

```

```

## Change “from” email address

```

```

## Return featured products ids

```

```

## Set minimum order amount

```

```

## Order by price, date or title on shop page

```

```

## Add email recipient when order completed

```

```

## Make phone number not required

```

```

## Adding Custom Fields To Emails

To use this code, follow these steps:

1. Add this snippet to your theme’s functions.php file
2. Change the meta key names in the snippet
3. Create a custom field in the order post — e.g. key = “Tracking Code” value = abcdefg
4. When next updating the status, or during any other event which emails the user, they will see this field in their email

```

```

## Adding a Custom Field to Checkout page

Let’s add a new field to checkout, after the order notes, by hooking into the following:

```

```

Next we need to validate the field when the checkout form is posted. For this example the field is required and not optional:

```

```

Finally, let’s save the new field to order custom fields using the following code:

```

```

## Add Content Under “Place Order” Button at WooCommerce Checkout

```

```

## Add Text Before and After Add to Cart

```

```

## Reorder Checkout Fields in WooCommerce

First thing you have to keep in mind, that fields are separated into groups, and actually there are 4 groups:

* billing — Billing Address
* shipping — Shipping Address
* account — Account Login
* order — Additional information

Each of these groups contains fields, I think you know which ones. And you can super easily reorder them with a special priority parameter.

Example — I would like to make the email field the first one to display, I can do it with these couple lines of code:

```

```

Just by setting the priority lower in number, as the lowest number is 10, so we made it 4 for email so it becomes the first field.

Here are the priority number list for billing fields:

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

## Check if Product Belongs to a Product Category or Tag

```

```

## Change number of products display in WooCommerce product listing page

```

```

## Add custom check boxes fields above the terms and conditions in WooCommerce checkout

```

```

## Extend admin fields in WooCommerce orders page

Sometimes you need to further extend the Admin Listing. For instance in the current problem i needed to add the serial numbers to the WooCommerce orders listing.

1. `edit_shop_order_columns` is the function where i am rearranging the fields

2. `shop_order_column` is the function where i am managing those fields and providing the values respectively.

```

```

## Disable WooCommerce Variable product price range

Are you looking to disable the variable product price range which normally looks like $100-$200. With the snippet of code give below you will be able to hide the price range, and replace it with “From: ” in front of the minimum price. All you need is pasting the following code in your child theme’s functions.php

```

```

## Hide a WooCommerce Category from Search Result

```

```

## Remove WooCommerce Checkout fields

```

```

You can customize the above code, let say you want to remove only the address fields then the code will become:

```

```

## Make Woocommerce Shopping Cart responsive

Use the code below and include this in your stylesheet:

```

```

## Check whether user has paid for a product already in WooCommerce

```

```

## WooCommerce Holiday/Pause Mode

```

```

## Deny Checkout if User Has Pending Orders

```

```

## Change Autofocus Field at WooCommerce Checkout

```

```

## Show Message After Country Selection @ Checkout

```

```

## Disable Payment Method for Specific Category

```

```

## Restrict WooCommerce order notes field to a number of characters

```

```

## Remove Checkout Terms & Conditions conditionally in WooCommerce

```

```

And… that’s it! I hope you find will these snippets useful, they were all tested and they all work fine, but if you experience any trouble please let me know the comments section. Have fun!

<!--EndFragment-->