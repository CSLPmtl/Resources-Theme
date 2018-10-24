<?php

add_filter('site_transient_update_plugins', 'cslpres_remove_update_nag');
function cslpres_remove_update_nag($value) {
	unset($value->response[ 'advanced-custom-fields-pro/acf.php' ]);
	return $value;
}

add_action('sublanguage_custom_switch', 'cslpres_lang_switch', 10, 2);

/**
 * @param array of WP_Post language custom post
 * @param Sublanguage_site $this Sublanguage instance.
 */
function cslpres_lang_switch($languages, $sublanguage) {

?>
<ul>
<?php foreach ($languages as $language) {

	if (!($sublanguage->current_language->ID == $language->ID)) : ?>
	<li class="<?php echo $language->post_name; ?> <?php  echo 'current'; ?>">
		<a href="<?php echo $sublanguage->get_translation_link($language); ?>"><?php echo $language->post_title; ?></a>
	</li>
	<?php endif;
 } ?>
</ul>
<?php

}

/**
 * Changes plugins display order in the admin, showing active plugins first.
 * @author Sergey Biryukov http://profiles.wordpress.org/sergeybiryukov/
 */
function cslpres_sort_plugins_by_status() {
	global $wp_list_table, $status;
	if ( ! in_array( $status, array( 'inactive', 'recently_activated', 'mustuse' ) ) ) {
		uksort( $wp_list_table->items, '_cslpres_order_callback' );
	}
}
function _cslpres_order_callback( $a, $b ) {
	global $wp_list_table;
	$a_active = is_plugin_active( $a );
	$b_active = is_plugin_active( $b );
	if ( $a_active && $b_active ) {
		return strcasecmp( $wp_list_table->items[ $a ]['Name'], $wp_list_table->items[ $b ]['Name'] );
	} elseif ( $a_active && ! $b_active ) {
		return -1;
	} elseif ( ! $a_active && $b_active ) {
		return 1;
	} else {
		return strcasecmp( $wp_list_table->items[ $a ]['Name'], $wp_list_table->items[ $b ]['Name'] );
	}
}
add_action( 'admin_head-plugins.php', 'cslpres_sort_plugins_by_status' );

