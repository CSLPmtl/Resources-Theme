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

			<div class="toggle wide">
				<input id="a" type="checkbox">
				<label for="a">
					<div class="toggle__switch" data-checked="By Theme" data-unchecked="By Category"></div>
				</label>
			</div>
		</div>


		<div id="stories__by-cat" class="selected">
			<?php
			if ( have_rows('storypg_categories') ) {
				while( have_rows('storypg_categories') ) { the_row(); ?>
					<div class="category-card" data-cat="<?= get_sub_field('storypg_category') ?>">
						<a href="<?= get_term_link(get_sub_field('storypg_category')) ?>">
					<?php
					?><img srcset="<?= wp_get_attachment_image_srcset(get_sub_field('storypg_cat_img')) ?>" alt=""><?php
					echo '<h3>' . get_cat_name(get_sub_field('storypg_category')) . '</h3>';

					$args = array(
						'cat' => get_sub_field('storypg_category'),
						'post_type' => 'story'
					);
					$the_query = new WP_Query( $args );
					echo '<span class="meta">' . $the_query->found_posts . ' Stories</span>'; ?>
						</a>
					</div> <?php
				}
			} ?>
		</div>
		<div id="stories__by-theme">

			<?php // Lazily loading the entire page's content at once
				$terms = get_terms( array(
					'taxonomy' 		=> 'post_tag',
					'hide_empty'	=> true
				));

				if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
					$count = count( $terms );
					$i = 0;
					$term_list = '';

					foreach ( $terms as $term ) {
						$i++;
						$term_list .= '<div class="theme-card" data-theme="' . $term->term_id . '"><a href="' . esc_url( get_term_link( $term ) ) . '">' . $term->name . '</a>';

							$term_list .= '</div>';

					}
					echo $term_list;
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

			<div data-type="theme">
				<div id="theme-meta">
					<div id="theme-meta__header">
						<h2></h2>
						<span></span>
					</div>
					<div id="theme-meta__content"></div>
					<ul id="theme-meta__list"></ul>
				</div>

				<div id="theme-item">
					<h2 class="theme__title"></h2>
					<div id="theme-item__desc" class="theme-sub"></div>
					<div id="theme-item__link" class="theme-sub"></div>
					<div id="theme-item__ting" class="theme-sub"></div>
				</div>
			</div>

			<article id="story">
				<header>
					<h1 id="story-title"></h1>
					<span></span>
				</header>
				<div class="story__body">
					<div id="story__body-desc"></div>
					<div id="story__body-links"></div>
					<div id="story__body-res"></div>
				</div>
				<nav class="story__nav">
					<span id="story__nav-title"></span>
					<ul>
						<li class="story__nav-item" data-nav="desc"></li>
						<li class="story__nav-item" data-nav="links"></li>
						<li class="story__nav-item" data-nav="res"></li>
						<li class="story__nav-item" data-nav="pdf"></li>
					</ul>
				</nav>
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
