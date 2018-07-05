<?php
/**
 * Template Name: Stories
 * Template Post Type: Teacher Page, Parent Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CSLP_Resources
 */

get_header();
?>
	<script type="text/javascript">var _bURL = '<?= get_site_url() . '/wp-json/wp/v2/' ?>'</script>
	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page-stories' );


		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer();
