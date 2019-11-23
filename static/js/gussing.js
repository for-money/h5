var time = 30;
var t;
var timedom = $('#timedom');
var now = 0;
var jizancount = 0;
var imglist = $('.imglist');
var lis = imglist.find('ul li');
var mysave = $('.three .left > img');
var mysavebtn = $('.saveBtn');
var myjizanbtn = $('.jizan');
var myduijiang = $('.duihuan');
var mujizan = $('.j-z img')
var myselect = $('.two .beishu > li');
var zhongjiang = $('.re .btn');
var cansuccessDom = $('.first .beishu > li');

var userinfo = {};

var jizan = [];

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
    getMingxi();
    $("#more").addClass('active');
})

// 明细
$('#gussing .button img:last-child').on('click', function () {
    getMingxi();

    $("#more").addClass('active');
})

// 规则
$('#gussing .button img:first-child').on('click', function () {
    $("#rules").show(200);
})

$("#more .close").on('click', function () {
    $(this).closest('#more').removeClass('active');
})




$('.weui-dialog__btn_primary').on('click', function () {
    $(this).closest('.js_dialog[id]').hide();
})




$('.five .right div:nth-child(2)').on('click', function () {
    var  shuliang = parseFloat($(this).prev().html());
    $.post('/api/manghe/Handler.ashx', {
        openid: userinfo.openid,
        Key: userinfo.key,
        ac: 'tiqujingjidouwin',
        shuliang: shuliang
    })
    $(this).prev().html(0)
})

// 页面点击结束
//

var database = ['gou', 'hou', 'hu', 'ji', 'long', 'ma', 'niu', 'she', 'shu', 'tu', 'yang', 'zhu', 'shenmi', 'tiqu'];

var peilv =    [1.0, 2.1, 3.2, 1.4, 2.1, 3.5, 4.2, 1.3, 2.4, 1.0, 3.2, 2.3];

var nowData = [];   // 当前数据获取的详情
var cansuccess = [];


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
    nowData= [];
    cansuccess = [];

    while (nowData.length < 12) {
        var n = Math.floor(Math.random() * 12);
        nowData.push(database[n]);
    }

    while (cansuccess.length < 3) {
        var n = Math.floor(Math.random() * 12);
        cansuccess.push(database[n]);
    }


    init();
    timeReduce();

}


function reset() {
    // 图标更换
    imglist.off('click', ' ul > li');
    mysavebtn.off('click');
    myjizanbtn.off('click');
    myduijiang.off('click');
    $('.bottom-btn li').off('click');


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
        $(li).children('img').attr('src', '../static/image/gussing.png').removeAttr('data-src');
    })

    // 我的保留重置
    mysave.attr('src', '../static/image/gussing.png').removeAttr('save');
}

function getSuccess() {
    cansuccessDom.each(function (index, li) {
        $(li).children('img').attr('src', '../static/image/shengxiao/' + cansuccess[index] + '.png');
        $(li).find('.right div:last-child').html(peilv[database.indexOf(cansuccess[index])]);
    })
    var er =   peilv[database.indexOf(cansuccess[0])] + peilv[database.indexOf(cansuccess[1])];
    var san =  er +  peilv[database.indexOf(cansuccess[2])];

    $('.first .bottom > li').eq(0).find('span:last-child').html(er.toFixed(1));
    $('.first .bottom > li').eq(1).find('span:last-child').html(san.toFixed(1));
}

function jizanInit() {
    for(var j=0;j<jizan.length;j++) {
        mujizan.eq(j).attr('src', '../static/image/shengxiao/' + jizan[j] + '.png');
    }
}

