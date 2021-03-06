<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package CSLP_Resources
 */

?>

	</div>

	<footer id="colophon" class="site-footer">
		<div class="site-footer__inner">
			<div class="logos">
				<?php if (!empty(get_theme_mod('cslpres_footer_logo'))) : ?>
					<a href="" class="footer__clsp-logo">
						<img src="<?= esc_url( get_theme_mod('cslpres_footer_logo')); ?>" alt="CLSP logo">
					</a>
				<?php endif; ?>

				<?php if (!empty(get_theme_mod('cslpres_footer_conu'))) : ?>
					<a href="https://www.concordia.ca/" rel="external">
						<img src="<?= esc_url( get_theme_mod('cslpres_footer_conu')); ?>" alt="Concordia University logo">
					</a>
				<?php endif; ?>
			</div>
			<div class="site-footer__nav">
				<?php
				wp_nav_menu( array(
					'theme_location' => 'menu-footer',
					'menu_id'        => 'site-footer__menu'
				) );
				?>
			</div>
		</div>
	</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
