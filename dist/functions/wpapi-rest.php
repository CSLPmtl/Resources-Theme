<?php // Registers a custom endpoint to serve the ACF options pages' settings

function cslpres_settings ( $data ) {

  if( function_exists('acf_add_options_page') ) {
    $settings = array();
    if ( empty( $posts ) ) {
      return null;
    }
  }
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'theme-settings/v1', '/(?P<id>\d+)', array(
		'methods' => 'GET',
		'callback' => 'cslpres_settings',
	) );
} );
