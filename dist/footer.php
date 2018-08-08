	</div>

	<footer id="colophon" class="site-footer">
		<div class="site-footer__inner">
			<div class="site-footer__logos">
				<?php if (!empty(get_theme_mod('cslpres_footer_logo'))) : ?>
					<a href="" class="footer__clsp-logo">
						<img src="<?= esc_url( get_theme_mod('cslpres_footer_logo')); ?>" alt="CLSP logo">
					</a>
				<?php endif; ?>

				<?php if (!empty(get_theme_mod('cslpres_footer_conu'))) : ?>
					<a href="https://www.concordia.ca/" class="footer__conu-logo" rel="external">
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
