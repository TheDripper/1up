<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link href="//cdn.jsdelivr.net/npm/featherlight@1.7.14/release/featherlight.min.css" type="text/css" rel="stylesheet" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<header class="w-full flex justify-between items-center px-12 h-24 absolute">
  <a href="/"><img src="<?php echo get_template_directory_uri(). '/build/icons/site_logo.svg'; ?>" /></a>
  <img id="open-menu" src="<?php echo get_template_directory_uri(). '/build/icons/Icon:Menu.svg'; ?>" />
  <nav>
    <img id="close-menu" src="<?php echo get_template_directory_uri(). '/build/icons/Icon:Close.svg'; ?>" />
    <?php wp_nav_menu(array('theme_location'=>'primary-navigation')); ?>
  </nav>
</header>