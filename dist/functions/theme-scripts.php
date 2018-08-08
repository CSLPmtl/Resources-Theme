<?php

/**
 * Enqueue scripts and styles.
 * @package CSLP_Resources
 */

function cslpres_scripts() {
	$tdu = get_template_directory_uri();

	// equeue CSS
	wp_enqueue_style( 'cslpres-style', $tdu . '/assets/css/style.css' );

	// smoothscrolling!
	wp_enqueue_script( 'smoothscroll', 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14/dist/smooth-scroll.polyfills.min.js', array(), false, true );

	// Utils
	wp_enqueue_script( 'cslp-lodash', 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.core.min.js', array(), false, true );

	// site logic
	if (CSLPRES_DEV) {
		wp_enqueue_script( 'cslpres-main', $tdu . '/assets/js/common.js', array('smoothscroll', 'cslp-lodash'), date("YmdHis"), true );
		wp_enqueue_script( 'cslpres-anim', $tdu . '/assets/js/animation.js', array(), date("YmdHis"), true );
	} else {
		wp_enqueue_script( 'cslpres-main', $tdu . '/assets/js/min/common.min.js', array('smoothscroll', 'cslp-lodash'), CSLPRES_VER, true );
		wp_enqueue_script( 'cslpres-anim', $tdu . '/assets/js/min/animation.min.js', array(), CSLPRES_VER, true );
	}

	wp_enqueue_script( 'cslpres-menu', $tdu . '/assets/js/min/menu.min.js', array(), CSLPRES_VER, true );

	if (is_front_page()) {
		wp_enqueue_script( 'cslpres-home', $tdu . '/assets/js/min/home.min.js', array(), CSLPRES_VER, true );
	}

	// ABRA Stories Module
	if ( is_page_template('page-stories.php') ) {
		wp_enqueue_script( 'axios', 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js', array(), '0.18.0', true );
		if (CSLPRES_DEV) {
			wp_enqueue_script( 'cslpres-stories', $tdu . '/assets/js/stories.js', array('axios'), '', true );
		} else {
			wp_enqueue_script( 'cslpres-stories', $tdu . '/assets/js/min/stories.min.js', array('axios'), CSLPRES_VER, true );
		}
	}

	// TODO: namespace these to ABRA
	// activities thing
	if ( is_page_template('page-activities.php') ) {
		wp_enqueue_script( 'axios', 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js', array(), '0.18.0', true );
		if (CSLPRES_DEV) {
			$now = (new \DateTime())->format('Y-m-d H:i:s');
			wp_enqueue_script( 'cslpres-activities', $tdu . '/assets/js/activities.js', array('axios'), $now, true );
		} else {
			wp_enqueue_script( 'cslpres-activities', $tdu . '/assets/js/min/activities.min.js', array('axios'), CSLPRES_VER, true );
		}
	}
}
add_action( 'wp_enqueue_scripts', 'cslpres_scripts' );


// Enqueue editor styles
function clspres_add_editor_styles() {
	// disabled temporarily to integrate Gutenberg
	// add_editor_style( get_stylesheet_directory_uri() . '/assets/css/editor-style.css' );
}
add_action( 'admin_init', 'clspres_add_editor_styles' );
