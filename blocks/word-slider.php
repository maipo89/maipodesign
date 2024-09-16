
<div class="word-slider">
    <div class="word-slider__container">
        <div ref="wrapper" class="title-slider">
            <div ref="boxes" class="boxes">
            <?php
                if( have_rows('words') ):
                    while( have_rows('words') ) : the_row();
                        $text = get_sub_field('text');
            ?>
                <div class="box" ref="box"><span class="text"><?php echo($text) ?></span></div>
            <?php
                    endwhile;
                endif;
            ?>
            </div>
        </div>
    </div>
</div>
