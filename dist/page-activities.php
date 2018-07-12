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
	$burl = get_site_url() . '/wp-json/wp/v2/';
} ?>
	<script type="text/javascript">window._bURL = '<?= $burl ?>'</script>
	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page-activities' );


		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer();
