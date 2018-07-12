<?php
/**
 * Template part for displaying page content in page-activities.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CSLP_Resources
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('abra-activities'); ?>>
	<div class="entry-content" id="activities-page-container">
		<div class="activities-meta">
				<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header>
			<?php the_content(); // should be only a small paragraph ?>
		</div>

		<div id="activities__by-cat" class="selected">
			<?php
			if ( have_rows('activitiespg_categories') ) {
				while( have_rows('activitiespg_categories') ) { the_row(); ?>
					<div class="category-card" data-cat="<?= get_sub_field('activitiespg_category') ?>">
						<a href="<?= get_term_link(get_sub_field('activitiespg_category')) ?>">
					<?php
					?><img srcset="<?= wp_get_attachment_image_srcset(get_sub_field('activitiespg_cover')) ?>" alt=""><?php
					echo '<h3>' . get_term_by('id', get_sub_field('activitiespg_category'), 'activity_cat')->name . '</h3>'; ?>
						</a>
					</div> <?php
				}
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

			<article id="activity">
				<header>
					<h1 id="activity-title"></h1>
					<span></span>
					<div id="activity-icon"></div>
				</header>
				<ul class="activity__nav tabs">
					<li id="a-overview" class="active"><a href="#a-overview-c">Overview</a></li>
					<li id="a-insights"><a href="#a-insights-c">Insights</a></li>
					<li id="a-related"><a href="#a-related-c">Linked Stories</a></li>
					<li id="a-resources"><a href="#a-resources-c">Resources</a></li>
				</ul>
				<div class="activity__body tabs-content">

					<div id="a-overview-c" class="active">
						<div id="activity-video-container"></div>
						<div id="a-desc-c"></div>
						<div id="a-gfa-c"></div>
						<div id="a-level-c"></div>
					</div>
					<div id="a-insights-c"></div>
					<div id="a-related-c"></div>
					<div id="a-resources-c"></div>
				</div>
			</article>
			<div id="back-button" class="hidden">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
					<g><path d="M990,503.4c0,25.9-21,46.9-46.9,46.9H56.9c-25.9,0-46.9-21-46.9-46.9v-4.6c0-25.9,21-46.9,46.9-46.9h886.1c25.9,0,46.9,21,46.9,46.9V503.4z"/><path d="M430.9,131.1c18.3,18.3,18.3,48.1,0,66.4L93.1,535.2c-18.3,18.3-48.1,18.3-66.4,0l-2.9-2.9C5.5,514,5.5,484.3,23.9,466l337.7-337.7c18.3-18.3,48.1-18.3,66.4,0L430.9,131.1z"/><path d="M430.9,868.9c18.3-18.3,18.3-48.1,0-66.4L93.1,464.8c-18.3-18.3-48.1-18.3-66.4,0l-2.9,2.9C5.5,486,5.5,515.7,23.9,534l337.7,337.7c18.3,18.3,48.1,18.3,66.4,0L430.9,868.9z"/></g>
				</svg>
			</div>

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
