<?php
/**
 * @package CSLP_Resources
 */
?>

<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href='//fonts.googleapis.com/css?family=Roboto:300,400,700|IBM+Plex+Mono:300|Lato:300' rel='stylesheet' type='text/css' />
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-65941254-4"></script>
		<script>
			window.dnt=navigator.doNotTrack=="yes"||navigator.doNotTrack=="1"||navigator.msDoNotTrack=="1";
			if (!window.dnt){window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-65941254-4');}
		</script>
		<?php wp_head(); ?>
	</head>

	<body <?php body_class('no-js'); ?>>
	<div class="ripple" aria-hidden="true"></div>

	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'cslpres' ); ?></a>
		<?php get_template_part('template-parts/nav'); ?>
		<div id="content" class="site-content">
