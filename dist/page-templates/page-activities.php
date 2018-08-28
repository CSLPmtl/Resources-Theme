<?php
/**
 * Template Name: Activities
 * Template Post Type: Teacher Page, Parent Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CSLP_Resources
 */

get_header();

//  set base url for axios
if (gethostname() == 'cslp-ga2221-mh.concordia.ca' ) {
	$burl = 'http://doe.concordia.ca/cslp/wp-json/wp/v2/';
} else {
	$burl = 'http://localhost:8888/resources/wp-json/wp/v2/';
} ?>
	<script type="text/javascript">
		window._bURL = '<?= $burl ?>'
		window._strings = {'noresources' : '<?= get_field('abra_no_resources_str', 'option'); ?>'}
	</script>
	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php if ( get_edit_post_link() ) : ?>
			<footer class="entry-footer">
				<?php
				edit_post_link(
					sprintf(
						wp_kses(
							/* translators: %s: Name of current post. Only visible to screen readers */
							__( 'Edit <span class="screen-reader-text">%s</span>', 'cslpres' ),
							array(
								'span' => array(
									'class' => array(),
								),
							)
						),
						get_the_title()
					),
					'<span class="edit-link">',
					'</span>'
				);
				?>
			</footer>
		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer();
