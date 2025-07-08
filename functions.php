<?php
// CSS と JS をまとめて読み込む
add_action('wp_enqueue_scripts','add_styles');

function add_styles() {

    // リセットCSS（レスポンシブ初期化用）
    wp_register_style(
        'reset-style',
        'https://unpkg.com/ress/dist/ress.min.css',
        array(),
        '1.0'
    );

    // slick-carousel のCSS
    wp_register_style(
        'slick-style',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
        array(),
        '1.0'
    );

    wp_register_style(
        'slick-theme-style',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css',
        array(),
        '1.0'
    );

    // ✅ あなたの main.css を読み込み（テーマ内の css フォルダから）
    wp_enqueue_style(
        'main-style',
        get_template_directory_uri() . '/css/main.css',
        ['reset-style', 'slick-style', 'slick-theme-style'],
        '1.0'
    );

    // jQueryをCDNから読み込む（WordPressバンドルを無効化して）
    wp_deregister_script('jquery');
    wp_register_script(
        'jquery',
        'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
       array(),
        '1.0',
        true
    );
    wp_enqueue_script('jquery');

    // slick.js 読み込み
    wp_enqueue_script(
        'slick-js',
        'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
        ['jquery'],
       array(),
        '1.0'
    );

    // あなたの main.js を読み込み
    wp_enqueue_script(
        'main-js',
        get_template_directory_uri() . '/js/main.js',
        ['jquery', 'slick-js'],
        '1.0',
        true
    );
}
?>
