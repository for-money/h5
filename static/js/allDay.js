var priceCount = [
    {
        price: 10,
        count: 100
    },
    {
        price: 200,
        count: 2000
    },
    {
        price: 500,
        count: 5000
    },
    {
        price: 1000,
        count: 10000
    },
    {
        price: 2000,
        count: 20000
    },
    {
        price: 10000,
        count: 100000
    },
];


var listData = [];


function getList(user, priceCount) {
    if (user.isVip) {
        return priceCount.map(function (item) {
            return {
                icon: user.cut + '-' + item.count,
                price: item.price * user.cut * 10 / 100,
                count: item.count
            }
        })
    } else {
        return priceCount.map(function (item) {
            return {
                icon: '10-' + item.count,
                price: item.price,
                count: item.count
            }
        })
    }
}


// 获取数据之后需要添加 js 代码

var userMessage = {
    id: '123123',
    name: '李四',
    icon: 'aa.jpg',
    isVip: true,
    cut: 9
}


var lis = $("ul.select li");

function draw() {
    listData = getList(userMessage, priceCount);
    lis.each(function (index, li) {
        var img = $("<img>").attr('src', '../../static/image/' + listData[index].icon + '.png');
        $(li).append(img)
    })
}


draw();

lis.on('click',function () {
    // 点击之后调用接口
    alert('调用接口')

})



