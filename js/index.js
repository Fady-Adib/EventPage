console.log("loaded index");
$('.open').click(function (e) {
    e.preventDefault();
 
    // $("nav").fadeIn( 50)
    // $(".navBody").fadeIn(50)
    $("nav").animate({ 'width': "20%", }, 500)
    $(".navBody").animate({ 'width': "20%", 'padding': '2rem' }, 500)
});
$('.btn-close').click(function (e) {
    $("nav").animate({ 'width': "0%", }, 500)
    $(".navBody").animate({ 'width': "0%", 'padding': '2rem 0' }, 500)
});
$('.linkNav').click(function (e) {
    e.preventDefault();
    let x = $(e.target).attr("href");
    let y = $(x).css("padding-top");
    $(e.target).addClass("active");
    $(e.target).siblings(".linkNav").removeClass("active");
    var offset = $(x).offset();
    var top = (offset.top)
    top = parseInt(top)
    var numericValue = parseInt(y); // Parses the integer part of the string
    var topFinal = top + numericValue
    console.log(top);
    console.log(topFinal);
    $("html, body").animate({ scrollTop: topFinal }, 1000);
});
$("h3").click(function (e) {
    e.preventDefault();
    console.log(e.target);
    $(e.target).next().slideDown(500);
    $(e.target).next().siblings("p").slideUp()(500)
    //    $(selector).;
});
setInterval(function () {
    let festivalDate = new Date("10 25 2023 22:05:52 GMT+0300 (Arabian Standard Time)").getTime()
    let currentDate = new Date().getTime()
    let reTime = (festivalDate - currentDate) / 1000
    reDay = Math.floor(reTime / 60 / 60 / 24)
    let reHour = (reTime - reDay * 60 * 60 * 24) / 60 / 60
    reHour = Math.floor(reHour)
    let reMin = (reTime - reDay * 60 * 60 * 24 - reHour * 60 * 60) / 60
    reMin = Math.floor(reMin)
    let reSec = (reTime - reDay * 60 * 60 * 24 - reHour * 60 * 60 - reMin * 60)
    reSec = Math.floor(reSec)
    $('#daysR').html(`${reDay} D `);
    $('#hourR').html(`${reHour} H `);
    $('#minR').html(`${reMin} M `);
    $('#secR').html(`${reSec} S `);
}, 1000)
$("textarea").on('input', function (e) {
    let x = e.target.value.length
    x = 100 - e.target.value.length

    if (x >= 0) {
        $('.remainingCh').html(`${x} <span class="text-black">character
                            remaining</span>`);

    } else {
        $('.remainingCh').html(`<span class="fw-medium">
Your Available Character Finished</span>`);
    }
});

