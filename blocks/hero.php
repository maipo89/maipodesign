<?php $title = get_sub_field('title'); ?>
<?php $text = get_sub_field('text'); ?>
<?php $description = get_sub_field('description'); ?>
<?php $button = get_sub_field('button'); ?>
<?php $buttonLink = get_sub_field('button_link'); ?>
<?php $image = get_sub_field('image'); ?>

<div class="hero">
    <div class="hero__wrapper">
        <div class="hero__wrapper__text">
            <h1><?php echo $title ?></h1>
            <p><?php echo $text ?></p>
            <div class="button-container">
                <a href="<?php echo $buttonLink['url'] ?>"><?php echo $button ?></a>
            </div>
        </div>
        <div style="background-image: url(<?php echo $image['url'] ?>)" class="hero__image"></div>
    </div>
</div>
