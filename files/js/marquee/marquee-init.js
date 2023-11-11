$(function() {
    $('.marquee-left').marquee({
        duration: 23000,
        startVisible: true,
        duplicated: true,
        //pauseOnHover: true,
        direction: 'left'
    });
    $('.marquee-right').marquee({
        duration: 23000,
        startVisible: true,
        duplicated: true,
        //pauseOnHover: true,
        direction: 'right'
    });
    $('.js-horizontal-tabs-showroom-title').marquee({
        duration: 6800,
        startVisible: true,
        duplicated: true,
        //pauseOnHover: true,
        direction: 'left'
    });
});