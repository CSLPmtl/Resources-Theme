<?php
/**
 * Template part for displaying page content in page-tool-home.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CSLP_Resources
 */

?>
<div id="stripes" aria-hidden="true">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</div>
<section class="tool-section tool-home__masthead white">

	<div class="tool-blurb">
		<header class="entry-header">
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header>
		<?php
		if ( have_rows('th_header_content') ) {
			while( have_rows('th_header_content') ) { the_row();

		 		echo '<div class="blurb">' . get_sub_field('th_header_blurb') . '</div>';

		 		if (get_sub_field('th_header_cta_link')) : ?>
		 			<a href="<?= get_sub_field('th_header_cta_link'); ?>" class="btn cta-link">
		 				<?= get_sub_field('th_header_cta_text'); ?>
		 			</a>
		 		<?php endif;
		 	}
		} ?>
	</div>
	<div class="tool-feature">
		<?php
		if ( have_rows('th_header_content') ) {
			while( have_rows('th_header_content') ) { the_row();

		 		if (get_sub_field('th_header_media_type') == 'video') { ?>
		 			<?php // add query vars to hide title

	 				$iframe = get_sub_field('th_header_media_video');
					preg_match('/src="(.+?)"/', $iframe, $matches);
					$src = $matches[1];

					// add extra params to iframe src
					$params = array(
				    'controls' => 1,
				    'hd'       => 1,
				    'autohide' => 1,
				    'showinfo' => 0,
				    'modestbranding' => 1,
				    'wmode' => 'transparent'
					);

					$new_src = add_query_arg($params, $src);
					$iframe = str_replace($src, $new_src, $iframe);

					// echo $iframe
					echo $iframe; ?>
	 	<?php
		 		} else {
		 			echo get_sub_field('th_header_media_image');
		 		}
		 	}
		} ?>
	</div>
</section>

<?php
if ( have_rows('th_content') ) {
	$index = 0;
	while( have_rows('th_content') ) : the_row();
		if (($index % 2) == 0) {
			$class = 'blue';
		} else {
			$class = 'white';
		}
		$index += 1;

		$type = get_sub_field('th_content_section_media_type');
		?>



	<section class="tool-section <?= $class; ?>">
		<div class="tool-section__inner <?= $type; ?>">
			<h2 class="section-title"><?= get_sub_field('th_content_section'); ?></h2>
			<div class="section-copy a h">
				<?= get_sub_field('th_content_section_copy'); ?>
			</div>
			<?php if ($type) {
				if ($type !== 'none') {
					echo '<div class="section-media a h">';
					if ($type === 'image') {
						echo '<img src="' . wp_get_attachment_url(get_sub_field('th_content_section_media_img')) . '" alt=""/>';
					}
					elseif ($type === 'embed') {
						$iframe = get_sub_field('th_content_section_media_vid');
						preg_match('/src="(.+?)"/', $iframe, $matches);
						$src = $matches[1];

						// add extra params to iframe src
						$params = array(
					    'controls' => 1,
					    'hd'       => 1,
					    'autohide' => 1,
					    'showinfo' => 0,
					    'modestbranding' => 1,
					    'wmode' => 'transparent'
						);

						$new_src = add_query_arg($params, $src);
						$iframe = str_replace($src, $new_src, $iframe);

						// echo $iframe
						echo $iframe;
					}
					echo '</div>';
				}
			} ?>
		</div>
	</section>
 	<?php endwhile;
} ?>






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