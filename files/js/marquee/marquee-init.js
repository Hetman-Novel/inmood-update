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
});