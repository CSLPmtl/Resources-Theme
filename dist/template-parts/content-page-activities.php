<?php
/**
 * Template part for displaying page content in page-stories.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CSLP_Resources
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('abra-stories'); ?>>
	<div class="entry-content" id="stories-page-container">
		<div class="stories-meta">
				<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header>
			<?php the_content(); // should be only a small paragraph ?>
		</div>

		<div id="stories__by-cat" class="selected">
			<?php // Lazily loading the entire page's content at once
				$terms = get_terms( array(
					'taxonomy' 		=> 'activity_cat',
					'hide_empty'	=> true
				));

				if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
					$count = count( $terms );
					$i = 0;
					$term_list = '';

					foreach ( $terms as $term ) {
						$i++;
						$term_list .= '<div class="category-card" data-cat="' . $term->term_id . '">';
						$term_list .= '<a href="' . esc_url( get_term_link( $term ) ) . '">';
						// $term_list .= '<img srcset="' . the_field('activity_cat_image', $term->term_id, false) . '" alt="category icon">';
						$term_list .= '<h3>' . $term->name . '</h3></a></div>';

					}
					echo $term_list;

					// echo '<pre>';
					// // print_r(get_field('activity_cat_image', $term->taxonomy . '_' . $term->term_id));
					// $tid = 'term_' . $term->term_id;
					// // print_r('term_' . $term->term_id);
					// echo get_field('activity_cat_image', $tid);
					// echo '</pre>';
			} ?>
		</div>

		<div id="drilldown" data-active="none">

			<div data-type="cat">
				<div id="cat-meta">
					<div id="cat-meta__header">
						<h2></h2>
						<span></span>
					</div>
					<div id="cat-meta__content"></div>
					<ul id="cat-meta__list"></ul>
				</div>

				<div id="cat-item">
					<h2 class="cat__title"></h2>
					<div id="cat-item__desc" class="cat-sub"></div>
					<div id="cat-item__link" class="cat-sub"></div>
					<div id="cat-item__ting" class="cat-sub"></div>
				</div>
			</div>

			<article id="story">
				<div id="activity-icon"></div>
				<header>
					<h1 id="story-title"></h1>
					<span></span>
				</header>
				<nav class="story__nav tabs">
					<div id="a-overview"></div>
					<div id="a-gfa"></div>
					<div id="a-level"></div>
				</nav>
				<div class="story__body tabs-content">
					<div id="a-overview-c"></div>
					<div id="a-gfa-c"></div>
					<div id="a-level-c"></div>
				</div>
			</article>

		</div>
	</div>

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
</article>
