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

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme String Settings',
		'menu_title'	=> 'Strings',
		'parent_slug'	=> 'theme-general-settings',
	));

	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Footer Settings',
		'menu_title'	=> 'Footer',
		'parent_slug'	=> 'theme-general-settings',
	));

}

function theme_settings ( $request_data ) {

	// setup query argument
	$args = array( 'post_type' => 'setting' );

	$settings = get_field('site_nav', 'option');

	$result = array();
	$navs = array();

	if ( $settings ) {
    while( have_rows('site_nav', 'option') ): the_row();
      $navs[] = array(
      	'name' => get_sub_field('site_nav_tool_name', 'option'),
      	'logo' => get_sub_field('site_nav_tool_logo', 'option'),
      	'type' => get_sub_field('site_nav_tool_type', 'option'),
      );
    endwhile;
    $result[] = array('navigations' => $navs);
	}

	return $result;
}

// register the endpoint
add_action( 'rest_api_init', function () {
	register_rest_route( 'theme-settings/v1', '/settings/', array(
		'methods' => 'GET',
		'callback' => 'theme_settings',
		)
	);
});
