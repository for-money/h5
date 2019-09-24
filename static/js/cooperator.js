var data = [
    {
        label: '山西',
        value: 0,
        children: [
            {
                label: '运城',
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
        label: '陕西',
        value: 1,
        children: [
            {
                label: '宝鸡',
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


var fixeds = document.querySelectorAll('ul li');

for (var i = 0; i < fixeds.length; i++) {
    fixeds[i].onclick = function () {
        for (var n = 0;n < fixeds.length; n++) {
            fixeds[n].className = '';
        }
        this.className = 'active';
    }

}


