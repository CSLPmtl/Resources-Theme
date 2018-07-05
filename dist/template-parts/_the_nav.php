<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
	<?php esc_html_e( 'Menu', 'cslpres' ); ?>
	<span></span><span></span>
</button>

<header id="masthead" class="site-header">
	<nav id="global-navigation" class="site-navigation__inner" data-nav="global">
		<a href="<?= the_permalink(get_page_by_title('ABRA', OBJECT, 'teacherpage' )) ?>" rel="home" title="home">
			<img class="nav-logo" src="<?= get_template_directory_uri() . '/assets/images/logo_nav.png' ?>">
			<span class=logo-desc>Abra Teacher Resources - <?= the_title(); ?></span>
		</a>

		<?php // a lot was removed temporarily. Rethink menu
		wp_nav_menu( array(
			'theme_location' => 'menu-tools',
			'menu_id'        => 'nav__tools-menu'
		) );
		?>

	</nav>
</header>