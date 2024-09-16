<?php

if( have_rows('flexible_content') ):

    while ( have_rows('flexible_content') ) : the_row();

        if( get_row_layout() == 'hero' ): ?>
            <?php include 'blocks/hero.php'; ?>
        <?php endif;
 
        if( get_row_layout() == 'words_slider' ): ?>
            <?php include 'blocks/word-slider.php'; ?>
        <?php endif;

        if( get_row_layout() == 'projects' ): ?>
            <?php include 'blocks/projects.php'; ?>
        <?php endif;

        if( get_row_layout() == 'services' ): ?>
            <?php include 'blocks/services.php'; ?>
        <?php endif;

        if( get_row_layout() == 'work_with' ): ?>
            <?php include 'blocks/work-with.php'; ?>
        <?php endif;

        if( get_row_layout() == 'niches' ): ?>
            <?php include 'blocks/niches.php'; ?>
        <?php endif;

        if( get_row_layout() == 'about_me' ): ?>
            <?php include 'blocks/about-me.php'; ?>
        <?php endif;

    endwhile;

endif;


?>