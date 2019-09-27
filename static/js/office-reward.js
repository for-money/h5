$(function () {
    let tabs = $('.tab>.card');
    tabs.on('click', function () {
        let index = $(this).index();
        tabs.removeClass('active').eq(index).addClass('active');
        if (index < 4) {
            $('.active-module').css('display', 'block');
            $('.business').css('display', 'none');
            $('.player').css('display', 'none');
            $('.advertisement').css('display', 'none');
            $('.activity').css('display', 'none');

        }
        if (index === 4) {
            $('.business').css('display', 'block');
            $('.active-module').css('display', 'none');
            $('.player').css('display', 'none');
            $('.advertisement').css('display', 'none');
            $('.activity').css('display', 'none');
        }
        if (index === 5) {
            $('.player').css('display', 'block');
            $('.active-module').css('display', 'none');
            $('.business').css('display', 'none');
            $('.advertisement').css('display', 'none');
            $('.activity').css('display', 'none');
        }
        if (index === 6) {
            $('.advertisement').css('display', 'block');
            $('.active-module').css('display', 'none');
            $('.business').css('display', 'none');
            $('.player').css('display', 'none');
            $('.activity').css('display', 'none');
        }
        if (index === 7) {
            $('.activity').css('display', 'block');
            $('.active-module').css('display', 'none');
            $('.business').css('display', 'none');
            $('.player').css('display', 'none');
            $('.advertisement').css('display', 'none');
        }
    });
    tabs.eq(6).triggerHandler('click');

    let items = $('.select-item>.items');
    items.on('click', function () {
        let index = $(this).index();
        items.removeClass('active').eq(index).addClass('active');
    });
    items.eq(0).triggerHandler('click');

    let advertisementItems = $('.advertisement-select-item>.items');
    advertisementItems.on('click', function () {
        let index = $(this).index();
        advertisementItems.removeClass('active').eq(index).addClass('active');
    });
    advertisementItems.eq(0).triggerHandler('click');

})

wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        var img = document.querySelector('.imgbox > img');
        img.src = localIds;
    }
});

var data = [
    {
        label: 16,
        value: 0,
    },
    {
        label: 17,
        value: 1,
    },
    {
        label: 18,
        value: 1,
    }
];

var gaodu = [
    {
        label: 160,
        value: 0,
    },
    {
        label: 170,
        value: 1,
    },
    {
        label: 180,
        value: 1,
    }
];

var weights = [
    {
        label: 55,
        value: 0,
    },
    {
        label: 56,
        value: 1,
    },
    {
        label: 57,
        value: 1,
    }
];

var age = document.querySelector('.age.pro');
var hights = document.querySelector('.age.hights');
var tizhong = document.querySelector('.age.weights');

function selectage() {
    weui.picker(data, {
        onConfirm: function (result) {
            age.firstElementChild.innerHTML = result[0].label;
        }
    });
}

function selecthights() {
    weui.picker(gaodu, {
        onConfirm: function (result) {
            hights.firstElementChild.innerHTML = result[0].label;
        }
    });
}

function selecttizhong() {
    weui.picker(weights, {
        onConfirm: function (result) {
            tizhong.firstElementChild.innerHTML = result[0].label;
        }
    });
}

age.addEventListener('touchstart', function (e) {
    e.preventDefault();
    selectage()
})
hights.addEventListener('touchstart', function (e) {
    e.preventDefault();
    selecthights()
});
tizhong.addEventListener('touchstart', function (e) {
    e.preventDefault();
    selecttizhong()
});