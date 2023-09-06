jQuery(function () {
    var el = jQuery('.dropdown-menu');
    var el2 = jQuery('.dropdown-menu .bg');
    var el_close = jQuery('.burger-btn');
    var body = jQuery('body');

    el.click(function () {
        if(el.hasClass('active')){
            body.addClass('modal_overlay');
        }
        else{
            body.removeClass('modal_overlay');
        }
    });
    el_close.click(function () {
        el.toggleClass('active');
        el_close.toggleClass('active');
        if(el.hasClass('active')){
            body.addClass('modal_overlay');
        }
        else{
            body.removeClass('modal_overlay');
        }
    });
    jQuery(document).mouseup(function (e) {
        if ((!el2.is(e.target) && el2.has(e.target).length === 0) && !el_close.is(e.target) && el_close.has(e.target).length === 0)
        {
            el.removeClass('active');
            el_close.removeClass('active');
            body.removeClass('modal_overlay');
        }
    });
});

jQuery(function () {
    var el = jQuery('.dropdown-cart');
    var el_close = jQuery('.cart-button');
    var el_close2 = jQuery('.close-cart');
    var body = jQuery('body');

    el.click(function () {
        if(el.hasClass('active')){
            body.addClass('modal_overlay');
        }
        else{
            body.removeClass('modal_overlay');
        }
    });
    el_close.click(function () {
        el.toggleClass('active');
        el_close.toggleClass('active');
        if(el.hasClass('active')){
            body.addClass('modal_overlay');
        }
        else{
            body.removeClass('modal_overlay');
        }
    });
    el_close2.click(function () {
        el.toggleClass('active');
        el_close.toggleClass('active');
        if(el.hasClass('active')){
            body.addClass('modal_overlay');
        }
        else{
            body.removeClass('modal_overlay');
        }
    });
    jQuery(document).mouseup(function (e) {
        if ((!el.is(e.target) && el.has(e.target).length === 0) && !el_close.is(e.target) && el_close.has(e.target).length === 0)
        {
            el.removeClass('active');
            el_close.removeClass('active');
            body.removeClass('modal_overlay');
        }
    });
});

jQuery(function () {
    var el = jQuery('.search-block');
    var el_close = jQuery('.search-button');
    var body = jQuery('body');

    el.click(function () {
        if(el.hasClass('active')){
            body.addClass('modal_overlay');
        }
        else{
            body.removeClass('modal_overlay');
        }
    });
    el_close.click(function () {
        el.toggleClass('active');
        el_close.toggleClass('active');
        if(el.hasClass('active')){
            body.addClass('modal_overlay');
        }
        else{
            body.removeClass('modal_overlay');
        }
    });
    jQuery(document).mouseup(function (e) {
        if ((!el.is(e.target) && el.has(e.target).length === 0) && !el_close.is(e.target) && el_close.has(e.target).length === 0)
        {
            el.removeClass('active');
            el_close.removeClass('active');
            body.removeClass('modal_overlay');
        }
    });
});

jQuery(function () {
    jQuery('.drop .a').click(function (event) {
        event.preventDefault();
        let li = jQuery(this).closest('.drop');
        li.toggleClass('active');
        li.find(' > .a').toggleClass('active');
        li.find(' > ul').toggleClass('active');
        return false;
    });

    jQuery('.faq-item .faq-title').click(function (event) {
        event.preventDefault();
        var li = jQuery(this).closest('.faq-item');
        li.toggleClass('active');
        li.find(' > .faq-ans').toggleClass('active');
        li.find(' > .faq-title').toggleClass('minus');
    });

    jQuery('.news-wrapper .more.show').click(function (event) {
        event.preventDefault();
        var li = jQuery(this).closest('.news-wrapper');
        li.find(' > .text').addClass('active');
        li.find(' > .date-more .more-less .more.show').hide();
        li.find(' > .date-more .more-less .more.hide').show();
    });
    jQuery('.news-wrapper .more.hide').click(function (event) {
        event.preventDefault();
        var li = jQuery(this).closest('.news-wrapper');
        li.find(' > .text').removeClass('active');
        li.find(' > .date-more .more-less .more.show').show();
        li.find(' > .date-more .more-less .more.hide').hide();
    });
});

jQuery(document).ready(function() {
    var owl = jQuery(".slider-single-item");
    try {
        owl.owlCarousel({
            items : 1,
            itemsDesktop : [1199, 1],
            itemsDesktopSmall : [979, 1],
            itemsTablet : [768, 1],
            itemsMobile : [479, 1],
            dots : true,
            navigation : true
        });
    } catch(e) {}
});

jQuery(document).ready(function() {
    var owl = jQuery(".statistic-selects-slider");
    try {
        owl.owlCarousel({
            items : 1,
            itemsDesktop : [1199, 1],
            itemsDesktopSmall : [979, 1],
            itemsTablet : [768, 1],
            itemsMobile : [479, 1],
            navigation : true
        });
    } catch(e) {}
});

jQuery(document).ready(function() {
    var owl = jQuery(".images-slider");
    try {
        owl.owlCarousel({
            items : 3,
            autoWidth : true,
            loop : true,
            margin : 30,
            itemsDesktop : [1199, 3],
            itemsDesktopSmall : [979, 1],
            itemsTablet : [768, 1],
            itemsMobile : [479, 1],
            navigation : true
        });
    } catch(e) {}
});

