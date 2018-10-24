<?php
/**
 * CSLP Resources Theme Customizer
 *
 * @package CSLP_Resources
 */

function cslpres_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	/**
	 * Footer controls via
	 * @link( https://wordpress.stackexchange.com/questions/215701/ , stackExchange)
	 * and https://iamsteve.me/
	 */

	// Add footer options
	$wp_customize->add_setting( 'cslpres_footer_logo' )->transport = 'refresh';
	$wp_customize->add_setting( 'cslpres_footer_conu' )->transport = 'refresh';

	// Add footer section
	$wp_customize->add_section('footer', array(
		'title'     => __('Site Footer', 'cslpres'),
		'priority'  => 90,
	));

	// Add footer controls
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'cslpres_footer_logo_control', array(
			'label'             => __('CSLP Logo', 'cslpres'),
			'section'           => 'footer',
			'settings'          => 'cslpres_footer_logo',
	)));
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'cslpres_footer_conu_control', array(
			'label'             => __('Concordia University Logo', 'cslpres'),
			'section'           => 'footer',
			'settings'          => 'cslpres_footer_conu',
	)));

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'cslpres_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'cslpres_customize_partial_blogdescription',
		) );
	}
}
add_action( 'customize_register', 'cslpres_customize_register' );


function cslpres_customize_partial_blogname() { bloginfo( 'name' ); }
function cslpres_customize_partial_blogdescription() { bloginfo( 'description' ); }

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function cslpres_customize_preview_js() {
	wp_enqueue_script( 'cslpres-customizer', get_template_directory_uri() . '/assets/js/customizer.js', array( 'customize-preview' ), '20180619', true );
}
add_action( 'customize_preview_init', 'cslpres_customize_preview_js' );
