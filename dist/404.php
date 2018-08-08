<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package CSLP_Resources
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<article class="error-404 not-found page">
				<header class="page-header">
					<h1 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'cslpres' ); ?></h1>
				</header><!-- .page-header -->

				<div class="page-content">
					<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'cslpres' ); ?></p>
					<?php get_search_form(); ?>
				</div><!-- .page-content -->
			</article><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer();
