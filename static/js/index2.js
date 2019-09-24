var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination'
    },
});


var pullUp = document.getElementById('pullUp');


pullUp.onclick = function () {
    pullUpAction();
}


//初始状态，加载数据
function loadAction() {
    var el, li;
    el = document.getElementById('thelist');

    var str = '<li>\n' +
        '                <div class="left">\n' +
        '                    <img src="../static/image/h-1.png" alt="">\n' +
        '                    <div class="l">\n' +
        '                        <img src="../static/image/jzbl.png" alt="">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="right">\n' +
        '                    <div class="name">\n' +
        '                        <span>名称： 堕落凡臣的猪</span>\n' +
        '                        <img src="../static/image/come-in.png" alt="">\n' +
        '                    </div>\n' +
        '                    <div class="count">\n' +
        '                        <span>人数： 1231</span>\n' +
        '                        <ul class="imglist">\n' +
        '                            <li>\n' +
        '                                <img src="../static/image/index-1.png" alt="">\n' +
        '                            </li>\n' +
        '                            <li>\n' +
        '                                <img src="../static/image/index-2.png" alt="">\n' +
        '                            </li>\n' +
        '                            <li>\n' +
        '                                <img src="../static/image/index-3.png" alt="">\n' +
        '                            </li>\n' +
        '                            <li>\n' +
        '                                <img src="../static/image/index-4.png" alt="">\n' +
        '                            </li>\n' +
        '                            <li>\n' +
        '                                <img src="../static/image/index-5.png" alt="">\n' +
        '                            </li>\n' +
        '                        </ul>\n' +
        '                    </div>\n' +
        '                    <div class="sign">\n' +
        '                        <img src="../static/image/singin-ban.png" alt="">\n' +
        '                        <img src="../static/image/singin-hui.png" alt="">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="bianhao">60</div>\n' +
        '            </li>' ;

    var inn = el.innerHTML;

    for (i = 0; i < 4; i++) {
        inn = inn + str;
    }
    el.innerHTML = inn;
}

//上拉加载更多数据
function pullUpAction() {
    setTimeout(function () {
        loadAction();
    }, 400);
}