function init() {

    // 图片列表点击
    imglist.on('click', 'ul > li', function () {
        if (now === 3 || $(this).hasClass('active')) {
            return;
        }

        var count =parseInt( $('.four .right > div:first-child').text() );

        count = count - 10;

        if(count < 0) {
            $('#nomore').show(200);
            return;
        } else {
            update(-10, '竞技豆消耗10');
            $('.four .right > div:first-child').html(count);
        }

        var index = $(this).index();
        var src = '../static/image/shengxiao/' + nowData[index] + '.png';
        if (nowData[index] === 'shenmi') {
            myselect.eq(3).children('img').attr('src', src);
        } else {
            $(this).addClass('active').find('.card__side--back > img').attr('src', src);
            myselect.eq(now).children('img').attr('src', src).attr('data-src', nowData[index]);

            var canclick = cansuccess.indexOf(nowData[index]) === -1 ? 'no': 'yes';

            myselect.eq(now).find('.right > img').attr('data-btn', canclick);

            $(this).find('.card__side--front').addClass('showGreen');
            $(this).find('.card__side--back').addClass('showRed');
            now++;
        }
    })

    // 保留按钮点击
    mysavebtn.on('click', function () {
        var canClick = $(this).attr('data-btn');
        if (canClick === 'yes') {
            $(this).removeAttr('data-btn');
            $(this).siblings().removeAttr('data-btn');
            var src = $(this).parent().prev().attr('src');
            var index = mysavebtn.index(this);
            mysave.eq(index).attr('src', src).attr('save','yes');
        } else {
            $('#cannotclick').show(200);
        }
    })

    // 兑换点击
    myduijiang.on('click', function () {
        var canClick = $(this).attr('data-btn');
        if (canClick === 'yes') {
            $(this).removeAttr('data-btn');
            $(this).siblings().removeAttr('data-btn');

            var src = $(this).parent().prev().attr('data-src');

            var pei =  peilv[database.indexOf(src)]


            $('.five .right > div:first-child').html(function (index, val) {
                update(pei * 10, '赢取竞技豆' + pei * 10);
                return Number(val) + pei * 10;
            })

            $('#zhongjiang').show();
            var t = setTimeout(function () {
                $('#zhongjiang').hide();
                clearTimeout(t);
            }, 1500)

        } else {
            $('#cannotclick').show(200);
        }
    })

    // 积攒点击
    myjizanbtn.on('click', function () {
        var canClick = $(this).attr('data-btn');
        if (canClick === 'yes') {
            $(this).removeAttr('data-btn');
            $(this).siblings().removeAttr('data-btn');
            var src = $(this).parent().prev().attr('src');
            var datasrc = $(this).parent().prev().attr('data-src');
            if( jizan.length < 12) {
                mujizan.eq(jizan.length).attr('src', src);
                jizan.push(datasrc);
            } else {
                var tmp = [];
                tmp.push(datasrc);
                for(var i= 1 ;i< jizan,length;i++) {
                    tmp.push(jizan[i]);
                }
                jizan = tmp;
                jizanInit();
            }
            updatejizan(jizan);
        }  else {
            $('#cannotclick').show(200);
        }
    })

    // 二连兑奖

    $('.bottom-btn li').eq(0).on('click', function () {
        var len = mysave.filter('[save=yes]').length;
        var that = this;
        if(len === 2) {
            var count = parseFloat($('.first .bottom > li').eq(0).find('span:last-child').text()) * 10;
            $('.five .right > div:first-child').html(function (index, val) {
                return parseFloat(val) + count
            })
            update(count, '赢取竞技豆' + count);
            var t = setTimeout(function () {
                $('#zhongjiang').hide();
                clearTimeout(t);
            }, 1500)
        }
    })

    // 三连兑奖
    $('.bottom-btn li').eq(1).on('click', function () {
        var that = this;
        if(len === 3) {
            var count =  parseFloat($('.first .bottom > li').eq(1).find('span:last-child').text())  * 10 ;
            $('.five .right > div:first-child').html(function (index, val) {
                return  parseFloat(val) + count
            })
            update(count, '赢取竞技豆' + count);
            var t = setTimeout(function () {
                $('#zhongjiang').hide();
                clearTimeout(t);
            }, 1500)
        }
    })

}






function next() {
    time = 10;
    now = 0;
    reset();
    getCard();
    // 本次可以获得的图标需要更换
    getSuccess();
}


function getUserinfo() {
    $.getJSON('/api/manghe/userinf.aspx', function (res) {
        if(res.state === 'success') {
            userinfo = res;
            $('.four .right div:nth-child(1)').html(userinfo.jingjidou)
            $('.five .right div:nth-child(1)').html(userinfo.jingjidouwin);
        }
    })
}

function update(shuliang, Tmemo, success) {
    $.post('/api/manghe/Handler.ashx', {
        shuliang:shuliang,
        openid: userinfo.openid,
        Tmemo: Tmemo,
        Key: userinfo.key,
        ac: 'jingjidouupdate',
    }, function (res) {
        // 请求成功
    })
}

function getjizan() {
    $.getJSON('/api/manghe/jizan.aspx', function (res) {
        if(res.state === 'success') {
            jizan = res.jizanico;
            jizanInit();
        }
    })
}

function updatejizan(icos) {
    $.post('/api/manghe/Handler.ashx', {
        icos:icos,
        openid: userinfo.openid,
        Key: userinfo.key,
        ac: 'jizanupdate'
    })
}


function getMingxi() {
    $("#more .box > ul").html('');
    $.getJSON('/api/manghe/JingjidouList.aspx', function (res) {

            var str = '';
            for(var i=0;i<res.Table.length;i++) {
                str += '<li><div class="time">';
                str += res.Table[i].addtime
                str += '</div><div class="mes">';
                str += res.Table[i].Tmemo
                str += '<span>' + res.Table[i].doudou + '</span>'
                str += '竞技豆</div></li>' ;
            }
            $("#more .box > ul").html(str)

    })
}

next();

getjizan();


getUserinfo();




