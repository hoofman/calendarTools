
<?php
/*
Plugin Name: Calendar Tools
Plugin URI: https://github.com/hoofman/calendarTools
Description: Calendar Tools For DreamSpell / LongCount (tzolkin / haab)
Author: Luke Mackenzie - 13 earth - luke@sapho.co.uk
Author URI: http://hoofman.sdf-eu.org/maya
version: 1.00
*/

add_action('wp_enqueue_scripts','calendar_tools_init');

function calendar_tools_init() {
    wp_enqueue_script( 'getDreamSpellKin', plugins_url( '/js/calendarTools.js', __FILE__ ));
}
?>
