<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
	<i class="screen-reader-text"><?php esc_html_e( 'Menu', 'cslpres' ); ?></i>
	<span></span>
	<span></span>
	<span></span>
</button>

<header id="masthead" class="site-header">
	<nav id="global-navigation" class="site-navigation__inner" data-nav="global">
		<a href="<?= the_permalink(get_page_by_title('ABRACADABRA
', OBJECT, 'teacherpage' )) ?>" rel="home" title="home">
			<img class="nav-logo" src="<?= get_template_directory_uri() . '/assets/images/logo_nav.png' ?>">
		</a>

		<?php // a lot was removed temporarily. Rethink menu
		wp_nav_menu( array(
			'theme_location' => 'menu-tools',
			'menu_id'        => 'nav__tools-menu'
		) );
		?>

	</nav>
</header>
