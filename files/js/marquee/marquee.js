$(function() {
    $('.marquee-left').marquee({
        duration: 12000,
        startVisible: true,
        duplicated: true,
        pauseOnHover: true,
        direction: 'left'
    });
    $('.marquee-right').marquee({
        duration: 12000,
        startVisible: true,
        duplicated: true,
        pauseOnHover: true,
        direction: 'right'
    });
});