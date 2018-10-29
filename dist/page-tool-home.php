<?php
/**
 * Template Name: Tool Home
 * Template Post Type: Teacher Page, Parent Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CSLP_Resources
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main tool tool-home">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page-th' );


		endwhile; // End of the loop.
		?>

		</main>
	</div>

<?php get_footer();
