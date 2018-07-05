<?php
/**
 * CSLP Resources functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package CSLP_Resources
 */




if ( ! function_exists( 'cslpres_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function cslpres_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on CSLP Resources, use a find and replace
		 * to change 'cslpres' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'cslpres', get_template_directory() . '/languages' );

		add_theme_support( 'title-tag' );

		add_theme_support( 'post-thumbnails',
			array( 'page', 'post', 'Teacher Page', 'Parent Page' )
		);

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-global' => esc_html__( 'Global Menu', 'cslpres' ),
			'menu-tools'  => esc_html__( 'All tools', 'cslpres' ),
			'menu-links'  => esc_html__( 'Useful Links', 'cslpres' ),
			'menu-footer' => esc_html__( 'Footer', 'cslpres' ),
			'menu-local'  => esc_html__( 'Local', 'cslpres' ),
		) );

		add_theme_support( 'html5', array(
			'search-form',
			'gallery',
			'caption',
		) );

		add_theme_support( 'customize-selective-refresh-widgets' );

		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'cslpres_setup' );


/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function cslpres_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'cslpres_content_width', 640 );
}
add_action( 'after_setup_theme', 'cslpres_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function cslpres_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'cslpres' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'cslpres' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'cslpres_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function cslpres_scripts() {
	// equeue CSS
	wp_enqueue_style( 'cslpres-style', get_template_directory_uri() . '/assets/css/style.css' );

	// smoothscrolling!
	wp_enqueue_script( 'smoothscroll', 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14/dist/smooth-scroll.polyfills.min.js', array(), false, true );

	// Utils
	wp_enqueue_script( 'lodash', 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.core.min.js', array(), false, true );

	// site logic
	if (CSLP_DEV) {
		wp_enqueue_script( 'cslpres-main', get_template_directory_uri() . '/assets/js/all.js', array('smoothscroll', 'lodash'), date("YmdHis"), true );
	} else {
		wp_enqueue_script( 'cslpres-main', get_template_directory_uri() . '/assets/js/all.min.js', array('smoothscroll', 'lodash'), CSLPRES_VER, true );
	}

	// stories thing
	if ( is_page_template('page-stories.php') ) {
		// load 'https://cdn.jsdelivr.net/npm/vue' in prod
		// wp_enqueue_script( 'vue', 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js', array(), '2.5.16', true);
		wp_enqueue_script( 'axios', 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js', array(), '0.18.0', true );
		wp_enqueue_script( 'cslpres-stories', get_template_directory_uri() . '/assets/js/stories.js', array('axios'), CSLPRES_VER, true );
	}
}
add_action( 'wp_enqueue_scripts', 'cslpres_scripts' );

// add editor styles
function clspres_add_editor_styles() {
    add_editor_style( get_stylesheet_directory_uri() . '/assets/css/editor-style.css' );
}
add_action( 'admin_init', 'clspres_add_editor_styles' );



require get_template_directory() . '/inc/cleanup.php';
require get_template_directory() . '/inc/admin-interface.php';
require get_template_directory() . '/inc/custom-header.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/template-functions.php';
require get_template_directory() . '/inc/customizer.php';
require get_template_directory() . '/inc/post-types.php';
require get_template_directory() . '/inc/plugins.php';


if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}