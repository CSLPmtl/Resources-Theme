<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package CSLP_Resources
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function cslpres_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'cslpres_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function cslpres_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'cslpres_pingback_header' );

// USELESS
// via https://github.com/nCrafts/json-rest-api-filter-fields
// add_filter( 'json_prepare_post', 'json_rest_api_filter_fields_post', 10, 3 );
// function json_rest_api_filter_fields_post( $data, $post, $context ) {
// 	if ( !empty($_GET['fields']) )
// 	{
// 		$new_data = array();
// 		$fields = explode(',', $_GET['fields']);
// 		if ( empty($fields) || count($fields)==0 ) { return $data; }
// 		foreach ($data as $key => $value) {
// 			if (in_array($key, $fields)){$new_data[$key] = $value;}
// 		}
// 	}
// 	return isset($new_data) ? $new_data : $data;
// }

// add_filter( 'json_prepare_taxonomy', 'json_rest_api_filter_fields_taxonomy', 10, 3 );
// function json_rest_api_filter_fields_taxonomy( $data, $post, $context ) {
// 	if ( !empty($_GET['fields']) )
// 	{
// 		$new_data = array();
// 		$fields = explode(',', $_GET['fields']);
// 		if ( empty($fields) || count($fields)==0 ) { return $data; }
// 		foreach ($data as $key => $value) {
// 			if (in_array($key, $fields)){$new_data[$key] = $value;}
// 		}
// 	}
// 	return isset($new_data) ? $new_data : $data;
// }