$(document).on('click', '.nav-tabs a', function(e){
    e.preventDefault();

    var tab = $(this).closest('.tabs');
    tab.find('.nav-tabs li').removeClass('active');
    tab.find('.tab-pane').removeClass('active');

    $(this).closest('li').addClass('active');
    $($(this).attr('href')).addClass('active');

    return false
});

function openTab(tabName, button) {
    var body = jQuery('body');
    var el1 = jQuery('.drop-filters');
    var el2 = jQuery('.filters-line');

    jQuery('#'+button).toggleClass('active');
    jQuery('#'+tabName).toggleClass('active');
    body.toggleClass('modal_overlay2');

    jQuery(document).mouseup(function (e) {
        if ((!el1.is(e.target) && el1.has(e.target).length === 0) && (!el2.is(e.target) && el2.has(e.target).length === 0))
        {
            jQuery('.filter-button').removeClass('active');
            jQuery('.drop-filters').removeClass('active');
            body.removeClass('modal_overlay2');
        }
    });
}

jQuery(function () {
    jQuery('.product-details .img-wrapper .plus').click(function (event) {
        event.preventDefault();
        var li = jQuery(this).closest('.product-details .img-wrapper');
        li.toggleClass('active');
        return false;
    });
});

jQuery(function () {
    jQuery('.char-block .ttl').click(function (event) {
        event.preventDefault();
        var li = jQuery(this).closest('.char-item');
        li.toggleClass('active');
        li.find(' > .ttl').toggleClass('active');
        li.find(' > .inner').toggleClass('active');
    });
});

jQuery(function () {
    var el = jQuery('.block-select-cloth');
    var el_close = jQuery('.button-select-cloth');
    var el_close2 = jQuery('.close-select-cloth');
    var body = jQuery('body');

    el.click(function () {
        if(el.hasClass('active')){
            body.addClass('modal_overlay3');
        }
        else{
            body.removeClass('modal_overlay3');
        }
    });
    el_close.click(function () {
        el.toggleClass('active');
        el_close.toggleClass('active');
        if(el.hasClass('active')){
            body.addClass('modal_overlay3');
        }
        else{
            body.removeClass('modal_overlay3');
        }
    });
    el_close2.click(function () {
        el.toggleClass('active');
        el_close.toggleClass('active');
        if(el.hasClass('active')){
            body.addClass('modal_overlay3');
        }
        else{
            body.removeClass('modal_overlay3');
        }
    });
    jQuery(document).mouseup(function (e) {
        if ((!el.is(e.target) && el.has(e.target).length === 0) && !el_close.is(e.target) && el_close.has(e.target).length === 0)
        {
            el.removeClass('active');
            el_close.removeClass('active');
            body.removeClass('modal_overlay3');
        }
    });
});

jQuery(function () {
    jQuery('.drop-block-select .data-item .inner').click(function (event) {
        event.preventDefault();
        var li = jQuery(this).closest('.data-item');
        li.toggleClass('active');
    });
});

const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animIStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animIStart;
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animIStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_animate')
            }
            else {
                animItem.classList.remove('_animate')
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{ top : rect.top + scrollTop, left : rect.left + scrollLeft}
    }
    setTimeout(function() { animOnScroll(); }, 500);
}

jQuery(window).scroll(function() {
    if(jQuery(this).scrollTop() > 120){
        jQuery('.fixed-line').addClass('fixed');
        jQuery('.header-wrapper').addClass('top-fixed');
    }
    else{
        jQuery('.fixed-line').removeClass('fixed');
        jQuery('.header-wrapper').removeClass('top-fixed');
    }
});

var body = document.getElementsByTagName('body')[0];
initializeParallaxFooter(
    // main can be whatever element you want
    document.getElementsByTagName('main')[0],
    // footer can be whatever element you want
    document.getElementsByTagName('footer')[0]
);

function initializeParallaxFooter(mainElement, footerElement) {
    footerElement.style.left = '0';
    footerElement.style.right = '0';
    footerElement.style.zIndex = '-1';
    updateParallaxFooter(mainElement, footerElement);
    window.addEventListener('resize', function() {
        updateParallaxFooter(mainElement, footerElement);
    });
    window.addEventListener('scroll', function() {
        updateParallaxFooter(mainElement, footerElement);
    });
}

function updateParallaxFooter(mainElement, footerElement) {
    if (isViewportSmallerThanFooter(footerElement)) {
        // Reset bottom style in case user resized window
        footerElement.style.bottom = '';
        footerElement.style.top = '0';
        footerElement.style.position = 'static';
    } else {
        // Reset top style in case user resized window
        footerElement.style.top = '';
        footerElement.style.bottom = '0';
    }
    if (window.scrollY > getBottomY(mainElement)) {
        footerElement.style.position = 'static';
        // Margin is only used to add
        body.style.marginBottom = '0px';
    } else {
        body.style.marginBottom = footerElement.offsetHeight + 'px';
        footerElement.style.position = 'fixed';
    }
}

function isViewportSmallerThanFooter(footerElement) {
    return window.innerHeight < footerElement.offsetHeight;
}

function getBottomY(element) {
    return element.offsetTop + element.offsetHeight;
}

jQuery(function () {
    jQuery('.open-filters-btn').click(function (event) {
        jQuery('.open-filters-btn').toggleClass('active');
        jQuery('.filter-items.desc').toggleClass('active');
        jQuery('.drop-filters').removeClass('active');
        jQuery('body').removeClass('modal_overlay2');
    });
});