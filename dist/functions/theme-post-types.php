<?php

/**
 * Register a custom post type called "Parent Page".
 *
 * @see get_post_type_labels() for label keys.
 */
function cslpres_parent_page_init () {
	$labels = array(
		'name'                  => _x( 'Parent Page', 'Post type general name', 'cslpres' ),
		'singular_name'         => _x( 'Parent Page', 'Post type singular name', 'cslpres' ),
		'menu_name'             => _x( 'Parent Pages', 'Admin Menu text', 'cslpres' ),
		'name_admin_bar'        => _x( 'Parent Page', 'Add New on Toolbar', 'cslpres' ),
		'add_new'               => __( 'Add New', 'cslpres' ),
		'add_new_item'          => __( 'Add New Parent Page', 'cslpres' ),
		'new_item'              => __( 'New Parent Page', 'cslpres' ),
		'edit_item'             => __( 'Edit Parent Page', 'cslpres' ),
		'parent_item_colon'     => __( 'Parent Pages that have children:', 'cslpres' )
	);

	$args = array(
		'labels'             => $labels,
		'public'             => true,
		'hierarchical'       => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'			 => true,
		'has_archive'        => false,
		'capability_type'    => 'page',
		'menu_position'      => 20,
		'show_in_nav_menus'	 => true,
		'rewrite'            => array( 'slug' => 'parent' ),
		'supports'           => array( 'title', 'editor', 'thumbnail', 'page-attributes', 'revisions' ),
		'menu_icon'					 => 'dashicons-universal-access',
	);

	register_post_type( 'Parent Page', $args );
}
add_action( 'init', 'cslpres_parent_page_init' );


function cslpres_teacher_post_type () {
	$labels = array(
		'name'                  => _x( 'Teacher Page', 'Post type general name', 'cslpres' ),
		'singular_name'         => _x( 'Teacher Page', 'Post type singular name', 'cslpres' ),
		'menu_name'             => _x( 'Teacher Pages', 'Admin Menu text', 'cslpres' ),
		'name_admin_bar'        => _x( 'Teacher Page', 'Add New on Toolbar', 'cslpres' ),
		'add_new'               => __( 'Add New', 'cslpres' ),
		'add_new_item'          => __( 'Add New Teacher Page', 'cslpres' ),
		'new_item'              => __( 'New Teacher Page', 'cslpres' ),
		'edit_item'             => __( 'Edit Teacher Page', 'cslpres' )
	);

	$args = array(
		'labels'     				 => $labels,
		'public'   					 => true,
		'hierarchical'       => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_rest'			 => true,
		'has_archive'        => false,
		'capability_type'    => 'page',
		'menu_position'      => 20,
		'show_in_nav_menus'	 => true,
		'rewrite'            => array( 'slug' => 'teacher' ),
		'supports'           => array( 'title', 'editor', 'thumbnail', 'page-attributes', 'revisions'),
		'menu_icon' 				 => 'dashicons-welcome-learn-more',
	);
	register_post_type( 'Teacher Page', $args );
}
add_action( 'init', 'cslpres_teacher_post_type' );


function cslpres_stories_post_type () {
	$args = array(
		'public' 						=> true,
		'label'  						=> 'Stories',
		'capability_type' 	=> 'post',
		'menu_position'     => 10,
		'show_in_rest'			=> true,
		'show_in_nav_menus' => false,
		'menu_icon' 				=> 'dashicons-format-aside',
		'taxonomies' 				=> array('category', 'post_tag'),
		'supports'					=> array( 'title', 'editor', 'thumbnail', 'revisions'),
	);
	register_post_type( 'story', $args );
}
add_action( 'init', 'cslpres_stories_post_type' );

// Add a custom taxonomy for the activities
// Note that this is declared *before* the activities CPT so as to build the URL properly
// tip from https://cnpagency.com/blog/the-right-way-to-do-wordpress-custom-taxonomy-rewrites/
function cslpres_activities_categories () {
	register_taxonomy(
		'activity_cat',
		'activity',
		array(
			'label' => __( 'Categories' ),
			'rewrite' => array( 'slug' => 'category' ),
			'hierarchical' => true,
			'show_in_nav_menus' => false,
			'show_in_rest'       => true,
			'rest_base'          => 'activity_cat',
			'rest_controller_class' => 'WP_REST_Terms_Controller',
		)
	);
}
add_action( 'init', 'cslpres_activities_categories' );


// Add the activities post type
function cslpres_activities_post_type () {
	$labels = array(
		'name'              => _x( 'Activities', 'Post type general name', 'cslpres' ),
		'singular_name'     => _x( 'Activity', 'Post type singular name', 'cslpres' ),
		'menu_name'         => _x( 'Activities', 'Admin Menu text', 'cslpres' ),
		'name_admin_bar'    => _x( 'Activities', 'Add New on Toolbar', 'cslpres' ),
		'add_new'           => __( 'Add New', 'cslpres' ),
		'add_new_item'      => __( 'Add New Activity', 'cslpres' ),
		'new_item'          => __( 'New Activity', 'cslpres' ),
		'edit_item'         => __( 'Edit Activity', 'cslpres' )
	);

	$args = array(
		'public' 						=> true,
		'labels'  					=> $labels,
		'capability_type' 	=> 'post',
		'show_in_nav_menus' => false,
		'rewrite'						=> array('slug' => 'teacher/abra', 'with_front' => false),
		'menu_position'     => 10,
		'show_in_rest'			=> true,
		'menu_icon' 				=> 'dashicons-book-alt',
		'taxonomies' 				=> array( 'activity_cat', 'post_tag'),
		'supports'					=> array( 'title', 'editor', 'thumbnail', 'revisions'),

	);
	register_post_type( 'activity', $args );
}
add_action( 'init', 'cslpres_activities_post_type' );


// Until we start a blog
function remove_posts_menu() {
	remove_menu_page('edit.php');
}
add_action('admin_menu', 'remove_posts_menu');


/**
* Add REST API support to an already registered post type.
*/
add_action( 'init', 'my_custom_post_type_rest_support', 25 );
function my_custom_post_type_rest_support() {
	global $wp_post_types;

	//be sure to set this to the name of your post type!
	$post_type_name = 'parentpage';
	if( isset( $wp_post_types[ $post_type_name ] ) ) {
		$wp_post_types[$post_type_name]->show_in_rest = true;
		$wp_post_types[$post_type_name]->rest_base = $post_type_name;
		$wp_post_types[$post_type_name]->rest_controller_class = 'WP_REST_Posts_Controller';
	}
}
