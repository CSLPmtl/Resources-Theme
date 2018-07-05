<?php

// via https://wordpress.org/plugins/remove-jquery-migrate/
function cslpres_remove_jquery_migrate( $scripts ) {
  if ( ! is_admin() && isset( $scripts->registered['jquery'] ) ) {
    $script = $scripts->registered['jquery'];

    if ( $script->deps ) { // Check whether the script has any dependencies
      $script->deps = array_diff( $script->deps, array( 'jquery-migrate' ) );
    }
  }
}
add_action( 'wp_default_scripts', 'cslpres_remove_jquery_migrate' );



/**
 * Disable the emoji's
 */
function disable_emojis() {
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

  add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
  add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
  add_filter( 'emoji_svg_url', '__return_false' );
}
add_action( 'init', 'disable_emojis' );

/**
 * Filter function used to remove the tinymce emoji plugin.
 *
 * @param    array  $plugins
 * @return   array             Difference betwen the two arrays
 */
function disable_emojis_tinymce( $plugins ) {
  if ( is_array( $plugins ) ) {
    return array_diff( $plugins, array( 'wpemoji' ) );
  } else {
    return array();
  }
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param  array  $urls          URLs to print for resource hints.
 * @param  string $relation_type The relation type the URLs are printed for.
 * @return array                 Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {

  if ( 'dns-prefetch' == $relation_type ) {

    // Strip out any URLs referencing the WordPress.org emoji location
    $emoji_svg_url_bit = 'https://s.w.org/images/core/emoji/';
    foreach ( $urls as $key => $url ) {
      if ( strpos( $url, $emoji_svg_url_bit ) !== false ) {
        unset( $urls[$key] );
      }
    }

  }

  return $urls;
}

function wphead_init() {
  remove_action( 'wp_head', 'rsd_link');
  remove_action( 'wp_head', 'wp_generator');
  remove_action( 'wp_head', 'feed_links_extra', 3 );
  remove_action( 'wp_head', 'index_rel_link');
  remove_action( 'wp_head', 'wlwmanifest_link');
  remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head');
  remove_action( 'wp_head', 'parent_post_rel_link', 10, 0);
  remove_action( 'wp_head', 'start_post_rel_link');
  remove_action( 'wp_head', 'rest_output_link_wp_head' );
  remove_action( 'wp_head', 'wp_shortlink_wp_head' );
  remove_action( 'wp_head', 'admin_print_styles');
  remove_action( 'wp_head', 'wp_resource_hints', 2 );
  remove_filter( 'wp_head', 'comment_text_rss' );
}
add_action('after_setup_theme', 'wphead_init' );