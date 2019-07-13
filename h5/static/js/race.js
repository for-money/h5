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
}


var pullUp = document.querySelector('#pullUp');
pullUp.onclick = function () {
    setTimeout(function () {
        loadAction();
    }, 400);
}