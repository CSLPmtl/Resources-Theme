<?php
/**
 * Changes to the Wordpress Admin environment
 *
 * @package CSLP_Resources
 * @author  Michael Hemingway <michael.hemingway@concordia.ca>
 */


// Removes from admin menu
add_action( 'admin_menu', 'cslpres_remove_admin_menus' );
function cslpres_remove_admin_menus() {
	remove_menu_page( 'edit-comments.php' );
}

// Removes from post and pages
add_action('init', 'cslpres_remove_comment_support', 100);
function cslpres_remove_comment_support() {
	remove_post_type_support( 'post', 'comments' );
	remove_post_type_support( 'page', 'comments' );
}

// Removes from admin bar
add_action( 'wp_before_admin_bar_render', 'cslpres_admin_bar_render' );
function cslpres_admin_bar_render() {
	global $wp_admin_bar;
	$wp_admin_bar->remove_menu('comments');
}

// Adds a cute footer to the admin interface
add_filter('admin_footer_text', 'cslpres_modify_footer_admin');
function cslpres_modify_footer_admin () {
	echo 'Developed by <a href="https://michaelhemingway">Michael Hemingway</a> with ❤ for the CLSP in Montreal, Canada.';
}

// Rename Tag to Theme, to better match what we use them for
function cslpres_tag_rename ()
{
	global $wp_taxonomies;

	// via https://wordpress.stackexchange.com/questions/258854/
	$wp_taxonomies['post_tag']->label = 'Theme';

	$wp_taxonomies['post_tag']->labels->name = 'Themes';
	$wp_taxonomies['post_tag']->labels->menu_name = 'Themes';
	$wp_taxonomies['post_tag']->labels->singular_name = 'Theme';
	$wp_taxonomies['post_tag']->labels->search_items = 'Search Themes';
	$wp_taxonomies['post_tag']->labels->popular_items = 'Most used Themes';
	$wp_taxonomies['post_tag']->labels->all_items = 'All Themes';
	$wp_taxonomies['post_tag']->labels->edit_item = 'Edit Theme';
	$wp_taxonomies['post_tag']->labels->update_item = 'Update Theme';
	$wp_taxonomies['post_tag']->labels->new_item_name = 'New theme Name';
	$wp_taxonomies['post_tag']->labels->add_or_remove_items = 'add or remove themes';
	$wp_taxonomies['post_tag']->labels->choose_from_most_used = 'Choose from the most used themes';
}
add_action( 'init', 'cslpres_tag_rename');

// Add FA icons to the sidebar
function font_awesome_icons () {
	if (is_admin()) {
		wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );

		$style = '<style>.dashicons-googleplus:before { font-family: FontAwesome, dashicons; } .dashicons-googleplus:before { content: "\f1c7"; font-size: 18px; }</style>'; // fa-file-audio-o
		echo $style;
	}
}
add_action( 'admin_head', 'font_awesome_icons', 10, 1 );

// Add a login stylesheet
function fppse_login_stylesheet() {
	wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/assets/css/login.css' );
}
add_action( 'login_enqueue_scripts', 'fppse_login_stylesheet' );

// add_filter('show_admin_bar', '__return_false');
