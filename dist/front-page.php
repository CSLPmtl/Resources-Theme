<?php
/**
 * The home template file
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package CSLP_Resources
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main homepage">

			<section class="homepage__block homepage__block-container homepage__masthead"> <!-- lot to do here -->
				<div class="homepage__intro">
					<div class="inner">
						<h1><?php the_title(); ?></h1>
					<p class="t__hint"><?= get_field('homepage_blurb'); ?></p>
					<?php if (get_field('hamepage_use_cute_image')) {
						$img_src = wp_get_attachment_image_url( get_field('homepage_cute_image'), 'medium' );
						$img_srcset = wp_get_attachment_image_srcset( get_field('homepage_cute_image'), 'medium' ); ?>
						<img src="<?php echo esc_url( $img_src ); ?>"
						   	srcset="<?php echo esc_attr( $img_srcset ); ?>"
						    sizes="(max-width: 50em) 87vw, 680px" alt="<?php get_post_meta( get_field('homepage_cute_image'), '_wp_attachment_image_alt', true); // broken? ?>"><?php
					} ?>
					<div class="ui-hint scroll-hint" aria-hidden="true">
						<p>scroll down for more</p>
						<span></span>
						<span></span>
					</div>
					</div>
				</div>

				<div class="homepage__pt-block">
					<div class="-parent">
						<div class="homepage__block-inner">
							<h3>Teacher</h3>
							<p><?= get_field('homepage_teacher_description'); ?></p>
							<button>See Resources</button>
							<ul class="homepage__tool-selector">
								<li><a href="">ELM</a></li>
								<li><a href="">READS</a></li>
								<li><a href="teacher/abra">ABRA</a></li>
								<li><a href="">IS-21</a></li>
								<li><a href="">EPEARL</a></li>
							</ul>
						</div>
					</div>

					<div class="-teacher">
						<div class="homepage__block-inner">
							<h3>Parent</h3>
							<p><?= get_field('homepage_parent_description'); ?></p>
							<button>See Resources</button>
							<ul class="homepage__tool-selector">
								<li><a href="">ELM</a></li>
								<li><a href="">READS</a></li>
								<li><a href="">ABRA</a></li>
								<li><a href="">IS-21</a></li>
								<li><a href="">EPEARL</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<?php if( have_rows('homepage_sections') ):
					$count = count(get_field('homepage_sections'));
					$index = $count;

					while( have_rows('homepage_sections') ): the_row();

						$index -= 1;
						if ($index % 2 == 0) {
							$overview_class = 'even';
						} else {
							$overview_class = 'odd';
						}

						$content = get_sub_field('homepage_section');
		?>

			<section class="homepage__block <?= $overview_class ?> homepage__content" id="scroll">
				<div class="homepage__block-inner">
					<?= $content; ?>
				</div>
			</section>

		<?php endwhile; endif; ?>
		</main>
	</div>

<?php get_footer();
