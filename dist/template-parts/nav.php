<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
	<i class="screen-reader-text"><?php esc_html_e( 'Menu', 'cslpres' ); ?></i>
	<span></span>
	<span></span>
	<span></span>
</button>

<header id="masthead" class="site-header">
	<nav id="global-navigation" class="site-navigation__inner" data-nav="global">
		<a href="http://doe.concordia.ca/cslp/en/teacher/abra/" rel="home" title="home">
			<img class="nav-logo" src="<?= get_template_directory_uri() . '/assets/images/logo_nav.png' ?>">
		</a>

		<?php // a lot was removed temporarily. Rethink menu
		$pt = get_post_type();
		$suffix = '';
		$menu = 'menu-';
		if ($pt == 'teacherpage') { $suffix = 'T'; }
		if ($pt == 'parentpage') { $suffix = 'P'; }


		switch (get_field('tool')) {
			case 'abra':
				$menu = $menu . 'ABRA' . $suffix;
				break;

			case 'epearl':
				$menu = $menu . 'EPEARL' . $suffix;
				break;

			default:
				# code...
				break;
		}
		wp_nav_menu( array(
			'theme_location' => $menu,
			'menu_id' => 'nav__tools-menu'
		) );
		?>

	</nav>
</header>
