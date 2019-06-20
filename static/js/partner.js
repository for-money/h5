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
        '             <div class="content" style="background-image: url(\'../static/image/person.png\')">\n' +
        '                 <div class="border">杨宇的店铺</div>\n' +
        '             </div>\n' +
        '             <div class="time">\n' +
        '                 <span>加入日期：</span>\n' +
        '                 <span>2019-12-12</span>\n' +
        '             </div>\n' +
        '              <div class="look"></div>\n' +
        '          </li>';

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


var data = [
    {
        label: '山西省',
        value: 0,
        children: [
            {
                label: '运城市',
                value: '00',
                children: [
                    {
                        label: '盐湖区',
                        value: '000'
                    }
                ]
            }
        ]
    },
    {
        label: '陕西省',
        value: 1,
        children: [
            {
                label: '宝鸡市',
                value: '11',
                children: [
                    {
                        label: '盐湖区',
                        value: '111'
                    }
                ]
            }
        ]
    }
]

var pro = document.querySelector('.city.pro');
var town = document.querySelector('.city.town');
var coun = document.querySelector('.city.coun');

function showCity() {
    weui.picker(data, {
        className: 'pro',
        container: 'body',
        onConfirm: function (result) {
            pro.firstElementChild.innerHTML = result[0].label;
            town.firstElementChild.innerHTML = result[1].label;
            coun.firstElementChild.innerHTML = result[2].label;
        },
        id: 'pro'
    });
}


pro.addEventListener('touchstart', function () {
    showCity()
})

town.addEventListener('touchstart', function () {
    showCity()
})

coun.addEventListener('touchstart', function () {
    showCity()
})

var search = document.querySelector('.selectCity .search')
search.onclick = function () {
   // 搜索
}




