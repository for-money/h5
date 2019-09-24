
// 这里西药微信配置



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
        onConfirm: function (result) {
            pro.firstElementChild.innerHTML = result[0].label;
            town.firstElementChild.innerHTML = result[1].label;
            coun.firstElementChild.innerHTML = result[2].label;
        }
    });
}


pro.addEventListener('touchstart', function (e) {
    e.preventDefault()
    showCity()
})

town.addEventListener('touchstart', function (e) {
    e.preventDefault()
    showCity()
})

coun.addEventListener('touchstart', function (e) {
    e.preventDefault()
    showCity()
})


