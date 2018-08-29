<?php
/**
 * Template Name: Activities
 * Template Post Type: Teacher Page, Parent Page
 *
 * @package CSLP_Resources
 */

	get_header();

	// set data for vue environment
	if (gethostname() == 'cslp-ga2221-mh.concordia.ca' ) {
		$burl = 'https://doe.concordia.ca/cslp/wp-json/wp/v2/';
	} else {
		$burl = 'http://localhost:8888/resources/wp-json/wp/v2/';
	}

	$categories = '['; // open JSON array

	if ( have_rows('activitiespg_categories') ) {
		while( have_rows('activitiespg_categories') ) { the_row();
			$c = '{'
				 . 'id: "' . get_sub_field('activitiespg_category') . '",'
				 . 'link: "' . get_term_link(get_sub_field('activitiespg_category')) . '",'
				 . 'img: { '
				 		. 'url: "' . wp_get_attachment_image_url(get_sub_field('activitiespg_cover')) . '",'
				 		. 'srcset: "' . wp_get_attachment_image_srcset(get_sub_field('activitiespg_cover')) . '"'
				 . '},'
				 . 'title: "' . get_term_by('id', get_sub_field('activitiespg_category'), 'activity_cat')->name . '",'
				 . 'slug: "' . get_term_by('id', get_sub_field('activitiespg_category'), 'activity_cat')->slug . '"'
			. '},';
			$categories .= $c;
		}
	}

	$categories .= ']'; // close JSON array


?>
	<!-- Data passed to Vue instance -->
	<script type="text/javascript">
		window.abraActivities = {
			bURL: '<?= $burl ?>',
			pageID: '<?php the_ID(); ?>',
			strings: {
				title: '<?php the_title(); ?>'
			},
			categories: <?= $categories ?>,
		}
	</script>

	<div id="primary" class="content-area">
		<!-- Vue hook -->
		<main id="main" class="site-main">
			<p>Something went wrong</p>
		</main>
		<!-- end Vue -->

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
	</div>

<?php get_footer();
