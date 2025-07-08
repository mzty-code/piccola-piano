<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title><?php bloginfo('name'); ?><?php wp_title('|', true, 'left'); ?></title>
  <meta name="description" content="南区桂川にあるピアノ教室">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico">
  <?php wp_head(); ?>
</head>
<body>
<header id="header">
        <div class="header-top">
            <h1 class="site-title"><a href="#header"><img src="<?php echo esc_url(get_template_directory_uri() . '/img/web-logo.png'); ?>" alt="logo"></a></h1>
            <div class="header-sns-sp">
                <div class="btn-sp line"><a href="https://lin.ee/o9bziWy"><img src="<?php echo esc_url(get_template_directory_uri() . '/img/btn-line.png'); ?>"
                            alt="line-icon"></a></div>
                <div class="btn-sp instagram"><a href="https://www.instagram.com/piccola_piano"><img
                            src="<?php echo esc_url(get_template_directory_uri() . '/img/btn-instagram.png'); ?>" alt="instagram-icon"></a>
                </div>
            </div>
        </div>
        <nav id="header-navi">
            <ul>
                <li><a href="#menu">menu</a></li>
                <li class="about-do"><a href="#do">about</a></li>
                <li><a href="#footer">access</a></li>
            </ul>
        </nav>
        <div class="header-sns">
            <div class="btn line"><a href="https://lin.ee/o9bziWy"><img src="<?php echo esc_url(get_template_directory_uri() . '/img/line.png'); ?>"
                        alt="line-icon"></a></div>
            <div class="btn instagram"><a href="https://www.instagram.com/piccola_piano"><img
                        src="<?php echo esc_url(get_template_directory_uri() . '/img/instagram.png'); ?>" alt="instagram-icon"></a></div>
        </div>

    </header>