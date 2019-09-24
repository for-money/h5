
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

var pro = document.querySelector('.first .city.pro');
var town = document.querySelector('.first .city.town');
var coun = document.querySelector('.first .city.coun');


var pro2 = document.querySelector('.three .city.pro');
var town2 = document.querySelector('.three .city.town');
var coun2 = document.querySelector('.three .city.coun');


function showCity(type) {
    switch (type) {
        case 'first':
            weui.picker(data, {
                onConfirm: function (result) {
                    pro.firstElementChild.innerHTML = result[0].label;
                    town.firstElementChild.innerHTML = result[1].label;
                    coun.firstElementChild.innerHTML = result[2].label;
                }
            });
            break;
        case 'three':
            weui.picker(data, {
                onConfirm: function (result) {
                    pro2.firstElementChild.innerHTML = result[0].label;
                    town2.firstElementChild.innerHTML = result[1].label;
                    coun2.firstElementChild.innerHTML = result[2].label;
                }
            });
            break;
    }

}


pro.addEventListener('touchstart', function (e) {
    e.preventDefault()
    showCity('first')
})

town.addEventListener('touchstart', function (e) {
    e.preventDefault()
    showCity('first')
})

coun.addEventListener('touchstart', function (e) {
    e.preventDefault()
    showCity('first')
})


 pro2.addEventListener('touchstart', function (e) {
    e.preventDefault()
    showCity('three')
})

town2.addEventListener('touchstart', function (e) {
    e.preventDefault()
    showCity('three')
})

coun2.addEventListener('touchstart', function (e) {
    e.preventDefault()
    showCity('three')
})



var lis = document.querySelectorAll('.two > li');

for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        for (var n = 0;n < lis.length; n++) {
            lis[n].querySelector('.left').className = 'left';
        }
        this.querySelector('.left').className = 'left active';
    }

}