var time = 10;
var t;
var timedom = $('#timedom');
var now = 0;
var jizancount = 0;
var imglist = $('.imglist');
var lis = imglist.find('ul li');
var mysave = $('.three .left > img');
var mysavebtn = $('.saveBtn');
var myjizanbtn = $('.jizan');
var mujizan = $('.j-z img')
var myselect = $('.two .beishu > li');
var zhongjiang = $('.re .btn');


// 页面点击
zhongjiang.on('click', function () {
    if ($(this).parent().hasClass('active')) {
        $('#zhongjiang').addClass('active');
        $(this).parent().removeClass('active')
    }
})

$('#zhongjiang img ').on('click', function () {
    $(this).parent().removeClass('active');
    // 展示明细
    $("#more").addClass('active');
})

$('#gussing .button img:last-child').on('click', function () {
    $("#more").addClass('active');
})

$("#more .close").on('click', function () {
    $(this).closest('#more').removeClass('active');
})



// 页面点击结束
//

var database = ['gou', 'hou', 'hu', 'ji', 'long', 'ma', 'niu', 'she', 'shu', 'tu', 'yang', 'zhu', 'shenmi', 'tiqu'];

var nowData = [];   // 当前数据获取的详情


function timeReduce() {
    clearInterval(t);
    t = setInterval(function () {
        time--;
        timedom.html(time);
        if (time <= 0) {
            next()
        }
    }, 1000)
}


function getCard() {
    // 卡片具体的需要进行ajax获取
    // 本次可获得的图标和12个图标需要获取

    // 暂时模拟
    setTimeout(function () {

        while (nowData.length < 12) {
            var n = Math.floor(Math.random() * 12);
            nowData.push(database[n]);
        }


        init();
        timeReduce();
    }, 2000)
}


function reset() {
    // 图标更换
    imglist.off('click', ' ul > li');
    mysavebtn.off('click');
    myjizanbtn.off('click');


    lis.each(function (index, li) {
        // 添加图片
        $(li).removeClass('active').find('.card__side--back img').removeAttr('src');
        // 去除状态
        $(li).find('.card__side--front').removeClass('showGreen');
        $(li).find('.card__side--back').removeClass('showRed');
    })

    // 我的选择重置
    myselect.each(function (index, li) {
        $(li).find('.right > img').removeAttr('data-btn');
        $(li).children('img').attr('src', '../static/image/gussing.png');
    })

    // 我的保留重置
    mysave.attr('src', '../static/image/gussing.png');
}


function init() {

    imglist.on('click', 'ul > li', function () {
        if (now === 3 || $(this).hasClass('active')) {
            return;
        }
        var index = $(this).index();
        var src = '../static/image/shengxiao/' + nowData[index] + '.png';
        if (nowData[index] === 'shenmi') {
            myselect.eq(3).children('img').attr('src', src);
        } else {
            $(this).addClass('active').find('.card__side--back > img').attr('src', src);
            myselect.eq(now).children('img').attr('src', src);
            myselect.eq(now).find('.right > img').attr('data-btn', 'yes');
            $(this).find('.card__side--front').addClass('showGreen');
            $(this).find('.card__side--back').addClass('showRed');
            now++;
        }
    })

    mysavebtn.on('click', function () {
        var canClick = $(this).attr('data-btn');
        if (canClick) {
            $(this).removeAttr('data-btn');
            var src = $(this).parent().prev().attr('src');
            var index = mysavebtn.index(this);
            mysave.eq(index).attr('src', src)
        }
    })


    myjizanbtn.on('click', function () {
        var canClick = $(this).attr('data-btn');
        if (canClick) {
            $(this).removeAttr('data-btn');
            var src = $(this).parent().prev().attr('src');
            mujizan.eq(jizancount).attr('src', src);
            jizancount++;
            if (jizancount >= 12) {
                jizancount = 0;
            }
        }
    })
}


function next() {
    time = 10;
    now = 0;
    reset();
    getCard();
    // 本次可以获得的图标需要更换
}


next()