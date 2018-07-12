<?php
/**
 * Template part for displaying stories
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CSLP_Resources
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('teacherpage'); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header>

	<div class="entry-content">
		<?php the_field('stories_description'); ?>

		<h2>Resources</h2>
		<hr>
		<?= the_field('stories_resources') ?>

		<a href="<?= the_field('story_pdf_link'); ?>" class="btn">Download Story PDF</a>

		<?php wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cslpres' ),
			'after'  => '</div>',
		) );
		?>
	</div>
</article>
