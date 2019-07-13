$(".gift .list li").on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})


var btn = $('.btn');
btn.find('.add').on('click', function () {
    $('.btn .count').html(function (index, val) {
        return Number(val) + 1;
    })
})

btn.find('.reduce').on('click', function () {
    $('.btn .count').html(function (index, val) {
        var num = Number(val) - 1;
        if (num < 0) {
            return 0;
        } else {
            return num;
        }
    })
})