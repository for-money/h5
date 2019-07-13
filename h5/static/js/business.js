var myScroll, pullUpEl, pullUpOffset, generatedCount = 0;

function loaded() {
    //动画部分
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;
    myScroll = new iScroll('wrapper', {
        useTransition: true,
        onRefresh: function () {
            if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
            }
        },
        onScrollMove: function () {
            if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放刷新';
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function () {
            if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';
                pullUpAction();
            }
        }
    });

    loadAction();
}


//初始状态，加载数据
function loadAction() {
    var el, li;
    el = document.getElementById('thelist');

    var str = '<li>\n' +
        '                <div class="left">\n' +
        '                    <img src="../static/image/business-bg.png" alt="">\n' +
        '                </div>\n' +
        '                <div class="right">\n' +
        '                    <h1>宝贝宝贝宝贝</h1>\n' +
        '                    <h4>基本介绍基本介绍基本介绍基本介绍基本介绍</h4>\n' +
        '                    <div class="pay"></div>\n' +
        '                </div>\n' +
        '           </li>';

    var inn = el.innerHTML;

    for (i = 0; i < 4; i++) {
        inn = inn + str;
    }
    el.innerHTML = inn;
    myScroll.refresh();
}

//上拉加载更多数据
function pullUpAction() {
    setTimeout(function () {
        loadAction();
        myScroll.refresh();
    }, 400);
}

setTimeout(loaded, 0);


var gift = $("#gift");

$('#thelist').on('click', '.pay', function () {
    gift.show();
})


$(".close").on('click', function () {
    gift.hide();
})


$(".list li").on('click', function () {
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


$(".btn-next div:nth-child(1)").on('click', function () {

})

$(".btn-next div:nth-child(2)").on('click', function () {
    gift.hide();
})
